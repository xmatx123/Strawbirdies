import React, { useEffect, useState } from 'react';
import { getOrganizationDetails } from '../../services/mockData';
import OrgCard from './OrgCard';
import PeopleList from './PeopleList';
import SignalsWidget from './SignalsWidget';
import { Lightbulb } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Dashboard = () => {
    const { currentOrgId } = useApp();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const result = await getOrganizationDetails(currentOrgId);
                setData(result);
            } catch (e) {
                console.error("Failed to load data", e);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, [currentOrgId]);

    if (loading) {
        return (
            <div className="flex-center" style={{ height: '50vh', flexDirection: 'column', gap: '16px' }}>
                <div className="spinner" style={{
                    width: '40px', height: '40px',
                    border: '4px solid rgba(255,255,255,0.1)',
                    borderTopColor: 'var(--primary)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}></div>
                <p className="text-muted">Analyzing Signals...</p>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div className="dashboard-grid" style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: 'var(--spacing-lg)',
            maxWidth: '1200px',
            margin: '0 auto'
        }}>
            <div className="main-col" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
                <OrgCard org={data} />

                <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ marginBottom: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Lightbulb size={20} color="var(--warning)" /> Strategy & Insights
                    </h3>
                    <p style={{ lineHeight: 1.6, color: 'var(--text-main)' }}>
                        {data.strategy}
                    </p>
                    <div style={{ marginTop: 'var(--spacing-md)', display: 'flex', gap: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                        {data.techStack.map(tech => (
                            <span key={tech} style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <SignalsWidget signals={data.signals} />
            </div>

            <div className="side-col">
                <PeopleList people={data.people} />
            </div>
        </div>
    );
};

export default Dashboard;
