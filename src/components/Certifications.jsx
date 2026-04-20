import { useEffect, useRef } from 'react'

// ─────────────────────────────────────────────────────────────
//  HOW TO ADD YOUR CERTIFICATE LINKS:
//  Replace each "CERT_URL" string below with the actual link.
//  Sources:
//    Oracle  → your Oracle MyLearn profile → Credentials
//    AWS     → aws.training → Transcript → Certifications
//    LinkedIn → Add to profile → View certificate → copy URL
//    Others  → use Google Drive share link or any public URL
// ─────────────────────────────────────────────────────────────

const CERTS = [
  { name: 'OCI 2025 Generative AI Professional',          issuer: 'Oracle',                  icon: '◈', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'OCI 2025 AI Foundations Associate',            issuer: 'Oracle',                  icon: '◈', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'OCI 2025 Data Science Professional',           issuer: 'Oracle',                  icon: '◈', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Oracle Data Platform 2025 Foundations',        issuer: 'Oracle',                  icon: '◈', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Securely Connecting IoT Devices to Cloud',     issuer: 'AWS',                     icon: '☁', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Getting Started with AWS IoT',                 issuer: 'AWS',                     icon: '☁', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Handling AWS IoT Device Data and States',      issuer: 'AWS',                     icon: '☁', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Lean Six Sigma Yellow Belt',                   issuer: 'C.S.S.C / Sparen',        icon: '▲', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'AI for Youth Bootcamp',                        issuer: 'Intel Digital Readiness',  icon: '⚡', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'AI-Driven Project Management',                 issuer: 'UPBUILD Academy',          icon: '⚡', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Activation Workshop',                          issuer: '1M1B / AICTE / Salesforce',icon: '✦', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Ethical Hacking Workshop (2 Days)',             issuer: 'IIT Bhubaneswar',          icon: '■', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'IoT Internship Certificate',                   issuer: 'Jadavpur University',      icon: '●', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
  { name: 'Forensic Science Webinar',                     issuer: 'Adamas University',        icon: '✦', url: 'https://drive.google.com/drive/folders/1irkb51wsRDOshpuZe41YdjOImSoyFI_A?usp=drive_link' },
]

const ISSUER_COLOR = {
  'Oracle': { text:'var(--cyan)',  bg:'rgba(0,212,255,0.07)',   border:'rgba(0,212,255,0.2)'   },
  'AWS':    { text:'var(--amber)', bg:'rgba(245,166,35,0.07)',  border:'rgba(245,166,35,0.2)'  },
  'Intel Digital Readiness': { text:'#b57bee', bg:'rgba(181,123,238,0.07)', border:'rgba(181,123,238,0.2)' },
}

const getColor = issuer =>
  ISSUER_COLOR[issuer] || { text:'var(--muted)', bg:'rgba(122,120,144,0.07)', border:'rgba(122,120,144,0.2)' }

export default function Certifications() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.cert-item').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.04}s`
            el.classList.add('fade-up')
          })
        }
      }),
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="certifications" className="section" ref={ref}
      style={{ background:'var(--bg2)', borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="container">
        <p className="section-label">Certifications</p>
        <h2 className="section-title">
          Verified learning<span style={{ color:'var(--amber)' }}>.</span>
        </h2>
        <p style={{ color:'var(--muted)', marginBottom:'3rem', maxWidth:'500px', fontWeight:300 }}>
          14 credentials across cloud, AI, IoT, and security. Click any to view.
        </p>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'0.85rem' }}>
          {CERTS.map(({ name, issuer, icon, url }) => {
            const c = getColor(issuer)
            const hasLink = url && url !== 'CERT_URL'

            return (
              <button key={name} className="cert-item"
                onClick={() => hasLink && window.open(url, '_blank', 'noopener,noreferrer')}
                title={hasLink ? `View: ${name}` : 'Link coming soon'}
                style={{
                  opacity:0, display:'flex', alignItems:'flex-start', gap:'0.9rem',
                  background:'var(--bg3)', border:`1px solid ${hasLink ? c.border : 'var(--border)'}`,
                  borderRadius:'var(--radius)', padding:'1.1rem 1.25rem',
                  cursor: hasLink ? 'pointer' : 'default',
                  textAlign:'left', width:'100%',
                  transition:'border-color var(--trans), transform var(--trans), background var(--trans)',
                }}
                onMouseEnter={e => {
                  if (!hasLink) return
                  e.currentTarget.style.background = c.bg
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.borderColor = c.text
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'var(--bg3)'
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = hasLink ? c.border : 'var(--border)'
                }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.9rem', color:c.text, minWidth:'18px', paddingTop:'1px' }}>
                  {icon}
                </span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:'0.82rem', fontWeight:400, lineHeight:1.45, color:'var(--text)', marginBottom:'0.3rem' }}>
                    {name}
                  </div>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:'0.5rem' }}>
                    <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:c.text, letterSpacing:'0.05em' }}>
                      {issuer}
                    </div>
                    {hasLink && (
                      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.62rem', color:c.text }}>↗</span>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
