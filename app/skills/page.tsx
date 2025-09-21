export default function Team() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-200 p-4 hover:bg-base-300 transition-shadow">
          <h3 className="card-title text-xl md:text-2xl">Ricardo Leitão Pedro</h3>
          <p className="text-base-content/80">Digital Consultant & Developer</p>
          <p className="text-base-content/80">Email: ricardoleitaopedro@gmail.com</p>
          <a href="https://linkedin.com/in/yourprofile" className="link link-primary">LinkedIn</a>
        </div>
        {/* Add more team members as needed */}
      </div>
    </section>
  );
}