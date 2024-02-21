import { createClient } from "@supabase/supabase-js";

//const supabaseUrl1 = import.meta.VITE_SUPABASE_URL;
//const supabaseAnonKey1 = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = 'https://onwrrdlkwxjilkfbvwhc.supabase.co'
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ud3JyZGxrd3hqaWxrZmJ2d2hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0OTE2NDgsImV4cCI6MTk4OTA2NzY0OH0.KJp7x8bcfUiYTms8ZTV3MyLz3NKi34KqHTNEQbYiYsI"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
