export default function SettingsPage() {
    return (
        <div className="dashboard-content-grid">
            <header className="dashboard-header">
                <h1>Account <span className="gradient-text">Settings</span></h1>
            </header>
            <div className="glass" style={{ padding: '24px', borderRadius: '16px', maxWidth: '600px', marginTop: '20px' }}>
                <form>
                    <div style={{ marginBottom: '20px' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-dim)' }}>Full Name</label>
                        <input type="text" className="form-input" defaultValue="John Doe" style={{ width: '100%', padding: '12px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-dim)' }}>Email Address</label>
                        <input type="email" className="form-input" defaultValue="johndoe@example.com" disabled style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-dim)', cursor: 'not-allowed' }} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label className="form-label" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-dim)' }}>Plan</label>
                        <select className="form-select" style={{ width: '100%', padding: '12px', background: 'var(--input-bg)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-main)' }}>
                            <option>Free Tier</option>
                            <option>Pro Plan ($19/mo)</option>
                            <option>Business Plan ($49/mo)</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
                        <button type="button" className="btn-secondary">Cancel</button>
                        <button type="submit" className="btn-primary">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// Add some inline CSS or rely on existing styles
