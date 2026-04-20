export default function Footer() {
  return (
    <footer style={{
      padding: '2rem',
      borderTop: '1px solid var(--border)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--muted)' }}>
        © {new Date().getFullYear()} Avrrodeep Banerjee
      </span>
      <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--muted)' }}>
        Built with React · Deployed on Vercel
      </span>
    </footer>
  )
}
