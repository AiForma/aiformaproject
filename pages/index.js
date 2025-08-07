import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>AiForma</title>
      </Head>
      <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
        <h1>Velkommen til AiForma</h1>
        <p>AI som svarer telefonen for frisørsalonger, klinikker og småbedrifter.</p>
        <nav>
          <Link href="/no">Norsk</Link> | <Link href="/en">English</Link>
        </nav>
      </main>
    </>
  );
}
