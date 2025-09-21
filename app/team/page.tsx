import Image from 'next/image';

export default function Team() {
  return (
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
  );
}