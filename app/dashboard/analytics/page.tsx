import Analytics from '@/components/Dashboard/Analytics';

export default function AnalyticsPage() {
    return (
        <div className="dashboard-content-grid">
            <header className="dashboard-header">
                <h1>Your <span className="gradient-text">Analytics</span> Dashboard</h1>
                <p>Track your content performance and usage statistics.</p>
            </header>
            <div className="full-analytics-view" style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <Analytics />
                <div className="glass" style={{ padding: '20px', borderRadius: '16px' }}>
                    <h3>Usage Over Time</h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
                        [Chart Placeholder]
                    </div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px' }}>
                    <h3>Content Topics</h3>
                    <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-dim)' }}>
                        [Topics Cloud Placeholder]
                    </div>
                </div>
            </div>
        </div>
    );
}
