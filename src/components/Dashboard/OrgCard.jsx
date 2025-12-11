import React from 'react';
import { MapPin, Users, DollarSign, Globe, Building } from 'lucide-react';

const OrgCard = ({ org }) => {
    if (!org) return null;

    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
            <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)', alignItems: 'center' }}>
                    <img
                        src={org.logo}
                        alt={org.name}
                        style={{ width: '64px', height: '64px', borderRadius: 'var(--radius-md)', background: '#fff' }}
                    />
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{org.name}</h2>
                        <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', fontSize: '0.9rem', alignItems: 'center' }}>
                            <MapPin size={14} /> {org.location}
                            <span>•</span>
                            <Globe size={14} /> {org.domain}
                        </div>
                    </div>
                </div>
                <span style={{
                    background: 'var(--primary-glow)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600
                }}>
                    {org.industry}
                </span>
            </div>

            <p style={{ color: 'var(--text-dim)', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
                {org.description}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
                <div className="stat-box" style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', marginBottom: '4px', fontSize: '0.85rem' }}>
                        <Users size={16} /> Employees
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{org.employees}</div>
                </div>
                <div className="stat-box" style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', gap: '8px', color: 'var(--text-muted)', marginBottom: '4px', fontSize: '0.85rem' }}>
                        <DollarSign size={16} /> Revenue
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{org.revenue}</div>
                </div>
            </div>
        </div>
    );
};

export default OrgCard;
