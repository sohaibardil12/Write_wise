import './Features.css';

const features = [
    {
        title: 'AI Content Generation',
        desc: 'Generate high-quality blogs, emails, and marketing copy in seconds using advanced LLMs.',
        icon: '✍️'
    },
    {
        title: 'Prebuilt Templates',
        desc: 'Choose from 50+ templates for social media, newsletters, and ad copy.',
        icon: '📁'
    },
    {
        title: 'Multi-Language Support',
        desc: 'Translate and generate content in 25+ languages with specialized tone adjustment.',
        icon: '🌐'
    },
    {
        title: 'Tone & Style Editing',
        desc: 'Fine-tune AI suggestions to match your brand voice with real-time editing tools.',
        icon: '⚡'
    },
    {
        title: 'Engagement Analytics',
        desc: 'Track how your content performs with built-in engagement and SEO analytics.',
        icon: '📊'
    },
    {
        title: 'Cloud Sync',
        desc: 'Save your work securely and access it from any device, anywhere in the world.',
        icon: '☁️'
    }
];

export default function Features() {
    return (
        <section id="features" className="features-section">
            <div className="features-header">
                <h2 className="section-title">Everything you need to <span className="gradient-text">scale</span></h2>
                <p className="section-subtitle">Powerful features designed to supercharge your content workflow.</p>
            </div>
            <div className="features-grid">
                {features.map((f, i) => (
                    <div key={i} className="feature-card glass">
                        <div className="feature-icon">{f.icon}</div>
                        <h3 className="feature-title">{f.title}</h3>
                        <p className="feature-desc">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
