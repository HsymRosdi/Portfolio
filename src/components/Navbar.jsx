import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 640);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setMobile(window.innerWidth < 640);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const links = [
    { label: 'Home',     to: '/' },
    { label: 'About',    to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact',  to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '58px',
        background: scrolled ? 'rgba(8,11,13,0.96)' : 'rgba(8,11,13,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1.25rem, 4vw, 2.5rem)',
        transition: 'background 0.3s',
      }}>
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', color: 'var(--green)', letterSpacing: '-0.5px' }}>
          hasyiem<span style={{ color: 'var(--muted)' }}>.dev</span>
        </Link>

        {!mobile && (
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {links.map(l => (
              <Link key={l.to} to={l.to} style={{
                fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase',
                color: isActive(l.to) ? 'var(--green)' : 'var(--muted)',
                transition: 'color 0.2s',
                position: 'relative',
              }}
                onMouseEnter={e => { if (!isActive(l.to)) e.target.style.color = 'var(--text)'; }}
                onMouseLeave={e => { if (!isActive(l.to)) e.target.style.color = 'var(--muted)'; }}
              >
                {isActive(l.to) && <span style={{ color: 'var(--green)', marginRight: '4px', fontSize: '10px' }}>▶</span>}
                {l.label}
              </Link>
            ))}
          </div>
        )}

        {mobile && (
          <button onClick={() => setMenuOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: menuOpen ? 'var(--green)' : 'var(--text)',
                transition: 'all 0.3s',
                transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        )}
      </nav>

      {mobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '58px', left: 0, right: 0, zIndex: 99,
          background: 'rgba(8,11,13,0.98)', borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', padding: '1.5rem 1.5rem',
          gap: '1.25rem',
        }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
              color: isActive(l.to) ? 'var(--green)' : 'var(--text)',
            }}>
              <span style={{ color: 'var(--green)', marginRight: '10px' }}>{isActive(l.to) ? '▶' : '>'}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
