-- Enforce single PAID enrollment per (email, course).
-- Application stores emails lowercased (see lib/validation.ts), so normalize
-- any legacy rows first, then add a partial unique index covering only PAID rows.
-- PENDING rows stay unrestricted so users can retry failed payments.

-- Normalize legacy emails (no-op for already-lowercase rows)
update public.enrollments
set email = lower(trim(email))
where email <> lower(trim(email));

-- One paid enrollment per email+course. Concurrent second payments fail with 23505,
-- which the API maps to a friendly 409 "already enrolled" response.
create unique index if not exists uq_enrollments_paid_email_course
  on public.enrollments (lower(email), course_id)
  where payment_status = 'PAID';
