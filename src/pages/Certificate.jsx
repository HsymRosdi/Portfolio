import React, { useEffect, useState } from 'react';
import { Cert } from '../data';
import SectionLabel from '../components/SectionLabel';

export default function Certificate() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop: '58px', maxWidth: '1000px', margin: '0 auto', padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,2.5rem) 4rem' }}>

      <SectionLabel>Certifications</SectionLabel>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
        My Certificates
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
        Courses and certifications I have completed.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px), 1fr))', gap: '1.5rem' }}>
        {Cert.map(cert => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}

function CertCard({ cert }) {
  const [hovered, setHovered] = useState(false);
  const [preview, setPreview] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? 'var(--bg3)' : 'var(--bg2)',
          border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
          transition: 'all 0.22s',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: 'var(--green)',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left', transition: 'transform 0.3s',
        }} />

        {/* Certificate image */}
        <div
          onClick={() => setPreview(true)}
          style={{ cursor: 'zoom-in', overflow: 'hidden', height: '180px', background: 'var(--bg3)' }}
        >
          <img
            src={cert.image}
            alt={cert.name}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s',
              transform: hovered ? 'scale(1.04)' : 'scale(1)',
              filter: 'grayscale(20%)',
            }}
          />
        </div>

        {/* Info */}
        <div style={{ padding: '1.25rem' }}>
          <p style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{cert.year}</p>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '0.4rem', lineHeight: 1.3 }}>{cert.name}</h3>
          <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '1rem' }}>{cert.issuer}</p>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => setPreview(true)}
              style={{
                fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px',
                textTransform: 'uppercase', padding: '7px 14px',
                background: 'transparent', color: 'var(--text)',
                border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--green)'; e.currentTarget.style.color = 'var(--green)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
            >
              View
            </button>
            {cert.credentialUrl && (
              
                <a href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '1px',
                  textTransform: 'uppercase', padding: '7px 14px',
                  background: 'var(--green)', color: 'var(--bg)',
                  border: '1px solid var(--green)', fontWeight: 700, transition: 'all 0.2s',
                }}
              >
                ↗ Verify
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen preview modal */}
      {preview && (
        <div
          onClick={() => setPreview(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '900px', width: '100%' }}>
            <button
              onClick={(e) => { e.stopPropagation(); setPreview(false); }}
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginBottom: '0.75rem',
                background: 'var(--green)',
                border: 'none',
                color: 'var(--bg)',
                fontSize: '12px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                padding: '8px 18px',
              }}
            >✕ Close</button>
            <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.5rem' }}>
              <img src={cert.image} alt={cert.name} style={{ width: '100%', display: 'block', objectFit: 'contain', maxHeight: '70vh', border: '1px solid var(--border)' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <p style={{ fontSize: '13px', color: 'var(--text)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                {cert.name}
              </p>
              <p style={{ fontSize: '12px', color: 'var(--muted)' }}>
                {cert.issuer} · {cert.year}
              </p>
            </div>
            </div>
            </div>
      )}
    </>
  );
}