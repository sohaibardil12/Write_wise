export default function HistoryPage() {
    const historyItems = [
        { title: 'Content Marketing Blog', type: 'Blog', date: '2 hours ago', status: 'Completed' },
        { title: 'Welcome Email Series', type: 'Email', date: 'Yesterday', status: 'Draft' },
        { title: 'Instagram Product Launch', type: 'Social', date: '3 days ago', status: 'Published' },
        { title: 'Tech Trends 2026', type: 'Blog', date: '1 week ago', status: 'Archived' },
        { title: 'Q1 Quarterly Report', type: 'Report', date: '2 weeks ago', status: 'Completed' },
        { title: 'Product Hunt Launch', type: 'Social', date: '3 weeks ago', status: 'Published' },
    ];

    return (
        <div className="dashboard-content-grid">
            <header className="dashboard-header">
                <h1>Content <span className="gradient-text">History</span></h1>
            </header>
            <div className="glass" style={{ padding: '20px', borderRadius: '16px', marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--glass-border)' }}>
                            <th style={{ padding: '12px' }}>Title</th>
                            <th style={{ padding: '12px' }}>Type</th>
                            <th style={{ padding: '12px' }}>Date</th>
                            <th style={{ padding: '12px' }}>Status</th>
                            <th style={{ padding: '12px' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyItems.map((item, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '12px', fontWeight: '500' }}>{item.title}</td>
                                <td style={{ padding: '12px', color: 'var(--text-dim)' }}>{item.type}</td>
                                <td style={{ padding: '12px', color: 'var(--text-dim)' }}>{item.date}</td>
                                <td style={{ padding: '12px' }}>
                                    <span style={{
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        background: item.status === 'Completed' ? 'rgba(0, 255, 127, 0.1)' :
                                            item.status === 'Published' ? 'rgba(0, 191, 255, 0.1)' :
                                                'rgba(255, 255, 255, 0.1)',
                                        color: item.status === 'Completed' ? '#00ff7f' :
                                            item.status === 'Published' ? '#00bfff' :
                                                'var(--text-dim)'
                                    }}>
                                        {item.status}
                                    </span>
                                </td>
                                <td style={{ padding: '12px' }}>
                                    <button className="icon-btn">✏️</button>
                                    <button className="icon-btn" style={{ marginLeft: '8px' }}>🗑️</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
