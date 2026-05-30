import Head from "next/head";

import Hero from "@/app/components/hero";
import StatsSection from "@/app/components/statsSection";
import ScrollServices from "@/app/components/scrollServices";
import ScrollFeatures from "@/app/components/scrollFeatures";
import CTA from "@/app/components/CTA";
import Projects from "./components/projects";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import TrustedBy from "./components/trustedBy";
import HyperframeSkills from "./components/hyperframeSkills";
// app/page.tsx
export const metadata = {
  title: "AVEC Design | Digital Solutions & AI Automations",
  description:
    "Elevate your brand with website management, bespoke design, custom applications, digital marketing, and AI-driven automations by AVEC Design.",
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

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <ScrollServices />

        {/* Stats Section */}
        <StatsSection />

        {/* AI Agents Section */}
        <ScrollFeatures />

        {/* Work Showcase */}

        <Projects />

        {/* Social Proof */}
        <TrustedBy />

        {/* Skills */}
        <HyperframeSkills />

        {/* CTA Section */}
        <CTA />
        {/* Contact Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
