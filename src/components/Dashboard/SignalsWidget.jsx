import React from 'react';
import { Activity, TrendingUp, Calendar } from 'lucide-react';

const SignalsWidget = ({ signals }) => {
    return (
        <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={20} color="var(--success)" /> Recent Signals
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                {signals.map((signal, index) => (
                    <div key={index} style={{
                        borderLeft: `3px solid ${signal.sentiment === 'positive' ? 'var(--success)' : 'var(--text-muted)'}`,
                        paddingLeft: '12px'
                    }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px', display: 'flex', gap: '6px' }}>
                            <Calendar size={12} /> {signal.date}
                        </div>
                        <div style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                            {signal.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SignalsWidget;
