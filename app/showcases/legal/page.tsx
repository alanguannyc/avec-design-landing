import type { Metadata } from "next";
import AlderFinchPage from "./AlderFinchPage";
import { legalSite } from "../siteData";

export const metadata: Metadata = {
  title: "Alder Finch | Legal Website Design",
  description: legalSite.intro,
};

export default function LegalPage() {
  return <AlderFinchPage site={legalSite} />;
}
