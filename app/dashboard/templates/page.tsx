import Link from 'next/link';
export default function TemplatesPage() {
    const templates = [
        { title: 'Blog Post', description: 'Generate a comprehensive blog post.', icon: '📝' },
        { title: 'Social Media Post', description: 'Create engaging posts for social platforms.', icon: '📱' },
        { title: 'Email Newsletter', description: 'Draft professional newsletters.', icon: '📧' },
        { title: 'Product Description', description: 'Write compelling product descriptions.', icon: '🛍️' },
        { title: 'Creative Story', description: 'Spin a creative short story.', icon: '📖' },
        { title: 'Code Snippet', description: 'Generate code snippets in various languages.', icon: '💻' },
    ];

    return (
        <div className="dashboard-content-grid">
            <header className="dashboard-header">
                <h1>Select a <span className="gradient-text">Template</span></h1>
                <p>Choose a template to jumpstart your content creation.</p>
            </header>
            <div className="templates-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
                {templates.map((template, index) => (
                    <Link href={`/dashboard/create?template=${encodeURIComponent(template.title)}`} key={index} className="glass" style={{ padding: '20px', borderRadius: '16px', cursor: 'pointer', transition: 'transform 0.2s', display: 'block' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{template.icon}</div>
                        <h3 style={{ marginBottom: '8px' }}>{template.title}</h3>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{template.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
