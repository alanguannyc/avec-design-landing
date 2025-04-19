"use client";
import { useState } from "react";
import { sendSampleEmail } from "@/app/api/actions";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<any>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendSampleEmail(formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error: unknown) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="w-full  py-20 bg-primary text-light">
      <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="How can we help you?"
          required
          className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="
    w-full
    bg-secondary            /* muted brass default */
    text-light              /* linen-white text */
    font-semibold
    px-6 py-3
    rounded-md
    transition-colors duration-200
    hover:bg-accent         /* subtle lavender‑gray on hover */
    focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50
    disabled:bg-muted       /* stone‑gray when disabled */
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
        >
          {status === "loading" ? "Sending…" : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </section>
  );
}
