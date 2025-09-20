import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-gray-900 text-white p-4">
        <Image src="/profile.jpg" alt="Ricardo Leitão Pedro" width={150} height={150} className="rounded-full mb-4 object-cover" />
        <h1 className="text-3xl md:text-5xl font-bold text-center">Ricardo Leitão Pedro</h1>
        <p className="text-lg md:text-xl text-gray-300 text-center">Entrepreneur | Software Developer | Technologist</p>
        <p className="text-md md:text-lg text-gray-400 text-center">Business Design, Digitization, AI Strategy</p>
        <a href="/portfolio" className="mt-6 px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition text-white">View My Work</a>
      </section>
    </>
  );
}