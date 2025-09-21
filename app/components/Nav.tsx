"use client";

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      setSidebarOpen(false); // Close sidebar on mobile after clicking
    }
  };

  return (
    <nav className="navbar">
      <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="logo">🌐</a> {/* Placeholder icon */}
      {!isMobile ? (
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={pathname === '/' && window.location.hash === '#home' ? 'active' : ''}>Home</a></li>
          <li><a href="#industries" onClick={(e) => scrollToSection(e, 'industries')} className={pathname === '/' && window.location.hash === '#industries' ? 'active' : ''}>Industries</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={pathname === '/' && window.location.hash === '#services' ? 'active' : ''}>Services</a></li>
          <li><a href="#framework" onClick={(e) => scrollToSection(e, 'framework')} className={pathname === '/' && window.location.hash === '#framework' ? 'active' : ''}>Framework</a></li>
          <li><a href="#clients" onClick={(e) => scrollToSection(e, 'clients')} className={pathname === '/' && window.location.hash === '#clients' ? 'active' : ''}>Clients</a></li>
          <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')} className={pathname === '/' && window.location.hash === '#team' ? 'active' : ''}>Team</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={pathname === '/' && window.location.hash === '#contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      ) : (
        <>
          <div className="hamburger" onClick={toggleSidebar}>☰</div>
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className={pathname === '/' && window.location.hash === '#home' ? 'active' : ''}>Home</a></li>
              <li><a href="#industries" onClick={(e) => scrollToSection(e, 'industries')} className={pathname === '/' && window.location.hash === '#industries' ? 'active' : ''}>Industries</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={pathname === '/' && window.location.hash === '#services' ? 'active' : ''}>Services</a></li>
              <li><a href="#framework" onClick={(e) => scrollToSection(e, 'framework')} className={pathname === '/' && window.location.hash === '#framework' ? 'active' : ''}>Framework</a></li>
              <li><a href="#clients" onClick={(e) => scrollToSection(e, 'clients')} className={pathname === '/' && window.location.hash === '#clients' ? 'active' : ''}>Clients</a></li>
              <li><a href="#team" onClick={(e) => scrollToSection(e, 'team')} className={pathname === '/' && window.location.hash === '#team' ? 'active' : ''}>Team</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={pathname === '/' && window.location.hash === '#contact' ? 'active' : ''}>Contact</a></li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}