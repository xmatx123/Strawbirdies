import React from 'react';
import { Home, Users, Search, Settings, PieChart, Briefcase } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar glass-panel">
            <div className="sidebar-header">
                <div className="logo-container">
                    <div className="logo-icon">
                        <Briefcase size={24} color="var(--primary)" />
                    </div>
                    <span className="logo-text text-gradient-primary">Strawbirdies</span>
                </div>
            </div>

            <nav className="sidebar-nav">
                <ul className="nav-list">
                    <li className="nav-item active">
                        <a href="#" className="nav-link">
                            <Home size={20} />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <Search size={20} />
                            <span>Research</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <Users size={20} />
                            <span>Prospects</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <PieChart size={20} />
                            <span>Analytics</span>
                        </a>
                    </li>
                </ul>

                <div className="nav-separator"></div>

                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <Settings size={20} />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">JS</div>
                    <div className="user-info">
                        <span className="user-name">John Sales</span>
                        <span className="user-role">Consultant</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
