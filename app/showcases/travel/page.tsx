import type { Metadata } from "next";
import NorthlinePage from "./NorthlinePage";
import { travelSite } from "../siteData";

export const metadata: Metadata = {
  title: "Northline | Travel Website Design",
  description: travelSite.intro,
};

export default function TravelPage() {
  return <NorthlinePage site={travelSite} />;
}
