import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    role: 'IoT Intern',
    org: 'Jadavpur University',
    location: 'Kolkata',
    period: 'May 2025 – Jul 2025',
    type: 'Internship',
    color: 'var(--amber)',
    points: [
      'Built the DepthAI Spatial Locator — distance calculation using Luxonis OAK-D stereo-camera libraries for real-time spatial localization.',
      'Worked with real-time depth estimation pipelines and spatial AI integration for robotics applications.',
    ],
  },
  {
    role: 'Team Member',
    org: 'IoT-Lab-KIIT',
    location: 'Bhubaneswar',
    period: 'Jul 2024 – Present',
    type: 'Research Lab',
    color: 'var(--cyan)',
    points: [
      'Developed and implemented Arduino code for MQ gas sensors to monitor air quality; transmitted real-time data to ThingSpeak for visualization.',
      'Assisted in hardware design of a sensor-based simulated bomb, integrating multiple sensors per specification.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.exp-card').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.15}s`
            el.classList.add('fade-up')
          })
        }
      }),
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Where I've<span style={{ color: 'var(--amber)' }}> worked.</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '3.5rem', maxWidth: '500px', fontWeight: 300 }}>
          Real-world engineering — from research labs to university internships.
        </p>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: 0, top: '12px', bottom: '12px',
            width: '1px',
            background: 'linear-gradient(to bottom, var(--amber), var(--cyan), transparent)',
            opacity: 0.3,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="exp-card" style={{
                opacity: 0,
                position: 'relative',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem 2.25rem',
                transition: 'border-color var(--trans), transform var(--trans)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,166,35,0.3)'; e.currentTarget.style.transform = 'translateX(4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: '-2.45rem', top: '2.25rem',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 10px ${exp.color}`,
                }} />

                {/* Header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: exp.color, marginTop: '0.2rem' }}>
                      {exp.org} · {exp.location}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.35rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
                      padding: '0.15rem 0.6rem', borderRadius: '2px',
                      background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.2)',
                      color: 'var(--amber)',
                    }}>
                      {exp.type}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--muted)' }}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul style={{ marginTop: '1rem', paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{
                      color: 'var(--muted)', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.75,
                      listStyleType: 'none', position: 'relative', paddingLeft: '1rem',
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: exp.color, fontFamily: 'var(--font-mono)' }}>›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
