import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    id: '01',
    title: 'ArUco-Vision',
    tagline: 'Real-time navigation assistant for the visually impaired',
    description:
      'Visual-aid for home objects using ArUco markers with voice callouts. Combines YOLOv8n obstacle detection, ArUco marker-based metric distance estimation, MiDaS neural depth estimation, and pyttsx3 TTS for real-time directional audio feedback.',
    stack: ['YOLOv8n', 'ArUco', 'MiDaS', 'OpenCV', 'pyttsx3', 'Python'],
    type: 'Computer Vision',
    status: 'In Progress',
    highlight: true,
    links: {
      github: 'https://github.com/star-on-earth/ArUco-Vision',   // ← replace ARUCO_REPO
      docs:   'https://drive.google.com/drive/folders/1er1wLW1oDkeXuhu_x6Fbm88NTo4MooNU?usp=sharing',                                  // ← replace with your doc/report link
    },
  },
  {
    id: '02',
    title: 'Wealth-Wise',
    tagline: 'Personalized savings advisor with integrated Indian IT law engine',
    description:
      'Full-stack personal finance app with FY26-27 tax engine (new + old regime, §87A rebate up to ₹12L), multi-income sources, per-asset post-tax CAGR across 12 asset classes, 20 IT sections guide, goals SIP calculator, and Claude AI financial assistant via FastAPI proxy.',
    stack: ['React', 'FastAPI', 'Firebase', 'Vercel', 'Railway', 'Claude AI'],
    type: 'Full-Stack Web',
    status: 'Active',
    highlight: false,
    links: {
      github: 'https://github.com/star-on-earth/WealthWise', // ← replace
      docs:   'https://drive.google.com/drive/folders/1er1wLW1oDkeXuhu_x6Fbm88NTo4MooNU?usp=sharing',                               // ← replace
    },
  },
  {
    id: '03',
    title: 'Deepfake Image Detection',
    tagline: 'Dual-backbone ensemble for AI-generated image forensics',
    description:
      'IEEE-grade research project using EfficientNetB3 + Xception with SE attention blocks, two-phase training on DeepDetect-2025 Kaggle dataset. Accompanied by a full research paper.',
    stack: ['PyTorch', 'EfficientNetB3', 'Xception', 'SE Attention', 'Kaggle', 'Python'],
    type: 'Deep Learning',
    status: 'Complete',
    highlight: false,
    links: {
      github: 'https://github.com/star-on-earth/deepfake-analyzer',  // ← replace
      docs:   'https://drive.google.com/drive/folders/1er1wLW1oDkeXuhu_x6Fbm88NTo4MooNU?usp=sharing',                                // ← replace with paper/report link
    },
  },
  {
    id: '04',
    title: 'DepthAI Spatial Locator',
    tagline: 'Stereo-camera distance calculation using OAK-D',
    description:
      'Built during IoT Internship at Jadavpur University. Coded the distance calculation program using Luxonis OAK-D stereo-camera libraries. Enables real-time 3D spatial localization for robotics and navigation use cases.',
    stack: ['DepthAI', 'OAK-D', 'OpenCV', 'Stereo Vision', 'Python'],
    type: 'Computer Vision',
    status: 'Complete',
    highlight: false,
    links: {
      github: 'https://github.com/star-on-earth/DepthAISpatialAnalysis',   // ← replace
      docs:   'https://drive.google.com/drive/folders/1er1wLW1oDkeXuhu_x6Fbm88NTo4MooNU?usp=sharing',                                  // ← replace with report link
    },
  },
  {
    id: '05',
    title: 'Air Quality Index',
    tagline: 'Real-time air quality sensing with IoT cloud pipeline',
    description:
      'Developed and implemented Arduino code for MQ gas sensors to monitor air quality. Successfully transmitted real-time sensor data to a ThingSpeak channel for live visualization and analysis. Built under IoT-Lab-KIIT.',
    stack: ['Arduino', 'MQ Sensors', 'ThingSpeak', 'Embedded C', 'IoT'],
    type: 'IoT Systems',
    status: 'Complete',
    highlight: false,
    links: {
      github: 'https://github.com/star-on-earth/AQI',       // ← replace
    },
  },
  {
    id: '06',
    title: 'Sensor-based Simulated Bomb',
    tagline: 'Multi-sensor hardware integration project',
    description:
      'Hardware design of a sensor-based simulated bomb, integrating multiple sensors as per requirement. Built under IoT-Lab-KIIT as a hardware systems challenge.',
    stack: ['Arduino', 'Sensors', 'Embedded C', 'Hardware Design'],
    type: 'IoT Systems',
    status: 'Complete',
    highlight: false,
    links: {
      github: 'https://github.com/star-on-earth/SimulatedBomb',      // ← replace
    },
  },
]

const TYPE_COLOR = {
  'Computer Vision': 'var(--cyan)',
  'Full-Stack Web':  'var(--amber)',
  'Deep Learning':   '#b57bee',
  'IoT Systems':     '#5af078',
}

const STATUS_COLOR = {
  'Active':      { bg:'rgba(90,240,120,0.08)', border:'rgba(90,240,120,0.25)', color:'#5af078' },
  'In Progress': { bg:'rgba(245,166,35,0.08)', border:'rgba(245,166,35,0.25)', color:'var(--amber)' },
  'Complete':    { bg:'rgba(0,212,255,0.08)', border:'rgba(0,212,255,0.25)', color:'var(--cyan)' },
}

export default function Projects() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.proj-card').forEach((el, i) => {
            el.style.animationDelay = `${i * 0.1}s`
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
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Things I've<span style={{ color:'var(--amber)' }}> built.</span>
        </h2>
        <p style={{ color:'var(--muted)', marginBottom:'3.5rem', maxWidth:'520px', fontWeight:300 }}>
          Each project is a real attempt at solving a real problem — not tutorial clones.
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
          {PROJECTS.map((proj, idx) => (
            <ProjectCard key={proj.id} proj={proj} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ proj }) {
  const [hovered, setHovered] = useState(false)
  const s = STATUS_COLOR[proj.status]

  return (
    <div className="proj-card" style={{
      opacity: 0,
      background: hovered
        ? proj.highlight ? 'rgba(245,166,35,0.04)' : 'var(--bg2)'
        : proj.highlight ? 'rgba(245,166,35,0.02)' : 'var(--bg)',
      border: `1px solid ${hovered ? 'rgba(245,166,35,0.35)' : proj.highlight ? 'rgba(245,166,35,0.22)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      padding: '2rem 2.25rem',
      transition: 'all var(--trans)',
      cursor: 'default',
    }}
    onMouseEnter={()=>setHovered(true)}
    onMouseLeave={()=>setHovered(false)}>
      <div style={{ display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap' }}>
        {/* Number */}
        <div style={{
          fontFamily:'var(--font-mono)', fontSize:'0.7rem',
          color:'var(--muted)', paddingTop:'0.2rem', minWidth:'24px',
        }}>
          {proj.id}
        </div>

        {/* Main content */}
        <div style={{ flex:1, minWidth:'200px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap', marginBottom:'0.5rem' }}>
            <h3 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'1.2rem' }}>
              {proj.title}
            </h3>
            {/* Status badge */}
            <span style={{
              fontFamily:'var(--font-mono)', fontSize:'0.62rem',
              padding:'0.15rem 0.6rem', borderRadius:'2px',
              background:s.bg, border:`1px solid ${s.border}`, color:s.color,
            }}>
              {proj.status}
            </span>
          </div>

          <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.75rem', color: TYPE_COLOR[proj.type] || 'var(--amber)', marginBottom:'0.75rem' }}>
            {proj.type}
          </p>

          <p style={{ color:'var(--muted)', fontSize:'0.9rem', fontWeight:300, lineHeight:1.75, marginBottom:'1.25rem', maxWidth:'680px' }}>
            {proj.description}
          </p>

          {/* Stack */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.45rem', marginBottom:'1.5rem' }}>
            {proj.stack.map(s => <span key={s} className="chip">{s}</span>)}
          </div>

          {/* Links */}
          <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
            {proj.links.github && !proj.links.github.includes('REPLACE') && (
              <a href={proj.links.github} target="_blank" rel="noopener noreferrer"
                 style={{
                   fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                   padding:'0.45rem 1rem',
                   border:'1px solid var(--border)', borderRadius:'var(--radius)',
                   color:'var(--muted)', transition:'all 0.2s',
                   display:'inline-flex', alignItems:'center', gap:'0.4rem',
                 }}
                 onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--amber)'; e.currentTarget.style.color='var(--amber)' }}
                 onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--muted)' }}>
                GitHub ↗
              </a>
            )}
            {proj.links.docs && !proj.links.docs.includes('REPLACE') && (
              <a href={proj.links.docs} target="_blank" rel="noopener noreferrer"
                 style={{
                   fontFamily:'var(--font-mono)', fontSize:'0.72rem',
                   padding:'0.45rem 1rem',
                   background:'rgba(245,166,35,0.1)',
                   border:'1px solid rgba(245,166,35,0.3)', borderRadius:'var(--radius)',
                   color:'var(--amber)', transition:'all 0.2s',
                   display:'inline-flex', alignItems:'center', gap:'0.4rem',
                 }}
                 onMouseEnter={e=>{ e.currentTarget.style.background='var(--amber)'; e.currentTarget.style.color='var(--bg)' }}
                 onMouseLeave={e=>{ e.currentTarget.style.background='rgba(245,166,35,0.1)'; e.currentTarget.style.color='var(--amber)' }}>
                Docs / Report ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
