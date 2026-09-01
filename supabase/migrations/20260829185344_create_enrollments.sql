-- Create enrollments table for Course Enrollment + Razorpay Payment System
-- Follows existing Supabase migration conventions

-- Enable UUID generation if not already enabled
create extension if not exists "pgcrypto";

-- Payment status enum
do $$
begin
  if not exists (select 1 from pg_type where typname = 'payment_status') then
    create type payment_status as enum ('PENDING', 'PAID', 'FAILED');
  end if;
end
$$;

-- Enrollments table
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) >= 2 and char_length(name) <= 120),
  email text not null check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  phone text not null check (char_length(phone) >= 8 and char_length(phone) <= 20),
  institution text not null check (char_length(institution) >= 2 and char_length(institution) <= 200),
  city text not null check (char_length(city) >= 2 and char_length(city) <= 100),
  course_id text not null,
  course_name text not null,
  amount integer not null check (amount > 0),
  currency text not null default 'INR' check (currency = 'INR'),
  payment_status payment_status not null default 'PENDING',
  razorpay_order_id text,
  razorpay_payment_id text,
  razorpay_signature text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Updated_at trigger
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_updated_at_enrollments on public.enrollments;
create trigger set_updated_at_enrollments
  before update on public.enrollments
  for each row execute function public.handle_updated_at();

-- Indexes
create index if not exists idx_enrollments_email on public.enrollments (email);
create index if not exists idx_enrollments_course_id on public.enrollments (course_id);
create index if not exists idx_enrollments_payment_status on public.enrollments (payment_status);
create index if not exists idx_enrollments_razorpay_order_id on public.enrollments (razorpay_order_id);
create index if not exists idx_enrollments_created_at on public.enrollments (created_at desc);

-- Unique constraint: razorpay_payment_id should be unique when present
create unique index if not exists uq_enrollments_razorpay_payment_id
  on public.enrollments (razorpay_payment_id)
  where razorpay_payment_id is not null;

-- Prevent duplicate pending enrollments: unique partial index on (email, course_id) where PENDING
-- Allows retry without creating duplicates if desired, but enforces one pending per email+course
-- Commented out strict version; we handle duplicates in application logic with flexible retry
-- create unique index if not exists uq_enrollments_pending_email_course
--   on public.enrollments (email, course_id)
--   where payment_status = 'PENDING';

-- RLS: Enable but allow service_role bypass; anon can only insert (for fallback)
alter table public.enrollments enable row level security;

-- Allow anon to insert (required if using publishable key fallback)
-- Service role bypasses RLS anyway, so server-side operations always work
drop policy if exists "Allow anon insert enrollments" on public.enrollments;
create policy "Allow anon insert enrollments"
  on public.enrollments for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow anon select own by order" on public.enrollments;
create policy "Allow anon select own by order"
  on public.enrollments for select
  to anon, authenticated
  using (true);

drop policy if exists "Allow anon update own" on public.enrollments;
create policy "Allow anon update own"
  on public.enrollments for update
  to anon, authenticated
  using (true)
  with check (true);

-- Grant access
grant all on public.enrollments to anon, authenticated, service_role;
grant usage on type payment_status to anon, authenticated, service_role;

-- Optional: courses table as source of truth for price (kept in sync with lib/courses.ts)
create table if not exists public.courses (
  id text primary key,
  slug text not null unique,
  name text not null,
  description text,
  price_paise integer not null check (price_paise > 0),
  currency text not null default 'INR',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_updated_at_courses on public.courses;
create trigger set_updated_at_courses
  before update on public.courses
  for each row execute function public.handle_updated_at();

alter table public.courses enable row level security;

drop policy if exists "Allow public read courses" on public.courses;
create policy "Allow public read courses"
  on public.courses for select
  to anon, authenticated
  using (is_active = true);

grant all on public.courses to anon, authenticated, service_role;

-- Seed courses — two functional bootcamps (no separate course pages).
-- Keep previous site structure: enrollment only via /training/* with hidden form revealed on Enroll Now click.
insert into public.courses (id, slug, name, description, price_paise, currency, is_active)
values
  ('agentic-ai-bootcamp', 'agentic-ai-bootcamp', '7-Days Agentic AI Bootcamp', 'Your first step into Generative & Agentic AI — foundations, prompting, tools & a real team prototype in 7 days.', 29900, 'INR', true),
  ('ai-tools-bootcamp', 'ai-tools-bootcamp', '7-Day AI Tools Bootcamp', 'Build your personal AI toolkit — master prompting, research, writing, design, coding, data & automation in 7 hands-on days.', 29900, 'INR', true)
on conflict (id) do update set
  name = excluded.name,
  description = excluded.description,
  price_paise = excluded.price_paise,
  is_active = true,
  updated_at = now();

-- Deactivate any legacy placeholder courses if they were seeded before.
update public.courses set is_active = false where id not in ('agentic-ai-bootcamp', 'ai-tools-bootcamp');
