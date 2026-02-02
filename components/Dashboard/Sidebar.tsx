import Link from 'next/link';
import './Sidebar.css';

export default function Sidebar() {
    const menuItems = [
        { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
        { name: 'Templates', icon: '📁', path: '/dashboard/templates' },
        { name: 'Analytics', icon: '📊', path: '/dashboard/analytics' },
        { name: 'History', icon: '🕒', path: '/dashboard/history' },
        { name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
    ];

    return (
        <aside className="sidebar glass">
            <div className="sidebar-brand">
                <span className="gradient-text">WriteWise</span>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item, i) => (
                    <Link key={i} href={item.path} className="nav-item">
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="sidebar-user">
                <div className="user-avatar">JD</div>
                <div className="user-info">
                    <p className="user-name">John Doe</p>
                    <p className="user-plan">Pro Plan</p>
                </div>
            </div>
        </aside>
    );
}
