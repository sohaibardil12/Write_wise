import './Hero.css';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="badge glass">✨ AI-Powered Writing Assistant</div>
                <h1 className="hero-title">
                    Write <span className="gradient-text">Whiter</span>, Faster, <br />
                    and Smarter with WriteWise
                </h1>
                <p className="hero-subtitle">
                    The ultimate AI writing companion for bloggers, marketers, and content creators.
                    Generate high-quality blogs, emails, and social posts in seconds.
                </p>
                <div className="hero-btns">
                    <button className="btn-primary">Get Started Free</button>
                    <button className="btn-secondary">Explore Templates</button>
                </div>
            </div>
            <div className="hero-visual">
                <div className="visual-card glass">
                    <div className="card-header">
                        <span className="dot red"></span>
                        <span className="dot yellow"></span>
                        <span className="dot green"></span>
                    </div>
                    <div className="card-body">
                        <p className="typing-text">How AI supercharges content marketing...</p>
                        <div className="ai-cursor"></div>
                    </div>
                </div>
            </div>
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
        </section>
    );
}
