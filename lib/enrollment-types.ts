export type PaymentStatus = "PENDING" | "PAID" | "FAILED";

export type EnrollmentRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  institution: string;
  city: string;
  course_id: string;
  course_name: string;
  amount: number;
  currency: string;
  payment_status: PaymentStatus;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  razorpay_signature: string | null;
  created_at: string;
  updated_at: string;
};
