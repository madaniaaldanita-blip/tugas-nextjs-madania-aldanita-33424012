import "./globals.css";
import Navbar from "./_components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        {/* Main content dengan padding agar tidak menempel ke pinggir */}
        <main className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
          {children}
        </main>
      </body>
    </html>
  );
}