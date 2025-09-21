export default function About() {
  return (
    <section className="p-4 md:p-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 prose prose-invert">
          <p>
            I am a software developer educated in classical music, currently specializing in tech entrepreneurship and business development. With experience in product management, team leadership, and digitization strategies, I bring a unique interdisciplinary perspective.
          </p>
          <p>Based in Gothenburg, Sweden, I combine technical expertise with a passion for innovative solutions.</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Education</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>MSc in Entrepreneurship and Business Design</strong> - Chalmers University of Technology, 2025-2027</li>
            <li><strong>PhD in Artistic Research (Incomplete)</strong> - Anton Bruckner Privatuniversität, 2020</li>
            <li><strong>BSc and MSc in Early Music</strong> - Schola Cantorum Basiliensis, Musik-Akademie Basel, 2013-2018</li>
            <li><strong>BSc in Early Music</strong> - Escola Superior de Música e Artes do Espetáculo, 2009-2012</li>
          </ul>
        </div>
      </div>
    </section>
  );
}