// components/Projects.tsx
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
    <section className="bg-dark text-light py-16">
      <div className="container mx-auto px-6 flex flex-col gap-16 lg:flex-row lg:gap-16">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col md:flex-row items-center gap-8"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full md:w-1/2 rounded-lg border-2 border-secondary"
            />
            <div className="md:w-1/2">
              <h4 className="text-2xl font-bold text-secondary">{p.title}</h4>
              <p className="mt-4 text-gray-300">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
