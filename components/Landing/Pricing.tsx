import './Pricing.css';

const plans = [
    {
        name: 'Starter',
        price: '$0',
        features: ['2,000 words / mo', 'Basic Templates', 'Standard Support', '1 User'],
        btn: 'Get Started',
        popular: false
    },
    {
        name: 'Pro',
        price: '$29',
        features: ['Unlimited words', 'All 50+ Templates', 'Priority AI Support', '3 Users', 'Advanced Analytics'],
        btn: 'Start Free Trial',
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$99',
        features: ['Custom AI Training', 'API Access', 'Dedicated Manager', 'Unlimited Users', 'White-labeling'],
        btn: 'Contact Sales',
        popular: false
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-header">
                <h2 className="section-title">Scale your content, <span className="gradient-text">not your costs</span></h2>
                <p className="section-subtitle">Flexible pricing for creators and teams of all sizes.</p>
            </div>
            <div className="pricing-grid">
                {plans.map((p, i) => (
                    <div key={i} className={`pricing-card glass ${p.popular ? 'popular' : ''}`}>
                        {p.popular && <div className="popular-badge">Most Popular</div>}
                        <h3 className="plan-name">{p.name}</h3>
                        <div className="plan-price">{p.price}<span className="plan-period">/mo</span></div>
                        <ul className="plan-features">
                            {p.features.map((f, j) => (
                                <li key={j}><span>✓</span> {f}</li>
                            ))}
                        </ul>
                        <button className={p.popular ? 'btn-primary' : 'btn-secondary'}>{p.btn}</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
