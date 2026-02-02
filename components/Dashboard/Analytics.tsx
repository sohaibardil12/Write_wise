import './SidePanels.css';

export default function Analytics() {
    return (
        <div className="side-panel glass">
            <h3>Quick Analytics</h3>
            <div className="stat-card">
                <span className="stat-label">Words Generated</span>
                <span className="stat-value">12,450</span>
                <div className="stat-bar"><div className="fill" style={{ width: '70%' }}></div></div>
            </div>
            <div className="stat-card">
                <span className="stat-label">Engagement Score</span>
                <span className="stat-value">8.4/10</span>
                <div className="stat-bar"><div className="fill secondary" style={{ width: '84%' }}></div></div>
            </div>
            <div className="stat-card">
                <span className="stat-label">Goal Completion</span>
                <span className="stat-value">92%</span>
                <div className="stat-bar"><div className="fill accent" style={{ width: '92%' }}></div></div>
            </div>
        </div>
    );
}
