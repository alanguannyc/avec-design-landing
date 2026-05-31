import Image from "next/image";
import Link from "next/link";
import type { WebsiteDemo } from "../siteData";

const sectionPad = "px-5 py-20 md:px-8 md:py-28";
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

function DemoNav({ site, dark = false }: { site: WebsiteDemo; dark?: boolean }) {
  return (
    <header className={`sticky top-0 z-20 border-b backdrop-blur-xl ${dark ? "border-white/15 bg-[#12243a]/90 text-white" : `${site.theme.border} ${site.theme.nav}`}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href={site.href} className={`${site.serif ? "font-display" : ""} whitespace-nowrap text-xl font-semibold tracking-tight`}>
          {site.brand}
        </Link>
        <div className="hidden items-center gap-6 text-sm font-semibold md:flex">
          {site.nav.map((item) => <a key={item} href="#about" className="transition-opacity hover:opacity-60">{item}</a>)}
        </div>
        <a href="#contact" className={`${focus} whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-opacity hover:opacity-80 ${dark ? "bg-white text-[#12243a]" : `${site.theme.button} ${site.theme.buttonText}`}`}>
          {site.primaryCta}
        </a>
      </nav>
    </header>
  );
}

function DemoFooter({ site, dark = false }: { site: WebsiteDemo; dark?: boolean }) {
  return (
    <footer className={`border-t ${dark ? "border-white/15 bg-[#12243a] text-white" : `${site.theme.border} ${site.theme.page}`}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs opacity-70 sm:flex-row sm:justify-between md:px-8">
        <p>{site.brand}</p>
        <Link href="/showcases" className="font-semibold transition-opacity hover:opacity-60">Back to AVEC showcases</Link>
      </div>
    </footer>
  );
}

function TestimonialStrip({ site, dark = false }: { site: WebsiteDemo; dark?: boolean }) {
  return (
    <section aria-label="Testimonials" className={`overflow-hidden border-y ${dark ? "border-white/15" : site.theme.border}`}>
      <div className="mx-auto flex max-w-7xl snap-x gap-4 overflow-x-auto px-5 py-10 md:px-8">
        {[{ quote: site.quote, by: site.quoteBy }, ...site.testimonials].map((item) => (
          <blockquote key={item.by} className={`min-w-[82vw] snap-start p-6 sm:min-w-[410px] ${dark ? "bg-white/8" : site.theme.surface}`}>
            <p className={`${site.serif ? "font-display text-2xl" : "text-lg"} leading-snug`}>&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-5 text-xs font-bold opacity-65">{item.by}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function ClosingCta({ site, title, dark = false }: { site: WebsiteDemo; title: string; dark?: boolean }) {
  return (
    <section id="contact" className={dark ? "bg-[#12243a] text-white" : `${site.theme.button} ${site.theme.buttonText}`}>
      <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div>
          <h2 className={`${site.serif ? "font-display" : ""} max-w-3xl text-[2.75rem] font-semibold leading-[0.96] tracking-tight md:text-[4.6rem]`}>{title}</h2>
          <p className="mt-4 max-w-lg text-sm leading-6 opacity-75">{site.footerLine}</p>
        </div>
        <a href="mailto:hello@example.com" className={`${focus} w-fit whitespace-nowrap rounded-full bg-white px-6 py-3 text-sm font-bold text-[#12243a] transition-opacity hover:opacity-85`}>
          {site.primaryCta}
        </a>
      </div>
    </section>
  );
}

export function MedicalWebsite({ site }: { site: WebsiteDemo }) {
  return (
    <main className={`${site.theme.page} ${site.theme.text} min-h-[100dvh]`}>
      <DemoNav site={site} />
      <section className="mx-auto grid min-h-[calc(100dvh-72px)] max-w-7xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:px-8">
        <div>
          <h1 className="max-w-xl text-[3.5rem] font-bold leading-[0.96] tracking-tight md:text-[5.8rem]">{site.headline}</h1>
          <p className={`${site.theme.muted} mt-6 max-w-lg text-lg leading-8`}>{site.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#contact" className={`${focus} ${site.theme.button} ${site.theme.buttonText} rounded-full px-6 py-3 text-sm font-bold`}>{site.primaryCta}</a><a href="#care" className={`${focus} rounded-full border ${site.theme.border} px-6 py-3 text-sm font-bold`}>{site.secondaryCta}</a></div>
        </div>
        <div className="relative min-h-[370px] overflow-hidden rounded-[1.5rem] md:min-h-[570px]"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div>
      </section>
      <section id="care" className={`${site.theme.button} ${site.theme.buttonText}`}>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:px-8">{site.stats.map((stat) => <div key={stat.label}><p className="text-2xl font-bold">{stat.value}</p><p className="mt-1 text-sm opacity-70">{stat.label}</p></div>)}</div>
      </section>
      <section id="about" className={`${sectionPad} mx-auto max-w-7xl`}>
        <h2 className="max-w-3xl text-[3rem] font-bold leading-none tracking-tight md:text-[5rem]">{site.about.title}</h2>
        <p className={`${site.theme.muted} mt-6 max-w-2xl text-lg leading-8`}>{site.about.body}</p>
        <div className="mt-12 grid gap-4 md:grid-cols-[1.2fr_0.9fr_0.9fr]">{site.slides.map((slide) => <article key={slide.title} className={`${site.theme.surface} rounded-[1.25rem] border ${site.theme.border} p-6`}><h3 className="text-xl font-bold">{slide.title}</h3><p className={`${site.theme.muted} mt-3 text-sm leading-6`}>{slide.body}</p><a href="#contact" className={`${site.theme.accentText} mt-6 inline-block text-sm font-bold`}>Learn more</a></article>)}</div>
      </section>
      <section className={`${site.theme.surface} ${sectionPad}`}>
        <div className="mx-auto max-w-7xl"><h2 className="max-w-2xl text-[3rem] font-bold leading-none tracking-tight md:text-[4.5rem]">Patients deserve a clear next step.</h2><p className={`${site.theme.muted} mt-6 max-w-xl leading-7`}>{site.spotlight.body}</p></div>
      </section>
      <TestimonialStrip site={site} />
      <ClosingCta site={site} title="Make your first visit simple." />
      <DemoFooter site={site} />
    </main>
  );
}
