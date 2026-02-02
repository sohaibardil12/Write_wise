import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h2 className="gradient-text">WriteWise</h2>
                    <p>Supercharge your productivity with AI-powered writing assistance.</p>
                </div>
                <div className="footer-links">
                    <div className="link-group">
                        <h4>Product</h4>
                        <a href="#features">Features</a>
                        <a href="/templates">Templates</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                    <div className="link-group">
                        <h4>Company</h4>
                        <a href="/about">About</a>
                        <a href="/blog">Blog</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="link-group">
                        <h4>Legal</h4>
                        <a href="/terms">Terms</a>
                        <a href="/privacy">Privacy</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 WriteWise AI. All rights reserved.</p>
            </div>
        </footer>
    );
}
