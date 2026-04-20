import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Animated particle network
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const DOTS = 55
    const dots = Array.from({ length: DOTS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > canvas.width)  d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1

        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(245,166,35,0.45)'
        ctx.fill()
      })

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(245,166,35,${0.12 * (1 - dist / 130)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Canvas background */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7,
      }} />

      {/* Amber glow blob */}
      <div style={{
        position: 'absolute', width: '600px', height: '600px',
        borderRadius: '50%', top: '-100px', right: '-150px',
        background: 'radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: '400px', height: '400px',
        borderRadius: '50%', bottom: '0', left: '-100px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Subtle mono label */}
        <p className="fade-up" style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.78rem',
          color: 'var(--cyan)', letterSpacing: '0.2em', marginBottom: '1.25rem',
          animationDelay: '0.05s',
        }}>
          &lt; CS &amp; Systems Engineer /&gt;
        </p>

        {/* Giant name heading */}
        <h1 className="fade-up" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 6.5rem)',
          fontWeight: 800, lineHeight: 1.0, letterSpacing: '-0.02em',
          marginBottom: '1rem',
          animationDelay: '0.1s',
        }}>
          Avrrodeep<br />
          <span style={{ color: 'var(--amber)' }}>Banerjee</span>
        </h1>

        {/* Tagline row */}
        <p className="fade-up" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          fontWeight: 400, lineHeight: 1.4, letterSpacing: '0.01em',
          color: 'var(--muted)',
          marginBottom: '1.5rem',
          animationDelay: '0.2s',
        }}>
          Engineer.&nbsp;&nbsp;Builder.&nbsp;&nbsp;Innovator.
        </p>

        {/* Subtitle */}
        <p className="fade-up" style={{
          fontSize: '1.05rem', color: 'var(--muted)', maxWidth: '560px',
          marginBottom: '2.5rem', lineHeight: 1.8, fontWeight: 300,
          animationDelay: '0.35s',
        }}>
          B.Tech CS &amp; Systems Engineering student at KIIT University — building IoT networks,
          computer vision pipelines, ML models, data analytics systems, and full-stack apps.
          I turn hardware constraints into creative solutions.
        </p>

        {/* CTAs */}
        <div className="fade-up" style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animationDelay: '0.5s',
        }}>
          <a href="#projects" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
            letterSpacing: '0.1em', padding: '0.85rem 2rem',
            background: 'var(--amber)', color: 'var(--bg)',
            borderRadius: 'var(--radius)', fontWeight: 500,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.target.style.transform='translateY(-2px)'; e.target.style.boxShadow='0 8px 24px rgba(245,166,35,0.3)' }}
          onMouseLeave={e => { e.target.style.transform='none'; e.target.style.boxShadow='none' }}>
            View Projects
          </a>
          <a href="#contact" style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
            letterSpacing: '0.1em', padding: '0.85rem 2rem',
            border: '1px solid rgba(245,166,35,0.3)', color: 'var(--text)',
            borderRadius: 'var(--radius)',
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.target.style.borderColor='var(--amber)'; e.target.style.color='var(--amber)' }}
          onMouseLeave={e => { e.target.style.borderColor='rgba(245,166,35,0.3)'; e.target.style.color='var(--text)' }}>
            Get In Touch
          </a>
        </div>

        {/* Social row */}
        <div className="fade-up" style={{
          display: 'flex', gap: '1rem', marginTop: '3.5rem',
          animationDelay: '0.65s', flexWrap: 'wrap',
        }}>
          {[
            { label: 'GitHub',   href: 'https://github.com/star-on-earth' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/avrrodeep-banerjee/' },
            { label: 'Kaggle',   href: 'https://kaggle.com/avrrodeep' },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               style={{
                 fontFamily:'var(--font-mono)', fontSize:'0.8rem',
                 color:'var(--text)', letterSpacing:'0.08em',
                 padding:'0.4rem 0.9rem',
                 border:'1px solid rgba(255,255,255,0.12)',
                 borderRadius:'var(--radius)',
                 transition:'all 0.2s',
               }}
               onMouseEnter={e=>{ e.currentTarget.style.color='var(--amber)'; e.currentTarget.style.borderColor='rgba(245,166,35,0.4)' }}
               onMouseLeave={e=>{ e.currentTarget.style.color='var(--text)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.12)' }}>
              {label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem',
        fontFamily:'var(--font-mono)', fontSize:'0.65rem', color:'var(--muted)', letterSpacing:'0.15em',
      }}>
        <span>SCROLL</span>
        <div style={{ width:'1px', height:'40px', background:'linear-gradient(to bottom, var(--amber), transparent)' }} />
      </div>
    </section>
  )
}
