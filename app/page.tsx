import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Halo, ini tugas modifikasi Next.js saya!</h1>
        <h2 className="text-2xl text-gray-600">Madania Aldanita</h2>
        <h3 className="text-lg text-gray-500">3.34.24.0.12</h3>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Selamat Datang di Website Saya</h2>
        <p className="text-lg mb-6">Jelajahi halaman-halaman menarik di bawah ini</p>
        <Link
          href="/profile"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-md"
        >
          Lihat Halaman Profil Saya ➡️
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🏠 Home</h3>
          <p className="text-gray-600">Halaman utama dengan informasi dasar</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">👤 Profile</h3>
          <p className="text-gray-600">Pelajari lebih lanjut tentang saya</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">📝 Blog</h3>
          <p className="text-gray-600">Baca artikel dan tulisan menarik</p>
        </div>
      </div>
    </div>
  );
}