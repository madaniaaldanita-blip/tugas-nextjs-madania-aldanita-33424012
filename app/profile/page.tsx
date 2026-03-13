export default function ProfilePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Halaman Profil</h1>
        <p className="text-gray-600">Kenali lebih dekat tentang saya</p>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            MA
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Madania Aldanita</h2>
            <p className="text-gray-600">Mahasiswa | Pengembang Web</p>
            <p className="text-sm text-gray-500 mt-2">NIM: 3.34.24.0.12</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">🎓 Pendidikan</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Politeknik negeri Semarang</li>
            <li>• Jurusan Informatika</li>
            <li>• Semester 4</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">💻 Keahlian</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• HTML & CSS</li>
            <li>• JavaScript</li>
            <li>• React & Next.js</li>
            <li>• Node.js</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">📝 Tentang Saya</h3>
        <p className="text-gray-600 leading-relaxed">
          Halo! Saya Madania Aldanita, mahasiswa informatika yang tertarik dengan pengembangan web.
          Saya sedang belajar Next.js dan teknologi web modern lainnya. Saya suka membuat aplikasi
          yang user-friendly dan memiliki desain yang menarik.
        </p>
      </div>
    </div>
  );
}