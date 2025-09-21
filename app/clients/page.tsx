import Image from 'next/image';

export default function Clients() {
  return (
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
  );
}