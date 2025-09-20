export default function Skills() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p>Phone: +46 70 042 35 97</p>
          <p>Email: ricardoleitaopedro@gmail.com</p>
          <p>Location: Gothenburg, Sweden</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Technical & Professional Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-medium">Technical</h4>
              <ul className="list-disc pl-5">
                <li>JavaScript, TypeScript, Python</li>
                <li>React, Redux, Node.js, Django</li>
                <li>SQL, MongoDB, gRPC</li>
                <li>Git, Docker, Jest</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium">Professional</h4>
              <ul className="list-disc pl-5">
                <li>Product Management</li>
                <li>Team Leadership</li>
                <li>Digital Strategy</li>
                <li>Effective Communication</li>
              </ul>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mt-4">Languages</h3>
          <ul className="list-disc pl-5">
            <li>Portuguese (Native)</li>
            <li>English, French, Spanish (Fluent)</li>
            <li>Italian (Intermediate)</li>
            <li>German, Swedish (Beginner)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}