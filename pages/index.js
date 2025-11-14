// pages/index.js
export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Automate with n8n</h1>
      <p>Pre-built, battle-tested n8n workflows for creators, agencies, and solopreneurs.</p>
      <p>No coding. Just import, configure, and run.</p>
      <br />
      <a href="/workflows" style={{ background: '#0070f3', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none' }}>
        See Available Workflows
      </a>
    </div>
  );
}
