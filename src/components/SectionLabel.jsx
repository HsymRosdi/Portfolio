import React from 'react';

export default function SectionLabel({ children }) {
  return (
    <div style={{
      fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase',
      color: 'var(--green)', marginBottom: '1rem',
      display: 'flex', alignItems: 'center', gap: '1rem',
    }}>
      {children}
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  );
}
