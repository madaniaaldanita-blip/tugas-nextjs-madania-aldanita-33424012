import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-700 text-white shadow-md">
      <h1 className="font-bold">Modul 2 Next.js</h1>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
      </div>
    </nav>
  );
}