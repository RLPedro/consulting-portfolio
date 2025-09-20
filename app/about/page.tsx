export default function About() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>Software engineer specialized in full-stack web development... (paste your CV profile)</p>
      <h3 className="text-2xl mt-6">Skills</h3>
      <ul className="grid grid-cols-2 gap-4">
        <li>JavaScript, TypeScript, Python</li>
        {/* List all from CV */}
      </ul>
    </section>
  );
}