import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';
import SectionLabel from '../components/SectionLabel';

export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop: '58px', maxWidth: '1000px', margin: '0 auto', padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,2.5rem) 4rem' }}>

      <SectionLabel>My work</SectionLabel>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
        Things I've built
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '3rem', lineHeight: 1.8 }}>
        A collection of projects I've worked on. Click any card to see the full details.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {projects.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)}
      </div>
    </div>
  );
}

function ProjectRow({ project: p, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={`/projects/${p.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fade-up"
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gap: 'clamp(1rem,3vw,2rem)',
        alignItems: 'center',
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        padding: 'clamp(1.25rem,3vw,1.75rem)',
        transition: 'all 0.22s',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        animationDelay: `${index * 0.08}s`,
        textDecoration: 'none',
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: 'var(--green)',
        transform: hovered ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top', transition: 'transform 0.3s',
      }} />

      {/* Number */}
      <span style={{ fontSize: 'clamp(22px,4vw,36px)', fontFamily: 'var(--font-display)', fontWeight: 800, color: hovered ? 'var(--green)' : 'var(--border)', transition: 'color 0.2s', minWidth: '2ch', lineHeight: 1 }}>
        {p.number}
      </span>

      {/* Info */}
      <div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px,2.5vw,22px)', fontWeight: 700, color: '#fff', marginBottom: '0.35rem' }}>{p.title}</h2>
        <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: 1.6 }}>{p.shortDesc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
          {p.tags.map(t => <span key={t} style={{ fontSize: '10px', letterSpacing: '1px', color: 'var(--accent)', border: '1px solid rgba(0,229,255,0.2)', padding: '2px 8px' }}>{t}</span>)}
        </div>
      </div>

      {/* Arrow */}
      <span style={{ fontSize: '20px', color: hovered ? 'var(--green)' : 'var(--muted)', transition: 'all 0.2s', transform: hovered ? 'translate(4px, -4px)' : 'none' }}>↗</span>
    </Link>
  );
}
