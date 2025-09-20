import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen">
        <nav className="p-4 bg-blue-950 shadow-md">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 justify-center">
            <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link href="/portfolio" className="hover:text-blue-300">Portfolio</Link></li>
            <li><Link href="/skills" className="hover:text-blue-300">Skills</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </nav>
        <main className="max-w-6xl mx-auto p-4 md:p-8">{children}</main>
      </body>
    </html>
  );
}