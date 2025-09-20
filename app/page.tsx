import { Analytics } from "@vercel/analytics/next"
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <Analytics />
      <Image src="/profile.jpg" alt="Ricardo Leitão Pedro" width={150} height={150} className="rounded-full mb-4" />
      <h1 className="text-4xl font-bold">Ricardo Leitão Pedro</h1>
      <p className="text-xl">Software Developer | Entrepreneur | Technologist</p>
      <a href="/portfolio" className="mt-4 px-6 py-3 bg-blue-600 rounded">View Portfolio</a>
    </section>
  );
}