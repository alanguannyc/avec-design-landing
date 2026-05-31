"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ShowcaseCard, ShowcaseServiceType } from "./siteData";

type ServiceType = "all" | ShowcaseServiceType;

const serviceTypes: { value: ServiceType; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "website", label: "Websites" },
  { value: "application", label: "Applications" },
  { value: "ai", label: "AI systems" },
  { value: "marketing", label: "Marketing" },
];

export default function ShowcaseGallery({ showcases }: { showcases: ShowcaseCard[] }) {
  const [selectedType, setSelectedType] = useState<ServiceType>("all");

  const filteredShowcases = useMemo(
    () =>
      selectedType === "all"
        ? showcases
        : showcases.filter((showcase) => showcase.serviceType === selectedType),
    [selectedType, showcases],
  );

  return (
    <section className="container mx-auto px-6 pb-24 md:pb-32" aria-labelledby="showcase-filter-title">
      <div className="mb-8 flex flex-col gap-5 border-y border-secondary/15 py-5 md:mb-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 id="showcase-filter-title" className="text-sm font-semibold text-light">
            Filter by service
          </h2>
          <p className="mt-1 text-xs text-light/45" aria-live="polite">
            {filteredShowcases.length} {filteredShowcases.length === 1 ? "showcase" : "showcases"}
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filter showcases by service type">
          {serviceTypes.map((service) => {
            const selected = selectedType === service.value;

            return (
              <button
                key={service.value}
                type="button"
                aria-pressed={selected}
                onClick={() => setSelectedType(service.value)}
                className={`touch-manipulation cursor-pointer rounded border px-4 py-2 text-xs font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-[#07101b] ${
                  selected
                    ? "border-secondary bg-secondary text-[#07101b]"
                    : "border-secondary/20 text-light/65 hover:border-secondary/55 hover:text-light"
                }`}
              >
                {service.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredShowcases.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {filteredShowcases.map((site, index) => (
            <Link
              key={site.href}
              href={site.href}
              className={`group relative isolate min-h-[440px] touch-manipulation overflow-hidden rounded-[1.4rem] border border-secondary/15 bg-[#0a1624] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"
              }`}
            >
              <Image
                src={site.heroImage}
                alt={site.heroAlt}
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101b] via-[#06101b]/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary-soft">
                  {site.industry}
                </p>
                <h3 className="mt-3 font-display text-[2.5rem] font-light leading-none text-light">
                  {site.brand}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-light/60">
                  {site.headline}
                </p>
                <p className="mt-5 text-sm font-semibold text-secondary-soft transition-colors group-hover:text-light">
                  Open showcase
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-secondary/15 bg-[#0a1624] px-6 py-16 md:px-10 md:py-20">
          <p className="max-w-xl font-display text-[2.6rem] font-light leading-[0.96] text-light md:text-[4rem]">
            More selected work is coming soon.
          </p>
          <p className="mt-5 max-w-lg text-sm leading-6 text-light/50">
            We are preparing examples for this service type. Choose another filter to explore the current collection.
          </p>
          <button
            type="button"
            onClick={() => setSelectedType("all")}
            className="mt-7 touch-manipulation cursor-pointer rounded border border-secondary/30 px-4 py-2 text-sm font-semibold text-secondary-soft transition-colors duration-200 hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            Show all work
          </button>
        </div>
      )}
    </section>
  );
}
