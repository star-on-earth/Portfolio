import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',    href: '#about'          },
  { label: 'Skills',   href: '#skills'          },
  { label: 'Exp',      href: '#experience'      },
  { label: 'Projects', href: '#projects'        },
  { label: 'Certs',    href: '#certifications'  },
  { label: 'Contact',  href: '#contact'         },
]
const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.25rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(8,8,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,166,35,0.12)' : '1px solid transparent',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--amber)',
        letterSpacing: '0.05em',
      }}>
        AB<span style={{ color: 'var(--cyan)' }}>_</span>
      </a>

      {/* Desktop links */}
      <ul style={{
        display: 'flex', gap: '2.5rem', listStyle: 'none',
        fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
        letterSpacing: '0.12em',
      }} className="nav-desktop">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a href={href} style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = 'var(--amber)'}
               onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Resume CTA */}
      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
         style={{
           fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
           letterSpacing: '0.1em', padding: '0.5rem 1rem',
           border: '1px solid var(--amber)', color: 'var(--amber)',
           borderRadius: 'var(--radius)', transition: 'all 0.2s',
         }}
         onMouseEnter={e => { e.target.style.background='var(--amber)'; e.target.style.color='var(--bg)' }}
         onMouseLeave={e => { e.target.style.background='transparent'; e.target.style.color='var(--amber)' }}
         className="nav-resume">
        Resume ↗
      </a>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen(!open)} className="nav-hamburger"
        style={{ background:'none', border:'none', cursor:'pointer', color:'var(--amber)', fontSize:'1.4rem' }}>
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position:'fixed', top:0, left:0, right:0, bottom:0,
          background:'rgba(8,8,15,0.97)', zIndex:200,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'2.5rem',
        }}>
          <button onClick={() => setOpen(false)}
            style={{ position:'absolute', top:'1.5rem', right:'2rem', background:'none', border:'none', cursor:'pointer', color:'var(--amber)', fontSize:'1.5rem' }}>
            ✕
          </button>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}
               style={{ fontFamily:'var(--font-display)', fontSize:'2rem', fontWeight:700, color:'var(--text)' }}>
              {label}
            </a>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer"
             style={{ fontFamily:'var(--font-mono)', fontSize:'0.8rem', padding:'0.6rem 1.5rem', border:'1px solid var(--amber)', color:'var(--amber)', borderRadius:'var(--radius)' }}>
            Resume ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-resume  { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
