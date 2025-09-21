import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
"use client";

import Image from 'next/image';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    e.preventDefault();
    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, publicKey)
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <div>
      <Analytics />
      <SpeedInsights />
      {/* Hero Section */}
      <section className="hero section" id="home">
        <div className="brand-name">Your Brand</div>
        <h1>Your Consultancy</h1>
        <p>Driving digital innovation for your success</p>
        <p>Transforming industries with cutting-edge solutions</p>
        <a href="#services" className="btn" onClick={(e) => handleScrollToSection(e, 'services')}>Explore Services</a>
      </section>

      {/* Industries Section */}
      <section className="section" id="industries">
        <h2>Industries We Work With</h2>
        <div className="cards-grid">
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Recycling" width={60} height={60} />
            <h3>Recycling</h3>
            <ul>
              <li>Expertise in legislation, transactions, and yard operations</li>
              <li>Digital transformation with portals and B2B apps</li>
              <li>New opportunities and enhanced efficiency</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="B2B" width={60} height={60} />
            <h3>B2B Industries</h3>
            <ul>
              <li>Designing digital platforms and e-commerce systems</li>
              <li>Expertise in system architecture</li>
              <li>New revenue through digitalization</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1600585154739-6a8e7f0c8e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Automotive" width={60} height={60} />
            <h3>Automotive</h3>
            <ul>
              <li>Bridging technology and strategy</li>
              <li>Insights from industry shifts</li>
              <li>Proven change program success</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <h2>Our Services</h2>
        <div className="cards-grid">
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1506784897867-89166cc1e73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Consulting" width={60} height={60} />
            <h3>Ongoing Consultancy</h3>
            <p>Continuous support, hourly rates, flexible scope.</p>
            <ul>
              <li>Roles: Product Owner, Project Manager, IT Architect</li>
              <li>Price: From 1000 SEK / hour</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Efficiency" width={60} height={60} />
            <h3>Digital Efficiency</h3>
            <p>Rapid analysis for waste reduction.</p>
            <ul>
              <li>Process mapping and recommendations</li>
              <li>Price: From 125,000 SEK</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Implementation" width={60} height={60} />
            <h3>Implementation Projects</h3>
            <p>Full projects from concept to roll-out.</p>
            <ul>
              <li>Development and continuous improvement</li>
              <li>Price upon request</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section className="framework section" id="framework">
        <h2>Digital Sales Framework</h2>
        <p>Engage customers with personalized experiences, maximizing growth.</p>
        <p>Enhance efficiency and sales with integrated digital efforts.</p>
        <div className="framework-content">
          <div className="framework-item">
            <h3>Attract</h3>
            <p>Draw in customers digitally.</p>
          </div>
          <div className="framework-item">
            <h3>Customer Journey</h3>
            <p>Streamline the sales process.</p>
          </div>
          <div className="framework-item">
            <h3>Customer Success</h3>
            <p>Ensure ongoing support.</p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section" id="clients">
        <h2>Some of Our Clients</h2>
        <div className="cards-grid">
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1600585154962-6130dc73e26d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Remondis" width={60} height={60} />
            <h3>REMONDIS SWEDEN AB</h3>
            <ul>
              <li>Product Owner</li>
              <li>Business Analyst</li>
              <li>Project Management</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1600585154739-6a8e7f0c8e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Polestar" width={60} height={60} />
            <h3>POLESTAR</h3>
            <ul>
              <li>Business Analyst</li>
              <li>Project Management</li>
              <li>Digital Initiative Lead</li>
            </ul>
          </div>
          <div className="card">
            <Image src="https://images.unsplash.com/photo-1600585154204-1c2b9567f2f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Volvo" width={60} height={60} />
            <h3>VOLVO CARS</h3>
            <ul>
              <li>Innovation Lead</li>
              <li>Project Management</li>
              <li>iOS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" id="team">
        <h2>The Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&q=80" alt="Fredrik" width={180} height={180} />
            <h3>Fredrik Angin</h3>
            <p>Managing Director</p>
            <p>fredrik@yourdomain.com</p>
            <a href="#">LinkedIn</a>
          </div>
          <div className="team-card">
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&q=80" alt="Helena" width={180} height={180} />
            <h3>Helena Strahl</h3>
            <p>Digital Management Consultant</p>
            <p>helena@yourdomain.com</p>
            <a href="#">LinkedIn</a>
          </div>
          <div className="team-card">
            <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=180&q=80" alt="Johan" width={180} height={180} />
            <h3>Johan Eriksson</h3>
            <p>Technology Management Consultant</p>
            <p>johan@yourdomain.com</p>
            <a href="#">LinkedIn</a>
          </div>
          {/* Add remaining team members */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section" id="contact">
        <h2>Contact Us</h2>
        <form style={{ maxWidth: '600px', margin: '0 auto' }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
          {status && <p>{status}</p>}
        </form>
      </section>
    </div>
  );
}