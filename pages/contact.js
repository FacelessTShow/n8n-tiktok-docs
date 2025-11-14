// pages/contact.js
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const workflow = router.query.workflow || 'general';

  return (
    <div style={{ fontFamily: 'system-ui', maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h1>Get Your Workflow</h1>
      
      <p>
        You selected: <strong>
          {workflow === 'ai-shorts' ? 'AI Shorts Automator' : 'General Inquiry'}
        </strong>
      </p>
      
      <p>Choose your option:</p>
      
      <div style={{ marginTop: '1.5rem' }}>
        <h3>1. DIY (R$149)</h3>
        <p>You get: .json file + PDF guide + 1 email support</p>
        <a 
          href="https://pag.ae/your-pagseguro-link" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#4ade80', color: 'black', padding: '0.6rem 1.2rem', borderRadius: '4px', textDecoration: 'none' }}
        >
          Pay with Pix / Credit Card
        </a>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <h3>2. Full Setup (R$399)</h3>
        <p>I install it on your n8n + 1h training call</p>
        <a 
          href="https://wa.me/message/JAWFDTQY5XZ3J1?text=Hi! I want the full setup for AI Shorts Automator." 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block', background: '#2563eb', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '4px', textDecoration: 'none' }}
        >
          Contact via WhatsApp
        </a>
      </div>

      <p style={{ marginTop: '2rem' }}><a href="/workflows">← See all workflows</a></p>
    </div>
  );
}