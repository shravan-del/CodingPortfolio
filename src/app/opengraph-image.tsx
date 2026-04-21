import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export const alt = 'Shravan Athikinasetti — Software Engineer & AI Researcher';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#0a0a0b',
          padding: 72,
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 400,
            color: '#f5f5f7',
            lineHeight: 1.05,
            letterSpacing: -0.03,
            marginBottom: 28,
            maxWidth: 1000,
            fontFamily: 'Georgia, serif',
          }}
        >
          Shravan Athikinasetti
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#d4ff3f',
            marginBottom: 20,
            fontFamily: 'ui-monospace, monospace',
          }}
        >
          I build AI systems that ship.
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#8b8b93',
            maxWidth: 920,
            lineHeight: 1.45,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          ACM CSCW 2024 · Sentivity AI · Amazon Devices SDE (2026) · Virginia Tech CS +
          Quantum Computing
        </div>
      </div>
    ),
    { ...size }
  );
}
