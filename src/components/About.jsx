import { useEffect, useRef } from 'react'

const STATS = [
  { value: '8.44', label: 'CGPA — Semester 5' },
  { value: '6+',   label: 'Active Projects' },
  { value: '4',    label: 'Domains: IoT · CV · ML · Data' },
  { value: '14',   label: 'Certifications' },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.12}s`
            el.classList.add('fade-up')
          })
        }
      }),
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
          {/* Left: text */}
          <div>
            <p className="section-label reveal">About Me</p>
            <h2 className="section-title reveal">
              I build things that<br /><span style={{ color:'var(--amber)' }}>live in the real world.</span>
            </h2>

            <div style={{ display:'flex', flexDirection:'column', gap:'1rem', color:'var(--muted)', fontWeight:300, lineHeight:1.85 }}>
              <p className="reveal">
                I'm Avrrodeep — a Computer Science & Systems Engineering student at KIIT University,
                Bhubaneswar (CGPA 8.44). My work spans embedded hardware, intelligent vision,
                data analytics, and robust software.
              </p>
              <p className="reveal">
                From training YOLO models on custom obstacle-detection datasets and building
                stereo-camera distance estimators during my IoT internship at Jadavpur University,
                to building data dashboards and deploying full-stack finance apps — I'm drawn to
                problems where software meets the physical world.
              </p>
              <p className="reveal">
                Active member of IoT-Lab-KIIT. Certified in AWS IoT, Oracle Cloud AI, and Lean Six Sigma.
                Beyond tech, I write — poetry when the code quiets down.
              </p>
            </div>

            {/* Terminal block */}
            <div className="reveal" style={{
              marginTop:'2rem', background:'var(--bg2)',
              border:'1px solid var(--border)', borderRadius:'var(--radius)',
              padding:'1.25rem 1.5rem', fontFamily:'var(--font-mono)', fontSize:'0.78rem',
            }}>
              <div style={{ color:'var(--muted)', marginBottom:'0.5rem' }}>
                <span style={{ color:'var(--cyan)' }}>avrro</span>
                <span style={{ color:'var(--muted)' }}>@kiit</span>
                <span style={{ color:'var(--amber)' }}> ~</span>
                <span style={{ color:'var(--text)' }}> $ cat me.json</span>
              </div>
              <div style={{ color:'var(--text)', lineHeight:1.9 }}>
                <span style={{ color:'var(--muted)' }}>{'{'}</span><br />
                &nbsp;&nbsp;<span style={{ color:'var(--cyan)' }}>"role"</span>: <span style={{ color:'#c8e6a0' }}>"CS &amp; Systems Engineer"</span>,<br />
                &nbsp;&nbsp;<span style={{ color:'var(--cyan)' }}>"domains"</span>: [<span style={{ color:'#c8e6a0' }}>"IoT"</span>, <span style={{ color:'#c8e6a0' }}>"CV"</span>, <span style={{ color:'#c8e6a0' }}>"ML"</span>, <span style={{ color:'#c8e6a0' }}>"Data Analytics"</span>],<br />
                &nbsp;&nbsp;<span style={{ color:'var(--cyan)' }}>"cgpa"</span>: <span style={{ color:'#c8e6a0' }}>"8.44 / 10"</span>,<br />
                &nbsp;&nbsp;<span style={{ color:'var(--cyan)' }}>"open_to"</span>: <span style={{ color:'#c8e6a0' }}>"Internships &amp; Research"</span><br />
                <span style={{ color:'var(--muted)' }}>{'}'}</span>
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.25rem' }}>
            {STATS.map(({ value, label }) => (
              <div key={label} className="reveal" style={{
                background:'var(--bg2)', border:'1px solid var(--border)',
                borderRadius:'var(--radius)', padding:'2rem 1.5rem',
                transition:'border-color var(--trans), transform var(--trans)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(245,166,35,0.4)'; e.currentTarget.style.transform='translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}>
                <div style={{ fontFamily:'var(--font-display)', fontSize:'2.4rem', fontWeight:800, color:'var(--amber)', lineHeight:1 }}>
                  {value}
                </div>
                <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.68rem', color:'var(--muted)', marginTop:'0.6rem', letterSpacing:'0.05em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  )
}
