import Head from "next/head";

import Hero from "@/app/components/hero";
import Services from "@/app/components/services";
import CTA from "@/app/components/CTA";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
// app/page.tsx
export const metadata = {
  title: "AVEC Design | Digital Solutions & AI Automations",
  description: "…your description here…",
};
export default function HomePage() {
  return (
    <>
      <Head>
        <title>AVEC Design | Digital Solutions & AI Automations</title>
        <meta
          name="description"
          content="Elevate your brand with website management, bespoke design, custom applications, digital marketing, and AI-driven automations by AVEC Design."
        />
      </Head>

      <Navbar />

      <main className="mt-12">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />
        {/* Work Showcase */}

        <Projects />
        {/* CTA Section */}

        <CTA />
        {/* Contact Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
