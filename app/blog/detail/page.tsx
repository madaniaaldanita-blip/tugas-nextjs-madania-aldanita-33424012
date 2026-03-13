import Link from 'next/link';

export default function DetailBlog() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Detail Artikel</h1>
        <p className="text-gray-600">Oleh Madania Aldanita • 15 Januari 2024</p>
      </div>

      <article className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Belajar Next.js: Pengalaman Pertama
        </h2>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            Halo teman-teman! Hari ini saya ingin berbagi pengalaman pertama saya dalam belajar Next.js.
            Sebagai mahasiswa informatika, saya selalu tertarik dengan teknologi web modern, dan Next.js
            adalah salah satu framework yang sangat populer saat ini.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Apa itu Next.js?</h3>
          <p>
            Next.js adalah framework React yang dibuat oleh Vercel. Framework ini menyediakan fitur-fitur
            seperti Server-Side Rendering (SSR), Static Site Generation (SSG), dan API routes yang membuat
            pengembangan aplikasi web menjadi lebih mudah dan efisien.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">Tantangan yang Dihadapi</h3>
          <p>
            Ketika pertama kali belajar Next.js, saya mengalami beberapa tantangan seperti:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Memahami konsep App Router vs Pages Router</li>
            <li>Konfigurasi Tailwind CSS</li>
            <li>Mengelola state management</li>
            <li>Optimasi performa aplikasi</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">Tips untuk Pemula</h3>
          <p>
            Jika Anda baru belajar Next.js, berikut beberapa tips yang bisa membantu:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Mulai dengan dokumentasi resmi Next.js</li>
            <li>Praktikkan dengan membuat proyek kecil</li>
            <li>Pelajari TypeScript untuk type safety</li>
            <li>Gunakan Tailwind CSS untuk styling</li>
          </ul>

          <p>
            Terima kasih telah membaca artikel ini! Jika ada pertanyaan, jangan ragu untuk bertanya.
            Sampai jumpa di artikel selanjutnya! 🚀
          </p>
        </div>
      </article>

      <div className="text-center">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          ← Kembali ke Blog
        </Link>
      </div>
    </div>
  );
}