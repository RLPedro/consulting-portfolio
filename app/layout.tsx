// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import './globals.css';

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   return (
//     <html lang="en">
//       <body style={{ scrollSnapType: 'y mandatory' }}>
//         <nav className={`navbar ${scrolled ? 'scrolled' : 'full'}`}>
//           <div className="logo">Your Brand</div>
//           {!scrolled && (
//             <ul className="nav-links">
//               <li><Link href="#home" className={pathname === '/' && window.location.hash === '#home' ? 'active' : ''}>Home</Link></li>
//               <li><Link href="#industries" className={pathname === '/' && window.location.hash === '#industries' ? 'active' : ''}>Industries</Link></li>
//               <li><Link href="#services" className={pathname === '/' && window.location.hash === '#services' ? 'active' : ''}>Services</Link></li>
//               <li><Link href="#framework" className={pathname === '/' && window.location.hash === '#framework' ? 'active' : ''}>Framework</Link></li>
//               <li><Link href="#clients" className={pathname === '/' && window.location.hash === '#clients' ? 'active' : ''}>Clients</Link></li>
//               <li><Link href="#team" className={pathname === '/' && window.location.hash === '#team' ? 'active' : ''}>Team</Link></li>
//               <li><Link href="#contact" className={pathname === '/' && window.location.hash === '#contact' ? 'active' : ''}>Contact</Link></li>
//             </ul>
//           )}
//           {scrolled && (
//             <>
//               <div className="hamburger" onClick={toggleSidebar}>☰</div>
//               <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//                 <ul>
//                   <li><Link href="#home" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#home' ? 'active' : ''}>Home</Link></li>
//                   <li><Link href="#industries" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#industries' ? 'active' : ''}>Industries</Link></li>
//                   <li><Link href="#services" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#services' ? 'active' : ''}>Services</Link></li>
//                   <li><Link href="#framework" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#framework' ? 'active' : ''}>Framework</Link></li>
//                   <li><Link href="#clients" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#clients' ? 'active' : ''}>Clients</Link></li>
//                   <li><Link href="#team" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#team' ? 'active' : ''}>Team</Link></li>
//                   <li><Link href="#contact" onClick={toggleSidebar} className={pathname === '/' && window.location.hash === '#contact' ? 'active' : ''}>Contact</Link></li>
//                 </ul>
//               </div>
//             </>
//           )}
//         </nav>
//         {children}
//       </body>
//     </html>
//   );
// }

// import Nav from './components/Nav';

"use client";

import dynamic from 'next/dynamic';
import './globals.css';

// Dynamically import Nav as a client-side component
const Nav = dynamic(() => import('./components/Nav'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ scrollSnapType: 'y mandatory' }}>
        <Nav />
        {children}
      </body>
    </html>
  );
}