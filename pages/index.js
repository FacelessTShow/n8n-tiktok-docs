// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="facebook-domain-verification" content="6stouov6id9cl37wmeyxizyaw2vj5s" />
        <title>Automate with n8n | Pre-built Workflows for Creators & Agencies</title>
        <meta name="description" content="Pre-built, battle-tested n8n workflows. No coding. Just import, configure, and run." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        {/* Força reset global */}
        <style jsx global>{`
          *,
          *::before,
          *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body, #__next {
            width: 100%;
            height: 100%;
            background: #0f0c14;
            color: white;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
          /* Força margem 0 no body */
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: #0f0c14;
            z-index: -1;
          }
        `}</style>

        {/* Estilo inline no body (garantia máxima) */}
        <style jsx>{`
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
        `}</style>
      </Head>

      <div style={{
        fontFamily: 'Inter, system-ui, sans-serif',
        background: '#0f0c14',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          width: '90%',
          textAlign: 'center',
          padding: '2rem',
          borderRadius: '16px',
          background: '#0f0c14',
          boxShadow: 'none',
          border: 'none',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(90deg, #6e45e2, #88d3ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            Automate with n8n
          </h1>

          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            color: '#cccccc'
          }}>
            Pre-built, battle-tested n8n workflows for creators, agencies, and solopreneurs.
          </p>

          <p style={{
            fontSize: '1rem',
            marginBottom: '2rem',
            color: '#aaaaaa'
          }}>
            No coding. Just import, configure, and run.
          </p>

          <Link href="/workflows" passHref>
            <a style={{
              display: 'inline-block',
              background: 'linear-gradient(90deg, #6e45e2, #88d3ce)',
              color: 'white',
              padding: '0.8rem 1.5rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.2s ease',
              boxShadow: '0 4px 12px rgba(110, 69, 226, 0.3)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}> 
              See Available Workflows
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
