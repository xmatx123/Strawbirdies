import React, { useState } from 'react';

const PasswordModal = ({ isOpen, onClose, onProtect }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProtect = async () => {
    setError('');
    if (!password) {
      setError('Please enter a password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setIsProcessing(true);
    try {
      await onProtect(password);
    } catch (err) {
      setError('Failed to protect PDF.');
      console.error(err);
    }
    setIsProcessing(false);
  };

  const handleClose = () => {
    setPassword('');
    setConfirmPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Password Protect PDF</h2>
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>

        <div className="modal-body">
          <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Set a password to protect this PDF. Note: full AES encryption requires server-side processing; this adds a protection marker to the document.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                style={{
                  padding: '0.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '1rem',
                }}
              />
            </label>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <span style={{ fontWeight: 500, fontSize: '0.875rem' }}>Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password..."
                style={{
                  padding: '0.5rem',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '1rem',
                }}
              />
            </label>
          </div>

          {error && (
            <p style={{ color: 'var(--danger)', marginTop: '0.75rem', fontSize: '0.875rem' }}>
              {error}
            </p>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={handleClose} className="cancel-btn">Cancel</button>
          <button
            onClick={handleProtect}
            className="primary-btn"
            disabled={isProcessing}
          >
            {isProcessing ? 'Protecting...' : 'Protect PDF'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
