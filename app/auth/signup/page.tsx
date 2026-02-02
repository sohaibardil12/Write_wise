import Link from 'next/link';
import './Auth.css';

export default function SignupPage() {
    return (
        <div className="auth-container">
            <div className="auth-card glass">
                <div className="auth-header">
                    <h1 className="gradient-text">Join WriteWise</h1>
                    <p>Start your free 14-day pro trial today.</p>
                </div>
                <form className="auth-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn-primary w-full">Create Account</button>
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
