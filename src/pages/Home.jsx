import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { profile, projects } from '../data';

const TYPED_TEXT = `// Graduate Software Engineer`;

export default function Home() {
  const [typed, setTyped] = useState('');
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let i = 0;
    const t = setInterval(() => {
      setTyped(TYPED_TEXT.slice(0, ++i));
      if (i >= TYPED_TEXT.length) clearInterval(t);
    }, 52);
    const b = setInterval(() => setCursor(c => !c), 520);
    return () => { clearInterval(t); clearInterval(b); };
  }, []);

  return (
    <div className="page-enter" style={{ paddingTop: '58px' }}>

      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,5vw,2.5rem)',
        maxWidth: '1000px', margin: '0 auto',
      }}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'clamp(2rem,5vw,4rem)', flexWrap: 'nowrap' }}>

          {/* Left: photo */}
          <div className="fade-up d3" style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '24px', height: '24px', borderTop: '2px solid var(--green)', borderLeft: '2px solid var(--green)', zIndex: 1 }} />
              <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '24px', height: '24px', borderBottom: '2px solid var(--green)', borderRight: '2px solid var(--green)', zIndex: 1 }} />
              <img
                src="/photo2.jpg"
                alt="Muhammad Hasyiem"
                style={{ width: 'clamp(260px, 35vw, 420px)', height: 'clamp(320px, 45vw, 520px)', objectFit: 'cover', objectPosition: 'center 100%', display: 'block', border: '1px solid var(--border)', filter: 'grayscale(20%)' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(8,11,13,0.75)', padding: '10px 14px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '1px' }}>Muhammad Hasyiem</p>
                <p style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '1px', marginTop: '2px' }}>Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div style={{ flex: '1 1 300px' }}>

            <div className="fade-up d1" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase',
              color: 'var(--green)', border: '1px solid var(--green)',
              padding: '5px 14px', marginBottom: '2rem',
              animation: 'blinkBorder 2s infinite, fadeUp 0.6s ease 0.1s both',
            }}>
              <span style={{ width: '6px', height: '6px', background: 'var(--green)', borderRadius: '50%', animation: 'pulse-dot 1.5s infinite' }} />
              Open to opportunities
            </div>

            <div className="fade-up d2" style={{ position: 'relative', display: 'inline-block', marginBottom: '0.5rem' }}>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 9vw, 90px)', lineHeight: 1.0, color: '#fff', letterSpacing: '-1px' }}>
                Hi, I'm
              </h1>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 9vw, 90px)', lineHeight: 1.0, color: 'var(--green)', letterSpacing: '-1px' }}>Hasyiem.</h1>
                <h1 aria-hidden="true" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(44px, 9vw, 90px)', lineHeight: 1.0, color: 'var(--accent)', letterSpacing: '-1px', position: 'absolute', top: 0, left: 0, opacity: 0.6, animation: 'glitch 4s infinite step-end' }}>Hasyiem.</h1>
              </div>
            </div>

            <div className="fade-up d2" style={{ fontSize: 'clamp(13px,2vw,15px)', color: 'var(--muted)', margin: '1.25rem 0', minHeight: '22px' }}>
              {typed}<span style={{ opacity: cursor ? 1 : 0, color: 'var(--green)', fontWeight: 700 }}>|</span>
            </div>

            <p className="fade-up d3" style={{ fontSize: 'clamp(13px,1.8vw,14px)', color: 'var(--muted)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '2.5rem' }}>
              {profile.tagline}
            </p>

            <div className="fade-up d4" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" style={btnPrimary}>View my work →</Link>
              <Link to="/contact" style={btnOutline}>Get in touch</Link>
            </div>

            <div className="fade-up d5" style={{ marginTop: '4rem', borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
  
  {/* Grades */}
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--green)', padding: '10px 18px' }}>
      <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>BSc Computer Science</p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800, color: 'var(--green)' }}>First Class Honours</p>
    </div>
    <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '10px 18px' }}>
      <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>Diploma Computer Science</p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 800, color: 'var(--green)' }}>CGPA 3.72</p>
    </div>
  </div>

  {/* Stats */}
  <div style={{ display: 'flex', gap: 'clamp(1.5rem,4vw,3rem)', flexWrap: 'wrap' }}>
    {[['2026', 'Graduate']].map(([val, label]) => (
      <div key={label}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,4vw,32px)', fontWeight: 800, color: 'var(--green)' }}>{val}</p>
        <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '2px' }}>{label}</p>
      </div>
    ))}
  </div>

</div>
          </div>


        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ borderTop: '1px solid var(--border)', padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,5vw,2.5rem)', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'nowrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '0.5rem' }}>Featured work</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,4vw,34px)', fontWeight: 800, color: '#fff' }}>Things I've built</h2>
          </div>
          <Link to="/projects" style={{ fontSize: '12px', color: 'var(--green)', letterSpacing: '1px', textTransform: 'uppercase', border: '1px solid var(--border)', padding: '8px 16px', transition: 'border-color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--green)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >View all →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,280px), 1fr))', gap: '1.25rem' }}>
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} project={p} delay={idx * 0.1} />
          ))}
        </div>
      </section>

      <div style={{ height: '3rem' }} />
    </div>
  );
}

function ProjectCard({ project: p, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`/projects/${p.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'block', background: hovered ? 'var(--bg3)' : 'var(--bg2)', border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`, padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'all 0.25s', cursor: 'pointer', animationDelay: `${delay}s` }}
      className="fade-up"
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--green)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s' }} />
      <p style={{ fontSize: '11px', color: 'var(--green)', letterSpacing: '2px', marginBottom: '0.6rem' }}>PROJECT_{p.number}</p>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{p.title}</h3>
      <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.1rem' }}>{p.shortDesc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '1.1rem' }}>
        {p.tags.map(t => <span key={t} style={{ fontSize: '10px', letterSpacing: '1px', color: 'var(--accent)', border: '1px solid rgba(0,229,255,0.2)', padding: '2px 8px' }}>{t}</span>)}
      </div>
      <p style={{ fontSize: '11px', color: hovered ? 'var(--green)' : 'var(--muted)', letterSpacing: '1px', transition: 'color 0.2s' }}>
        {hovered ? '→ View project' : 'Click to view'}
      </p>
    </Link>
  );
}

const btnBase = { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', padding: '11px 26px', border: '1px solid', cursor: 'pointer', display: 'inline-block', transition: 'all 0.2s' };
const btnPrimary = { ...btnBase, background: 'var(--green)', color: 'var(--bg)', borderColor: 'var(--green)', fontWeight: 700 };
const btnOutline  = { ...btnBase, background: 'transparent', color: 'var(--text)', borderColor: 'var(--border)' };