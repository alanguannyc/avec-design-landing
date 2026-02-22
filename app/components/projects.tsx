// components/Projects.tsx
import Image from "next/image";

const projects = [
  {
    title: "Student Information System",
    img: "/images/student-information-system.png",
    desc: "A robust portal for student records, grades, and attendance—all in one place.",
  },
  {
    title: "AI Phone Call Assistant",
    img: "/images/ai-phone-call-assistant.png",
    desc: "Automated outbound calling with natural‑language understanding and scheduling.",
  },
];

export default function Projects() {
  return (
    <section id="work" className="bg-primary py-20 text-light">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-light">
          Selected Work
        </h2>
        <div className="flex flex-col gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="section-shell flex flex-col items-center gap-8 border-secondary-soft/30 bg-surface/80 p-6 md:flex-row"
          >
            <div className="w-full md:w-1/2">
              <Image
                src={p.img}
                alt={p.title}
                width={1200}
                height={900}
                className="h-auto w-full rounded-lg border border-secondary-soft/55"
              />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-secondary-soft">
                {p.title}
              </h4>
              <p className="mt-4 text-light/80">{p.desc}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
