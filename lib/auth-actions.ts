import { supabase } from "@/lib/supabase";

// 1️⃣ Email/Password Signup + Table Insert
export async function signUpWithEmail(email: string, password: string, name: string) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: name,
            },
        },
    });

    if (authError) throw authError;

    // Insert into users table
    if (authData.user) {
        const { error: userError } = await supabase
            .from("USERS")
            .insert([
                {
                    id: authData.user.id,
                    email: email,
                    name: name,
                },
            ]);

        if (userError) console.error("Table insert error:", userError.message);
        else console.log("User inserted into table");
    }

    return authData;
}

// 2️⃣ Email/Password Login
export async function loginWithEmail(email: string, password: string) {
    // 1️⃣ Login with email/password
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;

    const userId = data.user?.id;
    const userEmail = data.user?.email;

    if (userId && userEmail) {
        // 2️⃣ Check if user exists in your table
        const { data: existingUser } = await supabase
            .from("USERS")
            .select("*")
            .eq("id", userId)
            .single();

        // 3️⃣ If not, insert them
        if (!existingUser) {
            const { error: insertError } = await supabase
                .from("USERS")
                .insert([
                    {
                        id: userId,
                        email: userEmail,
                        name: userEmail, // Default name to email
                    },
                ]);

            if (insertError) console.error("Error inserting user into table:", insertError.message);
            else console.log("Inserted user into table:", userId);
        }
    }

    return data;
}

// 3️⃣ Social Login (Google / GitHub)
export async function loginWithProvider(provider: "google" | "github") {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: `${window.location.origin}/dashboard`
        }
    });

    if (error) throw error;
    return data;
}
