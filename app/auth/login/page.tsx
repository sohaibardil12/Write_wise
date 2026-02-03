'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { loginWithEmail, loginWithProvider } from '@/lib/auth-actions';
import '../Auth.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await loginWithEmail(email, password);
            router.push('/dashboard');
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        }
        setLoading(false);
    };

    const handleGoogleLogin = async () => {
        try {
            await loginWithProvider('google');
        } catch (error: any) {
            setMessage(`Google Error: ${error.message}`);
        }
    };

    const handleGithubLogin = async () => {
        try {
            await loginWithProvider('github');
        } catch (error: any) {
            setMessage(`GitHub Error: ${error.message}`);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card glass">
                <div className="auth-header">
                    <h1 className="gradient-text">Welcome Back</h1>
                    <p>Login to continue your writing journey.</p>
                </div>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn-primary w-full" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {message && <p className="auth-message">{message}</p>}
                </form>
                <div className="auth-divider">
                    <span>or continue with</span>
                </div>
                <div className="social-login">
                    <button type="button" className="btn-secondary" onClick={handleGoogleLogin}>Google</button>
                    <button type="button" className="btn-secondary" onClick={handleGithubLogin}>GitHub</button>
                </div>
                <p className="auth-footer">
                    Don't have an account? <Link href="/auth/signup">Sign up</Link>
                </p>
            </div>
            <div className="auth-bg-glow"></div>
        </div>
    );
}
