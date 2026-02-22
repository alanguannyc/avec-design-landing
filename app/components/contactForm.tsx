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
  return (
    <section id="contact" className="w-full bg-light py-20 text-primary">
      <div className="container mx-auto px-6">
        <div className="section-shell mx-auto max-w-2xl bg-white/85 p-8 md:p-10">
          <h2 className="mb-6 text-center text-3xl font-bold">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              required
              className="w-full rounded-md border border-muted/40 bg-light/60 px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary-soft"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              required
              className="w-full rounded-md border border-muted/40 bg-light/60 px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary-soft"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Your Phone Number"
              required
              className="w-full rounded-md border border-muted/40 bg-light/60 px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary-soft"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="How can we help you?"
              required
              className="w-full rounded-md border border-muted/40 bg-light/60 px-4 py-3 text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-secondary-soft"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-light transition-colors duration-200 hover:bg-surface-soft focus:outline-none focus:ring-2 focus:ring-secondary-soft disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50/90 px-4 py-3 text-emerald-800">
                <p className="flex items-center justify-center gap-2 text-sm font-semibold">
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Message sent successfully
                </p>
                <p className="mt-1 text-center text-xs text-emerald-700/90">
                  We&apos;ll get back to you shortly.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="rounded-lg border border-rose-200 bg-rose-50/90 px-4 py-3 text-rose-800">
                <p className="text-center text-sm font-semibold">
                  Failed to send message. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
