import React, { useEffect } from 'react';
import { profile } from '../data';
import SectionLabel from '../components/SectionLabel';

const GithubIcon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-1.93c-3.19.69-3.86-1.54-3.86-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55C20.22 21.38 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z"/></svg>;
const LinkedInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.42v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>;
const EmailIcon   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;

const socials = [
  { label: 'GitHub',   href: profile.github,            Icon: GithubIcon,   desc: 'See my code & contributions' },
  { label: 'LinkedIn', href: profile.linkedin,          Icon: LinkedInIcon, desc: 'Connect professionally' },
  { label: 'Email',    href: `mailto:${profile.email}`, Icon: EmailIcon,    desc: profile.email },
];

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop: '58px', maxWidth: '700px', margin: '0 auto', padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,2.5rem) 4rem' }}>

      <SectionLabel>Get in touch</SectionLabel>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>
        Let's connect
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '3rem', maxWidth: '480px' }}>
        I'm actively looking for my first full-time software engineering role.
        Whether you have an opportunity, a project, or just want to say hi — my inbox is always open.
      </p>

      {/* Primary CTA */}
      <a href={`mailto:${profile.email}`} style={{
        display: 'inline-flex', alignItems: 'center', gap: '10px',
        fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase',
        padding: '14px 28px', background: 'var(--green)', color: 'var(--bg)', fontWeight: 700,
        border: '1px solid var(--green)', marginBottom: '3rem', transition: 'all 0.2s',
      }}>
        <EmailIcon /> Say hello →
      </a>

      {/* Social cards */}
      <p style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Or find me here</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {socials.map(({ label, href, Icon, desc }) => (
          <SocialCard key={label} label={label} href={href} Icon={Icon} desc={desc} />
        ))}
      </div>

      {/* Availability badge */}
      <div style={{
        marginTop: '3rem', padding: '1.25rem 1.5rem',
        background: 'var(--bg2)', border: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        <span style={{ width: '8px', height: '8px', background: 'var(--green)', borderRadius: '50%', flexShrink: 0, animation: 'pulse-dot 1.5s infinite' }} />
        <div>
          <p style={{ fontSize: '13px', color: '#fff', marginBottom: '2px' }}>Currently available</p>
          <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Open to full-time roles and freelance projects</p>
        </div>
      </div>
    </div>
  );
}

function SocialCard({ label, href, Icon, desc }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: '1.25rem',
        background: hovered ? 'var(--bg3)' : 'var(--bg2)',
        border: `1px solid ${hovered ? 'var(--green)' : 'var(--border)'}`,
        padding: '1.1rem 1.25rem',
        transition: 'all 0.2s', cursor: 'pointer',
      }}
    >
      <span style={{ color: hovered ? 'var(--green)' : 'var(--muted)', transition: 'color 0.2s', flexShrink: 0 }}><Icon /></span>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: '13px', color: '#fff', marginBottom: '2px', fontWeight: 500 }}>{label}</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>{desc}</p>
      </div>
      <span style={{ color: hovered ? 'var(--green)' : 'var(--muted)', fontSize: '16px', transition: 'all 0.2s', transform: hovered ? 'translate(3px,-3px)' : 'none' }}>↗</span>
    </a>
  );
}
