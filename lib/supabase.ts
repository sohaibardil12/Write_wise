import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Standard client for client-side interactions
export const supabase = createClient(supabaseUrl, supabaseKey);

// Admin client helper - only used on the server
export const getSupabaseAdmin = () => {
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseServiceKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY is required for Admin client');
    }
    return createClient(supabaseUrl, supabaseServiceKey);
};
