import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-20 max-w-3xl mx-auto">
      <img
        src={project!.img}
        alt={project!.title}
        className="w-full h-72 object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold text-white mb-4">{project!.title}</h1>
      <p className="text-lg text-bruma-neutral mb-6">{project!.desc}</p>
      <span className="inline-block text-bruma bg-bruma-dark/40 px-3 py-1 rounded mb-8">
        {project!.stack}
      </span>

      <div className="mt-12">
        <Link
          href="/#projects"
          className="text-bruma hover:underline font-medium"
        >
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
