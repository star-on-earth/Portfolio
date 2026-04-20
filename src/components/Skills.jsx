import { useEffect, useRef } from 'react'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL', 'ARM Assembly'],
  },
  {
    category: 'IoT & Embedded',
    icon: '⚡',
    skills: ['ESP32', 'Arduino', 'MQTT', 'I2C / SPI', 'LPC2148', 'ThingSpeak', 'AWS IoT Core', 'Embedded C'],
  },
  {
    category: 'Computer Vision & ML',
    icon: '👁',
    skills: ['OpenCV', 'YOLOv8', 'DepthAI / OAK-D', 'MiDaS', 'PyTorch', 'scikit-learn', 'ArUco', 'Stereo Vision'],
  },
  {
    category: 'Web & Cloud',
    icon: '☁',
    skills: ['React', 'FastAPI', 'Firebase', 'Vercel', 'Railway', 'Oracle Cloud (OCI)', 'Roboflow'],
  },
  {
    category: 'Tools & Dev',
    icon: '🛠',
    skills: ['Git', 'Linux', 'VS Code', 'Keil µVision', 'Vivado', 'AutoCAD', 'Wireshark', 'Nmap'],
  },
  {
    category: 'Data Analytics',
    icon: '◈',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Advanced Excel', 'Naive Bayes', 'Clustering', 'MySQL'],
  },
]

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.sk-card').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.08}s`
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
    <section id="skills" className="section" ref={ref} style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          Tech I work with<span style={{ color:'var(--amber)' }}>.</span>
        </h2>
        <p style={{ color:'var(--muted)', marginBottom:'3.5rem', maxWidth:'500px', fontWeight:300 }}>
          Spanning hardware to cloud — built through projects, not just courses.
        </p>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',
          gap:'1.25rem',
        }}>
          {SKILL_GROUPS.map(({ category, icon, skills }) => (
            <div key={category} className="sk-card" style={{
              background:'var(--bg3)', border:'1px solid var(--border)',
              borderRadius:'var(--radius)', padding:'1.75rem',
              opacity:0,
              transition:'border-color var(--trans), transform var(--trans)',
            }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,166,35,0.35)'; e.currentTarget.style.transform='translateY(-3px)' }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}>
              {/* Card header */}
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.25rem' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'1rem', color:'var(--amber)' }}>{icon}</span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color:'var(--text)', letterSpacing:'0.05em' }}>{category}</span>
              </div>

              {/* Skill chips */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem' }}>
                {skills.map(s => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
