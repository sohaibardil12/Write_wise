import './SidePanels.css';

const historyItems = [
    { title: 'Content Marketing Blog', type: 'Blog', date: '2 hours ago' },
    { title: 'Welcome Email Series', type: 'Email', date: 'Yesterday' },
    { title: 'Instagram Product Launch', type: 'Social', date: '3 days ago' },
    { title: 'Tech Trends 2026', type: 'Blog', date: '1 week ago' },
];

export default function History() {
    return (
        <div className="side-panel glass">
            <h3>Recent History</h3>
            <div className="history-list">
                {historyItems.map((item, i) => (
                    <div key={i} className="history-item">
                        <div className="history-info">
                            <p className="history-title">{item.title}</p>
                            <p className="history-meta">{item.type} • {item.date}</p>
                        </div>
                        <button className="icon-btn">👁️</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
