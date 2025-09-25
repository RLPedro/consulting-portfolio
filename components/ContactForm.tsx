"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="px-4 py-2 rounded border border-bruma-neutral bg-bruma-dark text-white"
      />
      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="px-4 py-2 rounded border border-bruma-neutral bg-bruma-dark text-white"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        required
        rows={6}
        className="px-4 py-2 rounded border border-bruma-neutral bg-bruma-dark text-white"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-bruma text-bruma-dark font-bold rounded hover:bg-bruma/80 transition"
      >
        Send Message
      </button>
      {status && <p className="mt-2 text-sm text-bruma-neutral">{status}</p>}
    </form>
  );
}
