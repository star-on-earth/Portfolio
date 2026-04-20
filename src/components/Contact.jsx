import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)
  const EMAIL = 'avrrodeepbanerjee@gmail.com'

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.ct-item').forEach((el, i) => {
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

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const LINKS = [
    { label: 'GitHub',   href: 'https://github.com/star-on-earth',                  mono: 'github.com/star-on-earth' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avrrodeep-banerjee/',    mono: 'linkedin.com/in/avrrodeep-banerjee' },
    { label: 'Kaggle',   href: 'https://kaggle.com/avrrodeep',                       mono: 'kaggle.com/avrrodeep' },
  ]

  return (
    <section id="contact" className="section" ref={ref} style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth:'680px' }}>
          <p className="section-label ct-item">Contact</p>
          <h2 className="section-title ct-item">
            Let's build something<br />
            <span style={{ color:'var(--amber)' }}>together.</span>
          </h2>
          <p className="ct-item" style={{ color:'var(--muted)', marginBottom:'3rem', fontWeight:300, lineHeight:1.85, fontSize:'1rem' }}>
            I'm open to internships, research collaborations, and interesting projects
            in IoT, computer vision, or full-stack engineering. Reach out and let's talk.
          </p>

          {/* Email block */}
          <div className="ct-item" style={{
            background:'var(--bg3)', border:'1px solid var(--border)',
            borderRadius:'var(--radius)', padding:'1.5rem 2rem',
            display:'flex', alignItems:'center', justifyContent:'space-between',
            flexWrap:'wrap', gap:'1rem', marginBottom:'2.5rem',
          }}>
            <div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--muted)', letterSpacing:'0.15em', marginBottom:'0.4rem' }}>
                PRIMARY EMAIL
              </div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'1.05rem', color:'var(--text)' }}>
                {EMAIL}
              </div>
            </div>
            <div style={{ display:'flex', gap:'0.75rem' }}>
              <button onClick={copyEmail} style={{
                fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                padding:'0.55rem 1.25rem', border:'1px solid var(--border)',
                borderRadius:'var(--radius)', background:'transparent',
                color: copied ? 'var(--cyan)' : 'var(--muted)',
                cursor:'pointer', transition:'all 0.2s',
                borderColor: copied ? 'var(--cyan)' : 'var(--border)',
              }}>
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
              <a href={`mailto:${EMAIL}`} style={{
                fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                padding:'0.55rem 1.25rem', background:'var(--amber)', color:'var(--bg)',
                borderRadius:'var(--radius)', border:'1px solid var(--amber)',
                transition:'opacity 0.2s',
              }}
              onMouseEnter={e=>e.target.style.opacity='0.85'}
              onMouseLeave={e=>e.target.style.opacity='1'}>
                Send Mail
              </a>
            </div>
          </div>

          {/* Social links */}
          <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {LINKS.map(({ label, href, mono }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="ct-item"
                 style={{
                   display:'flex', alignItems:'center', justifyContent:'space-between',
                   padding:'1.1rem 1.5rem', background:'var(--bg3)',
                   border:'1px solid var(--border)', borderRadius:'var(--radius)',
                   transition:'border-color var(--trans), transform var(--trans)',
                 }}
                 onMouseEnter={e=>{ e.currentTarget.style.borderColor='rgba(245,166,35,0.35)'; e.currentTarget.style.transform='translateX(4px)' }}
                 onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.transform='none' }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.85rem', color:'var(--text)', letterSpacing:'0.04em' }}>{mono}</span>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.82rem', color:'var(--amber)', fontWeight:500 }}>{label} ↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
