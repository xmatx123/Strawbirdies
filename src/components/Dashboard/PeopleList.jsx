import React from 'react';
import { Mail, Linkedin, UserCheck } from 'lucide-react';

const PeopleList = ({ people }) => {
    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', height: '100%' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <UserCheck size={20} color="var(--primary)" /> Key Decision Makers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                {people.map(person => (
                    <div key={person.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.02)'
                    }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                            <div style={{
                                width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-panel)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--text-muted)'
                            }}>
                                {person.name.charAt(0)}
                            </div>
                            <div>
                                <div style={{ fontWeight: 500, color: 'var(--text-main)' }}>{person.name}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{person.role}</div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button style={{ padding: '6px', borderRadius: '4px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)' }}>
                                <Mail size={16} />
                            </button>
                            <button style={{ padding: '6px', borderRadius: '4px', background: 'rgba(0, 119, 181, 0.1)', color: '#0077b5' }}>
                                <Linkedin size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeopleList;
