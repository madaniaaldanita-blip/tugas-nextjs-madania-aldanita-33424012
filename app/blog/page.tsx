import Link from 'next/link';

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Belajar Next.js: Pengalaman Pertama",
      excerpt: "Cerita tentang perjalanan saya belajar Next.js dan tantangan yang dihadapi...",
      date: "2025-01-15"
    },
    {
      id: 2,
      title: "Tips dan Trik Styling dengan Tailwind CSS",
      excerpt: "Panduan praktis untuk styling aplikasi web menggunakan Tailwind CSS...",
      date: "2026-01-10"
    },
    {
      id: 3,
      title: "Mengenal React Hooks",
      excerpt: "Penjelasan tentang berbagai hooks di React dan cara penggunaannya...",
      date: "2025-01-05"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Blog Saya</h1>
        <p className="text-gray-600">Berbagi pengetahuan dan pengalaman dalam dunia programming</p>
      </div>

      <div className="grid gap-6">
        {articles.map((article) => (
          <article key={article.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                <Link href={`/blog/detail?id=${article.id}`}>
                  {article.title}
                </Link>
              </h2>
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Link
              href={`/blog/detail?id=${article.id}`}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Baca selengkapnya →
            </Link>
          </article>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Belum ada artikel yang dipublikasikan.</p>
        </div>
      )}
    </div>
  );
}