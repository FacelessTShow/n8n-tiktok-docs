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

        <h3 style={{ marginTop: '1.5rem' }}>Option 1: DIY (R$149)</h3>
        <p>You get: .json file + PDF guide + 1 email support</p>
        <a 
          href="https://mpago.la/2dqTLmW" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#4ade80', color: 'black', padding: '0.6rem 1.2rem', borderRadius: '4px', textDecoration: 'none' }}
        >
          💳 Pay with Pix / Credit Card (DIY)
        </a>

        <h3 style={{ marginTop: '1.5rem' }}>Option 2: Full Setup (R$399)</h3>
        <p>I install it on your n8n + 1h training call</p>
        <a 
          href="https://mpago.la/21PQawj" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#2563eb', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '4px', textDecoration: 'none' }}
        >
          🛠️ Pay for Full Setup + Support
        </a>
      </div>

      <p><a href="/">← Back to home</a></p>
    </div>
  );
}