import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', color: 'var(--muted)' }}>
        <p>Project not found.</p>
        <Link to="/projects" style={{ color: 'var(--green)', marginTop: '1rem', display: 'inline-block' }}>← Back to projects</Link>
      </div>
    );
  }

  const currentIdx = projects.findIndex(p => p.id === id);
  const prev = projects[currentIdx - 1];
  const next = projects[currentIdx + 1];

  return (
    <div className="page-enter" style={{ paddingTop: '58px', maxWidth: '800px', margin: '0 auto', padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,2.5rem) 4rem' }}>

      {/* Back link */}
      <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2.5rem', transition: 'color 0.2s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--green)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
      >
        ← All projects
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          PROJECT_{project.number} · {project.year}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,6vw,54px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '1rem' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text)', lineHeight: 1.8 }}>{project.shortDesc}</p>
      </div>

      {/* Meta row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '2.5rem', borderBottom: '1px solid var(--border)' }}>
        <MetaItem label="Status" value={project.status} />
        <MetaItem label="Year" value={project.year} />
        <MetaItem label="Stack" value={project.tags.join(', ')} />
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '2.5rem' }}>
        {project.tags.map(t => (
          <span key={t} style={{ fontSize: '11px', letterSpacing: '1px', color: 'var(--accent)', border: '1px solid rgba(0,229,255,0.2)', padding: '4px 12px' }}>{t}</span>
        ))}
      </div>

      {/* Description */}
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 'clamp(1.5rem,4vw,2rem)', marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem' }}>About this project</p>
        <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{project.fullDesc}</p>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <a href={project.github} target="_blank" rel="noreferrer" style={btnPrimary}>↗ View on GitHub</a>
        {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" style={btnOutline}>↗ Live Demo</a>}
      </div>

      {/* Prev / Next */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {prev ? (
          <Link to={`/projects/${prev.id}`} style={navCard}>
            <p style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>← Previous</p>
            <p style={{ fontSize: '14px', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{prev.title}</p>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/projects/${next.id}`} style={{ ...navCard, textAlign: 'right', justifySelf: 'end', width: '100%' }}>
            <p style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Next →</p>
            <p style={{ fontSize: '14px', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{next.title}</p>
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '10px 16px' }}>
      <p style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{label}</p>
      <p style={{ fontSize: '13px', color: 'var(--text)' }}>{value}</p>
    </div>
  );
}

const btnBase = {
  fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '1px',
  textTransform: 'uppercase', padding: '11px 24px', border: '1px solid',
  cursor: 'pointer', display: 'inline-block', transition: 'all 0.2s',
};
const btnPrimary = { ...btnBase, background: 'var(--green)', color: 'var(--bg)', borderColor: 'var(--green)', fontWeight: 700 };
const btnOutline  = { ...btnBase, background: 'transparent', color: 'var(--text)', borderColor: 'var(--border)' };
const navCard = {
  display: 'block', background: 'var(--bg2)', border: '1px solid var(--border)',
  padding: '1rem', transition: 'border-color 0.2s',
};
