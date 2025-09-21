import Image from 'next/image';

export default function Industries() {
  return (
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
  );
}