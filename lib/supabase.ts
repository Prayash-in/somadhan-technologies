import { createClient } from "@supabase/supabase-js";

// Public client — safe for browser (anon key, RLS enforced)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Server-side client — uses service_role if available (bypasses RLS), else falls back to anon key
// For production, set SUPABASE_SERVICE_ROLE_KEY in env (never expose to client)
export function getSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");

  // Prefer service role on server
  const key = serviceKey || anonKey;
  if (!key) throw new Error("Missing Supabase key (SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY)");

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// Helper to get Supabase client for API routes (always server)
export const supabaseServer = {
  getClient: getSupabaseServerClient,
};