export type EnrollmentInput = {
  name: string;
  email: string;
  phone: string;
  institution: string;
  city: string;
  courseId: string;
};

export type ValidationError = { field: string; message: string };

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_RE = /^[0-9+\-\s()]{8,20}$/;

export function validateEnrollmentInput(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitized?: EnrollmentInput;
} {
  const errors: ValidationError[] = [];
  if (!data || typeof data !== "object") {
    return { valid: false, errors: [{ field: "_", message: "Invalid request body" }] };
  }
  const d = data as Record<string, unknown>;

  const name = sanitizeString(d.name);
  const email = sanitizeString(d.email).toLowerCase();
  const phone = sanitizeString(d.phone);
  const institution = sanitizeString(d.institution);
  const city = sanitizeString(d.city);
  const courseId = sanitizeString(d.courseId || d.course_id);

  if (!name || name.length < 2 || name.length > 120) {
    errors.push({ field: "name", message: "Full name must be 2–120 characters" });
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.push({ field: "email", message: "Enter a valid email address" });
  }
  if (!phone || !PHONE_RE.test(phone)) {
    errors.push({ field: "phone", message: "Enter a valid phone/WhatsApp number (8–20 digits)" });
  } else {
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      errors.push({ field: "phone", message: "Phone number must contain 8–15 digits" });
    }
  }
  if (!institution || institution.length < 2 || institution.length > 200) {
    errors.push({ field: "institution", message: "College / Organization must be 2–200 characters" });
  }
  if (!city || city.length < 2 || city.length > 100) {
    errors.push({ field: "city", message: "City must be 2–100 characters" });
  }
  if (!courseId) {
    errors.push({ field: "courseId", message: "Course is required" });
  }

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    sanitized: { name, email, phone, institution, city, courseId },
  };
}

function sanitizeString(v: unknown): string {
  if (typeof v !== "string") return "";
  // Strip control chars, trim, collapse spaces, limit length
  return v
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 500);
}

export function validateVerifyInput(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitized?: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string };
} {
  const errors: ValidationError[] = [];
  if (!data || typeof data !== "object") {
    return { valid: false, errors: [{ field: "_", message: "Invalid body" }] };
  }
  const d = data as Record<string, unknown>;
  const orderId = sanitizeString(d.razorpay_order_id || d.razorpayOrderId);
  const paymentId = sanitizeString(d.razorpay_payment_id || d.razorpayPaymentId);
  const signature = sanitizeString(d.razorpay_signature || d.razorpaySignature);

  if (!orderId || !orderId.startsWith("order_")) errors.push({ field: "razorpay_order_id", message: "Invalid order ID" });
  if (!paymentId || !paymentId.startsWith("pay_")) errors.push({ field: "razorpay_payment_id", message: "Invalid payment ID" });
  if (!signature || signature.length < 10) errors.push({ field: "razorpay_signature", message: "Invalid signature" });

  if (errors.length) return { valid: false, errors };
  return { valid: true, errors: [], sanitized: { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } };
}
