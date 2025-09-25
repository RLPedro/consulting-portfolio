"use client";

import services from "@/data/services";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="p-6 bg-bruma-dark/60 rounded-xl border border-bruma-neutral/30 hover:border-bruma transition flex flex-col"
          >
            <h4 className="text-xl font-semibold text-white">{service.title}</h4>
            <p className="mt-2 text-bruma-neutral text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
