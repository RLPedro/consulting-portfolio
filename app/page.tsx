// Bruma Consultancy Website — Dark-Golden Palette + Full-Screen Hero with Fading Gothenburg Background + Mobile Drawer + Smooth Scrolling
// Next.js 13 App Router + Tailwind v3 + Framer Motion + Unsplash placeholder


"use client";


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import ContactForm from '@/components/ContactForm';


const services = [
{ title: 'Digital Strategy', desc: 'Guiding your team through discovery, roadmapping, and growth strategy.', stack: 'Workshops • Market Fit • Roadmaps' },
{ title: 'Product Design', desc: 'Designing interfaces and experiences that connect with your users.', stack: 'UI/UX • Design Systems • Figma' },
{ title: 'Engineering', desc: 'Building robust applications across web and mobile platforms.', stack: 'React • TypeScript • Node.js' },
{ title: 'Scaling & Optimization', desc: 'Optimizing performance, infrastructure, and pipelines for growth.', stack: 'Cloud • DevOps • Observability' },
];


const projects = [
{ title: 'Enterprise Web Strategy', tag: 'Digital Roadmap', year: 2025, href: '#', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d' },
{ title: "Product Design Sprint", tag: "UX/UI Design", year: 2025, href: "#", img: 'https://images.unsplash.com/photo-1595142545813-06fee27f3dcb' },
{ title: 'SaaS Engineering Platform', tag: 'Full-stack Build', year: 2025, href: '#', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
{ title: 'Scaling Global Systems', tag: 'Cloud Architecture', year: 2025, href: '#', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d' },
];

export default function Page() {
const [menuOpen, setMenuOpen] = useState(false);


return (
  <div className="flex flex-col min-h-screen bg-bruma-dark text-gray-200 relative">
    <Analytics />
    <SpeedInsights />

    {/* Header */}
    <header className="sticky top-0 z-20 px-8 py-6 backdrop-blur bg-bruma-dark/80 border-b border-bruma-neutral/20">
      <nav className="flex items-center justify-between">


      {/* Placeholder logo */}
      <div className="text-2xl font-bold text-bruma"><a href="#">B</a></div>

      {/* Hamburger button */}
      <button className="md:hidden z-30" onClick={() => setMenuOpen(true)}>
      <span className="block w-6 h-0.5 bg-bruma mb-1"></span>
      <span className="block w-6 h-0.5 bg-bruma mb-1"></span>
      <span className="block w-6 h-0.5 bg-bruma"></span>
      </button>


      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm text-bruma-neutral">
      <li><a href="#services" className="hover:text-bruma">Services</a></li>
      <li><a href="#works" className="hover:text-bruma">Works</a></li>
      <li><a href="#about" className="hover:text-bruma">About</a></li>
      <li><a href="#contact" className="hover:text-bruma">Contact</a></li>
      </ul>
      </nav>
      </header>


    {/* Mobile Menu Drawer */}
    <AnimatePresence>
      {menuOpen && (
      <motion.div
      key="mobile-menu"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-50 bg-bruma flex flex-col items-center justify-center gap-12"
      >
      <button
      className="absolute top-6 right-6 text-3xl text-bruma-dark"
      onClick={() => setMenuOpen(false)}
      >
      ×
      </button>
      <a href="#services" className="text-4xl font-bold text-bruma-dark hover:underline" onClick={() => setMenuOpen(false)}>Services</a>
      <a href="#works" className="text-4xl font-bold text-bruma-dark hover:underline" onClick={() => setMenuOpen(false)}>Works</a>
      <a href="#about" className="text-4xl font-bold text-bruma-dark hover:underline" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#contact" className="text-4xl font-bold text-bruma-dark hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
      </motion.div>
      )}
    </AnimatePresence>

    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start px-12 md:px-20 overflow-hidden"
    >
      {/* Full-width background image with fade */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1543747325-a058c441b776"
          alt="Gothenburg cityscape"
          className="w-full h-full object-cover"
          style={{
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))',
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1))',
          }}
        />
        <div className="absolute inset-0 bg-bruma-dark/40"></div>
      </div>

      {/* Hero section */}
      <div className="relative z-10 text-left max-w-3xl">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-[9rem] font-extrabold tracking-tight uppercase leading-[1.1] text-bruma"
        >
          Bruma
        </motion.h1>
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-light tracking-wide text-bruma-neutral mt-2"
        >
          Digital Consultancy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-prose text-bruma-neutral"
        >
          We help ambitious startups and enterprises design, build, and scale digital products that move markets and delight users.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 border border-bruma-neutral/40 rounded-lg hover:bg-bruma/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Work with us ↗
        </motion.a>
      </div>
    </section>

      {/* Main content */}
      <main className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-20 space-y-32">
        {/* Services Section */}
        <section id="services">
          <h3 className="tracking-[0.3em] text-bruma-neutral uppercase">Services /</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {services.map((s, i) => (
              <motion.article key={i} whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(212,175,55,0.3)' }} className="bg-bruma-dark/10 p-6 rounded-lg border border-bruma-neutral/20 hover:border-bruma hover:bg-bruma-dark/20 transition-colors duration-300">
                <h4 className="font-semibold text-bruma">{s.title}</h4>
                <p className="text-bruma-neutral mt-2 text-sm">{s.desc}</p>
                <small className="text-bruma-neutral/70">{s.stack}</small>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Works Section */}
        <section id="works">
          <h3 className="tracking-[0.3em] text-bruma-neutral uppercase">Selected Works /</h3>
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            {projects.map((p, i) => (
              <motion.a key={i} href={p.href} className="group block overflow-hidden rounded-lg border border-bruma-neutral/20 hover:border-bruma hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-300">
                <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-4 bg-bruma-dark/10">
                  <h4 className="font-medium text-bruma">{p.title}</h4>
                  <div className="text-sm text-bruma-neutral">{p.tag} • {p.year}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-prose">
          <h3 className="tracking-[0.3em] text-bruma-neutral uppercase">About</h3>
          <p className="mt-6 text-bruma-neutral">
            At Bruma, we combine strategic thinking with hands-on design and engineering. We’ve helped early-stage startups validate products, and guided established companies to scale platforms serving millions.
          </p>
        </section>

        {/* Contact Section */}
      <section id="contact" className="py-20">
        <h3 className="text-3xl font-bold text-bruma mb-6">Contact Us</h3>
        <ContactForm />
      </section>

      </main>

      {/* Footer */}
      <footer className="mt-auto px-8 py-6 border-t border-bruma-neutral/20 flex justify-between text-bruma-neutral text-sm">
        <div>© {new Date().getFullYear()} Bruma Consultancy</div>
        <div>LinkedIn · GitHub · Instagram</div>
      </footer>
    </div>
  );
}