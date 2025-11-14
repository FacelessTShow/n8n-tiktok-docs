// pages/workflows.js
export default function Workflows() {
  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Workflows</h1>
      
      <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem', marginBottom: '2rem' }}>
        <h2>AI Shorts Automator</h2>
        <p>Generates full YouTube Shorts/TikToks from a Google Sheet:</p>
        <ul>
          <li>AI image → AI video → AI voice → auto-upload</li>
          <li>Works with Creatomate, ElevenLabs, YouTube</li>
          <li>Handles 4 animals + style per batch</li>
        </ul>
        <p><strong>Price:</strong> R$149 (DIY) | R$399 (installed + support)</p>
        <a href="/contact?workflow=ai-shorts" style={{ background: '#0070f3', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', marginTop: '0.5rem' }}>
          Get This Workflow
        </a>
      </div>

      {/* Adicione mais workflows aqui */}

      <p><a href="/">← Back to home</a></p>
    </div>
  );
}
