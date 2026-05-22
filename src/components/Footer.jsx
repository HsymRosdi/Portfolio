import React from 'react';
import { Link } from 'react-router-dom';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(1.5rem,4vw,2rem) clamp(1.25rem,4vw,2.5rem)',
      display: 'flex', flexWrap: 'wrap', gap: '1rem',
      justifyContent: 'space-between', alignItems: 'center',
      fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px',
    }}>
      <span>© 2025 <span style={{ color: 'var(--green)' }}>Muhammad Hasyiem Bin Rosdi</span></span>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href={profile.github} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--green)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--green)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>LinkedIn</a>
        <a href={`mailto:${profile.email}`} style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--green)'}
          onMouseLeave={e => e.target.style.color = 'var(--muted)'}>Email</a>
      </div>
    </footer>
  );
}
