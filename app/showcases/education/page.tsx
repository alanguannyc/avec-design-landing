import type { Metadata } from "next";
import HarborAcademyPage from "./HarborAcademyPage";
import { educationSite } from "../siteData";

export const metadata: Metadata = {
  title: "Harbor Academy | Education Website Design",
  description: educationSite.intro,
};

export default function EducationPage() {
  return <HarborAcademyPage site={educationSite} />;
}
