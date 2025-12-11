import React from 'react';
import Layout from './layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <Layout>
      <div className="dashboard-intro" style={{ marginBottom: 'var(--spacing-lg)' }}>
        <h1 className="page-title" style={{ fontSize: '1.8rem' }}>Welcome back, John</h1>
        <p className="page-subtitle text-muted">Here is the research profile for <strong style={{ color: 'var(--text-main)' }}>Acme Corp</strong>.</p>
      </div>
      <Dashboard />
    </Layout>
  );
}

export default App;
