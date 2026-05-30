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
    "w-full rounded-lg border border-secondary/15 bg-primary/60 px-4 py-3 text-[14px] text-light placeholder:text-light/20 focus:border-secondary/50 focus:outline-none focus:ring-1 focus:ring-secondary/30 transition";

  const labelClass = "block mb-1.5 text-[12px] font-medium uppercase tracking-[0.12em] text-light/40";

  return (
    <section id="contact" className="relative z-10 bg-[#060c16] py-24 text-light">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12">
            <h2 className="font-display text-[2.8rem] font-light leading-[1.05] text-light md:text-[4rem]">
              Let's build something together.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-light/40">
              Tell us about your project. We'll follow up within one business day.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@company.com"
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+1 (000) 000-0000"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Project details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Describe your project or the workflow you want to automate..."
                required
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-lg bg-secondary py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_24px_-10px_rgba(192,138,66,0.35)] transition hover:bg-secondary-soft active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-center">
                <p className="text-[13px] font-semibold text-emerald-400">
                  Message sent. We'll be in touch shortly.
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
