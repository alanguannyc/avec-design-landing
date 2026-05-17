const projects = [
  {
    title: "Student Information System",
    img: "/images/student-information-system.png",
    desc: "A robust portal for student records, grades, and attendance — all in one place.",
    tag: "Web Application",
  },
  {
    title: "AI Phone Call Assistant",
    img: "/images/ai-phone-call-assistant.png",
    desc: "Automated outbound calling with natural-language understanding and scheduling.",
    tag: "AI Agent",
  },
  {
    title: "Hotel Association of New York City",
    img: null,
    href: "https://hanyc.org",
    url: "hanyc.org",
    logo: "https://hanyc.org/wp-content/uploads/2018/09/01_PMS_Logo_HANYC.png",
    desc: "Website management, performance optimization, and content operations for NYC's premier hotel industry association.",
    tag: "Website",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-surface/30 py-24 text-light">
      <div className="container mx-auto px-6">
        <div className="mb-14">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold text-light md:text-4xl">
            What We've Built
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-center gap-10 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Visual */}
              <div className="w-full md:w-3/5">
                {"href" in p && p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-secondary/15 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex items-center gap-2 border-b border-secondary/10 bg-primary/70 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-accent/50" />
                      <span className="h-2 w-2 rounded-full bg-secondary/40" />
                      <span className="h-2 w-2 rounded-full bg-secondary-soft/30" />
                      <div className="ml-2 flex-1 rounded border border-secondary/10 bg-primary/60 px-3 py-1 font-mono text-[11px] text-light/30">
                        {"url" in p ? p.url : ""}
                      </div>
                      <span className="text-[11px] text-light/25 transition group-hover:text-secondary-soft">↗</span>
                    </div>
                    <div className="flex h-40 items-center justify-center bg-surface/80">
                      {"logo" in p && p.logo && (
                        <img
                          src={p.logo}
                          alt={p.title}
                          className="max-h-14 w-auto max-w-[200px] object-contain opacity-50 brightness-0 invert filter transition group-hover:opacity-80"
                        />
                      )}
                    </div>
                  </a>
                ) : (
                  <img
                    src={p.img!}
                    alt={p.title}
                    className="w-full rounded-xl border border-secondary/15 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.5)]"
                  />
                )}
              </div>

              {/* Copy */}
              <div className="w-full md:w-2/5">
                <span className="mb-3 inline-block rounded-full border border-secondary/20 bg-secondary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-secondary">
                  {p.tag}
                </span>
                <h3 className="mb-3 text-xl font-bold text-light">{p.title}</h3>
                <p className="text-[14px] leading-relaxed text-light/50">{p.desc}</p>
                {"href" in p && p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block text-[13px] font-semibold text-secondary-soft underline-offset-4 hover:underline"
                  >
                    Visit Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
