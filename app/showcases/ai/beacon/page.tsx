import type { Metadata } from "next";
import BeaconAgentDemo from "./BeaconAgentDemo";

export const metadata: Metadata = {
  title: "Beacon SEO Agent | AI Workflow Demo",
  description:
    "Explore an AI agent workflow demo for website monitoring, technical SEO checks, content analysis, and prioritized suggestions.",
};

export default function BeaconAgentPage() {
  return <BeaconAgentDemo />;
}
