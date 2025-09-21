import Image from 'next/image';

export default function Services() {
  return (
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
  );
}