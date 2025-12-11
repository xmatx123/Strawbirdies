import React from 'react';
import { Bell, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';
import './Header.css';

const Header = () => {
    const { searchQuery, handleSearch, searchResults, selectOrg } = useApp();

    return (
        <header className="header glass-panel">
            <div className="header-search">
                <Search size={18} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search companies (e.g. Globex)..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                {searchResults.length > 0 && (
                    <div className="search-results-dropdown glass-panel" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        width: '100%',
                        marginTop: '8px',
                        padding: '8px',
                        zIndex: 100
                    }}>
                        {searchResults.map(org => (
                            <div
                                key={org.id}
                                onClick={() => selectOrg(org.id)}
                                style={{
                                    padding: '8px 12px',
                                    cursor: 'pointer',
                                    borderRadius: 'var(--radius-sm)',
                                    transition: 'background 0.2s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                                className="search-result-item"
                            >
                                <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={org.logo} alt="" style={{ width: '20px', height: '20px' }} />
                                </div>
                                <span>{org.name}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="header-actions">
                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-badge"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
