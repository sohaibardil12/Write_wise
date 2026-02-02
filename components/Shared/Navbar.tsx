import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="navbar-content glass">
                <div className="logo">
                    <Link href="/">
                        <span className="gradient-text">WriteWise</span>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link href="#features">Features</Link>
                    <Link href="#pricing">Pricing</Link>
                    <Link href="/dashboard">Templates</Link>
                </div>
                <div className="nav-actions">
                    <Link href="/auth/login" className="btn-secondary">Login</Link>
                    <Link href="/auth/signup" className="btn-primary">Get Started</Link>
                </div>
            </div>
        </nav>
    );
}
