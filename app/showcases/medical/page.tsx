import type { Metadata } from "next";
import { medicalSite } from "../siteData";
import NorthstarHealthPage from "./NorthstarHealthPage";

export const metadata: Metadata = {
  title: "Northstar Health | Medical Website Design",
  description: medicalSite.intro,
};

export default function MedicalPage() {
  return <NorthstarHealthPage />;
}
