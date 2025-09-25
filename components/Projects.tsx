"use client";

import projects from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="group rounded-xl overflow-hidden border border-bruma-neutral/30 hover:border-bruma transition flex flex-col"
        >
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
          />
          <div className="p-6 bg-bruma-dark/60 flex flex-col flex-grow">
            <h4 className="text-xl font-semibold text-white">{project.title}</h4>
            <p className="mt-2 text-sm text-bruma-neutral flex-grow">{project.desc}</p>
            <span className="mt-3 block text-sm text-bruma">{project.stack}</span>
            
            <a
              href={`/projects/${project.slug}`}
              className="mt-4 inline-block px-4 py-2 text-sm font-medium border border-bruma text-bruma rounded hover:bg-bruma hover:text-bruma-dark transition self-start"
            >
              View Case Study →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
