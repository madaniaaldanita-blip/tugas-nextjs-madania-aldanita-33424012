import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '4rem', fontFamily: 'sans-serif' }}>
      <h1>Halo, ini tugas modifikasi Next.js saya!</h1>
      <h2>Madania Aldanita</h2>
      <h3>3.34.24.0.12</h3>

      <br />
      <br />
      
      <Link href="/profile" style={{ color: 'blue', textDecoration: 'underline', fontSize: '1.2rem' }}>
        Lihat Halaman Profil Saya ➡️
      </Link>
    </main>
  );
}