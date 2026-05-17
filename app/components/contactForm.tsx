"use client";
import { useState } from "react";
import { sendSampleEmail, sendSuccessEmail } from "@/app/actions";

export default function ContactForm() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  type FormStatus = "loading" | "success" | "error" | null;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendSampleEmail(formData);
      await sendSuccessEmail(formData.email);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
    } catch (error: unknown) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-lg border border-secondary/12 bg-primary/60 px-4 py-3 text-[14px] text-light placeholder:text-light/25 focus:border-secondary/40 focus:outline-none focus:ring-1 focus:ring-secondary/30 transition";

  return (
    <section id="contact" className="py-24 text-light">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
              Get in Touch
            </p>
            <h2 className="text-3xl font-bold text-light md:text-4xl">
              Let's build something together.
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your Name"
                required
                className={inputClass}
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                required
                className={inputClass}
              />
            </div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
              className={inputClass}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your project or the workflow you want to automate..."
              required
              className={inputClass}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-secondary py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_24px_-10px_rgba(192,138,66,0.4)] transition hover:bg-secondary-soft disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-center">
                <p className="text-[13px] font-semibold text-emerald-400">
                  Message sent — we'll be in touch shortly.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="rounded-lg border border-accent/20 bg-accent/8 px-4 py-3 text-center">
                <p className="text-[13px] font-semibold text-accent">
                  Failed to send. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
