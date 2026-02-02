import Link from 'next/link';
import './Auth.css';

export default function LoginPage() {
    return (
        <div className="auth-container">
            <div className="auth-card glass">
                <div className="auth-header">
                    <h1 className="gradient-text">Welcome Back</h1>
                    <p>Login to continue your writing journey.</p>
                </div>
                <form className="auth-form">
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="••••••••" />
                    </div>
                    <button type="submit" className="btn-primary w-full">Login</button>
                </form>
                <div className="auth-divider">
                    <span>or continue with</span>
                </div>
                <div className="social-login">
                    <button className="btn-secondary">Google</button>
                    <button className="btn-secondary">GitHub</button>
                </div>
                <p className="auth-footer">
                    Don't have an account? <Link href="/auth/signup">Sign up</Link>
                </p>
            </div>
            <div className="auth-bg-glow"></div>
        </div>
    );
}
