import DashboardLayout from '@/components/Dashboard/DashboardLayout';
import Editor from '@/components/Dashboard/Editor';
import Analytics from '@/components/Dashboard/Analytics';
import History from '@/components/Dashboard/History';

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="dashboard-content-grid">
                <div className="main-editor-area">
                    <header className="dashboard-header">
                        <h1>Create New <span className="gradient-text">Content</span></h1>
                        <div className="header-actions">
                            <button className="btn-secondary">Save Draft</button>
                            <button className="btn-primary">Export</button>
                        </div>
                    </header>
                    <Editor />
                </div>
                <div className="side-panels">
                    <Analytics />
                    <History />
                </div>
            </div>
        </DashboardLayout>
    );
}
