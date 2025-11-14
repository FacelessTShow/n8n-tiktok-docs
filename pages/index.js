import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="facebook-domain-verification" content="6stouov6id9cl37wmeyxizyaw2vj5s" />
      </Head>

      <div style={{ fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Automate with n8n</h1>
        <p>Pre-built, battle-tested n8n workflows for creators, agencies, and solopreneurs.</p>
        <p>No coding. Just import, configure, and run.</p>
        <br />
        <Link href="/workflows">
          <a style={{ background: '#0070f3', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '6px', textDecoration: 'none' }}>
            See Available Workflows
          </a>
        </Link>
      </div>
    </>
  );
}
