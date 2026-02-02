import Sidebar from '@/components/Dashboard/Sidebar';
import './Dashboard.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-main">
                {children}
            </main>
        </div>
    );
}
