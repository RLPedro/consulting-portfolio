export default function Portfolio() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Portfolio & Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-200 p-4 hover:bg-base-300 transition-shadow">
          <h3 className="card-title text-xl md:text-2xl">REMONDIS SWEDEN AB</h3>
          <p className="text-base-content/80">Roles: Product Owner, Business Analyst, Project Management.</p>
        </div>
        <div className="card bg-base-200 p-4 hover:bg-base-300 transition-shadow">
          <h3 className="card-title text-xl md:text-2xl">POLESTAR</h3>
          <p className="text-base-content/80">Roles: Business Analyst, Project Management, Digital Initiative Lead.</p>
        </div>
        <div className="card bg-base-200 p-4 hover:bg-base-300 transition-shadow">
          <h3 className="card-title text-xl md:text-2xl">VOLVO CARS</h3>
          <p className="text-base-content/80">Roles: Innovation Lead, Project Management, iOS Development.</p>
        </div>
      </div>
    </section>
  );
}