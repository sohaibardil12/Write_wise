'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signUpWithEmail } from '@/lib/auth-actions';
import '../Auth.css';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            await signUpWithEmail(email, password, fullName);
            setMessage('Success! Check your email for the confirmation link.');
        } catch (error: any) {
            setMessage(`Error: ${error.message}`);
        }

        setLoading(false);
    };

    return (
        <div className="auth-container">
            <div className="auth-card glass">
                <div className="auth-header">
                    <h1 className="gradient-text">Join WriteWise</h1>
                    <p>Start your free 14-day pro trial today.</p>
                </div>
                <form className="auth-form" onSubmit={handleSignup}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
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
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                    {message && <p className="auth-message">{message}</p>}
                </form>
                <div className="auth-divider">
                    <span>or sign up with</span>
                </div>
                <div className="social-login">
                    <button className="btn-secondary">Google</button>
                    <button className="btn-secondary">GitHub</button>
                </div>
                <p className="auth-footer">
                    Already have an account? <Link href="/auth/login">Login</Link>
                </p>
            </div>
            <div className="auth-bg-glow"></div>
        </div>
    );
}
