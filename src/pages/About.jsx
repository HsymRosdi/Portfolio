import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { profile, skills, education, experience } from '../data';
import { useInView } from '../hooks/useInView';
import SectionLabel from '../components/SectionLabel';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop: '58px', maxWidth: '1000px', margin: '0 auto', padding: 'clamp(5rem,10vw,7rem) clamp(1.25rem,5vw,2.5rem) 4rem' }}>

      <SectionLabel>About me</SectionLabel>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,5vw,52px)', fontWeight: 800, color: '#fff', marginBottom: '3rem' }}>
        Who I am
      </h1>

      {/* Bio + quick facts */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,300px), 1fr))', gap: '3rem', marginBottom: '4rem' }}>
        <div>
          <p style={bodyText}>
            I'm <span style={{ color: '#fff' }}>Muhammad Hasyiem Bin Rosdi</span>, a recent Computer Science graduate with First Class Honours from Sheffield Hallam University (2026), based in Selangor, Malaysia.
          </p>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            I have hands-on experience building web and mobile applications through academic projects and a software engineering internship. I'm passionate about creating user-focused digital solutions with a keen interest in cybersecurity and secure software development.
          </p>
          <p style={{ ...bodyText, marginTop: '1rem' }}>
            I'm actively looking for a graduate software engineering role where I can grow, contribute, and build products that make a difference.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ['Location', profile.location],
              ['Status',   profile.status],
              ['Phone',    profile.phone],
              ['Email',    profile.email],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: '1rem', fontSize: '13px', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <span style={{ color: 'var(--green)', minWidth: '80px', flexShrink: 0 }}>{k}</span>
                <span style={{ color: 'var(--text)' }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={socialBtn}
              onMouseEnter={e => { e.currentTarget.style.color='var(--green)'; e.currentTarget.style.borderColor='var(--green)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='var(--border)'; }}>↗ GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" style={socialBtn}
              onMouseEnter={e => { e.currentTarget.style.color='var(--green)'; e.currentTarget.style.borderColor='var(--green)'; }}
              onMouseLeave={e => { e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.borderColor='var(--border)'; }}>↗ LinkedIn</a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <TerminalCard title="soft_skills.txt" items={[
            'Problem Solving',
            'Teamwork & Collaboration',
            'Time Management',
            'Adaptability',
            'Analytical Thinking',
            'Stakeholder Communication',
          ]} />
          <TerminalCard title="achievements.txt" items={[
            'First Class Honours — BSc Computer Science 2026',
            'Hallam Bronze Award — Sheffield Hallam University',
            "Dean's Award 2021–2024 (all 6 semesters)",
            'Diploma CGPA 3.72',
            'F&B Officer · Sheffield Malaysian Games',
          ]} />
        </div>
      </div>

      <Divider />

      {/* Education */}
      <FadeSection>
        <p style={termPrompt}><span style={{ color: 'var(--green)' }}>$</span> cat education.txt</p>
        <h2 style={h2}>Education</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
          {education.map(e => (
            <div key={e.school} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 'clamp(1.25rem,3vw,1.75rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,2.5vw,18px)', fontWeight: 700, color: '#fff' }}>{e.school}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{e.location}</p>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--green)', border: '1px solid var(--border)', padding: '3px 10px', alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{e.period}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--accent)', margin: '0.6rem 0 0.4rem', fontWeight: 500 }}>{e.degree}</p>
              <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.7 }}>{e.notes}</p>
              <p style={{ fontSize: '12px', color: 'var(--text)', lineHeight: 1.7, marginTop: '0.6rem', paddingTop: '0.6rem', borderTop: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--green)' }}>★ </span>{e.highlight}
              </p>
            </div>
          ))}
        </div>
      </FadeSection>

      <Divider />

      {/* Experience */}
      <FadeSection>
        <p style={termPrompt}><span style={{ color: 'var(--green)' }}>$</span> cat experience.txt</p>
        <h2 style={h2}>Work Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
          {experience.map(ex => (
            <div key={ex.company} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: 'clamp(1.25rem,3vw,1.75rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(15px,2.5vw,18px)', fontWeight: 700, color: '#fff' }}>{ex.company}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '2px' }}>{ex.location}</p>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--green)', border: '1px solid var(--border)', padding: '3px 10px', alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>{ex.period}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--accent)', margin: '0.6rem 0 0.75rem', fontWeight: 500 }}>{ex.role}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {ex.points.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}>▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeSection>

      <Divider />

      {/* Skills */}
      <FadeSection>
        <p style={termPrompt}><span style={{ color: 'var(--green)' }}>$</span> cat skills.txt</p>
        <h2 style={h2}>Technical Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,200px), 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
          {skills.map(cat => (
            <div key={cat.category} style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.25rem' }}>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--green)', marginBottom: '1rem' }}>{cat.category}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {cat.items.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text)' }}>
                    <span style={{ width: '5px', height: '5px', background: 'var(--green)', flexShrink: 0 }} />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      <div style={{ marginTop: '3rem', paddingTop: '3rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/projects" style={btnPrimary}>View my work →</Link>
        <Link to="/contact"  style={btnOutline}>Get in touch</Link>
      </div>
    </div>
  );
}

function FadeSection({ children }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(24px)', transition: 'all 0.7s ease', marginBottom: '3rem' }}>
      {children}
    </div>
  );
}

function TerminalCard({ title, items }) {
  return (
    <div>
      <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '0.75rem' }}>
        <span style={{ color: 'var(--green)' }}>$</span> cat {title}
      </p>
      <div style={{ background: 'var(--bg2)', border: '1px solid var(--border)', padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '7px' }}>
        {items.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text)' }}>
            <span style={{ color: 'var(--green)', fontSize: '10px' }}>▸</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Divider() {
  return <div style={{ borderTop: '1px solid var(--border)', margin: '3rem 0' }} />;
}

const bodyText   = { fontSize: '14px', color: 'var(--muted)', lineHeight: 1.9 };
const termPrompt = { fontSize: '12px', color: 'var(--muted)', marginBottom: '0.5rem' };
const h2         = { fontFamily: 'var(--font-display)', fontSize: 'clamp(22px,3.5vw,30px)', fontWeight: 800, color: '#fff' };
const socialBtn  = { fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--border)', padding: '8px 16px', transition: 'all 0.2s' };
const btnBase    = { fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', padding: '11px 26px', border: '1px solid', cursor: 'pointer', display: 'inline-block', transition: 'all 0.2s' };
const btnPrimary = { ...btnBase, background: 'var(--green)', color: 'var(--bg)', borderColor: 'var(--green)', fontWeight: 700 };
const btnOutline = { ...btnBase, background: 'transparent', color: 'var(--text)', borderColor: 'var(--border)' };