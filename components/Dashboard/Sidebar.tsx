'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import './Sidebar.css';

export default function Sidebar() {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            if (user) {
                // Check if user exists in the public.users table
                const { data: existingUser } = await supabase
                    .from('USERS')
                    .select('id')
                    .eq('id', user.id)
                    .single();

                if (!existingUser) {
                    // If not, insert them (Safety catch for all login types)
                    await supabase.from('USERS').insert([{
                        id: user.id,
                        email: user.email,
                        name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'
                    }]);
                }
                setUser(user);
            }
        };
        getUser();
    }, []);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/auth/login');
    };

    const menuItems = [
        { name: 'Dashboard', icon: '🏠', path: '/dashboard' },
        { name: 'Templates', icon: '📁', path: '/dashboard/templates' },
        { name: 'Analytics', icon: '📊', path: '/dashboard/analytics' },
        { name: 'History', icon: '🕒', path: '/dashboard/history' },
        { name: 'Settings', icon: '⚙️', path: '/dashboard/settings' },
    ];

    const fullName = user?.user_metadata?.full_name || 'User';
    const email = user?.email || 'Loading...';
    const initials = fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);

    return (
        <aside className="sidebar glass">
            <div className="sidebar-brand">
                <span className="gradient-text">WriteWise</span>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.path}
                        className={`nav-item ${pathname === item.path ? 'active' : ''}`}
                    >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-text">{item.name}</span>
                    </Link>
                ))}
            </nav>
            <div className="sidebar-user">
                <div className="user-avatar">{user ? initials : '...'}</div>
                <div className="user-info">
                    <p className="user-name">{user ? fullName : 'Loading...'}</p>
                    <p className="user-email">{user ? email : ''}</p>
                </div>
                <button className="logout-btn" onClick={handleLogout} title="Logout">
                    🚪
                </button>
            </div>
        </aside>
    );
}
