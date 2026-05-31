import type { Metadata } from "next";
import CedarDashboard from "./CedarDashboard";

export const metadata: Metadata = {
  title: "Cedar SIS | Student Information System Demo",
  description:
    "Explore a clean student information system dashboard for enrollment, attendance, schedules, and student support.",
};

export default function CedarDashboardPage() {
  return <CedarDashboard />;
}
