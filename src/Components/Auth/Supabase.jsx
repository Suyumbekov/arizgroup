// src/Supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Keep session in local storage
    autoRefreshToken: true, // Automatically refresh the JWT token
    detectSessionInUrl: true, // Detect session from URL on social login (OAuth)
  },
});
