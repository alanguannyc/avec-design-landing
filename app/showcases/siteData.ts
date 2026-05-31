export type ShowcaseServiceType = "website" | "application" | "ai" | "marketing";

export type ShowcaseCard = {
  href: string;
  serviceType: ShowcaseServiceType;
  industry: string;
  brand: string;
  heroImage: string;
  heroAlt: string;
  headline: string;
};

export type WebsiteDemo = {
  href: string;
  serviceType: ShowcaseServiceType;
  industry: string;
  brand: string;
  nav: string[];
  heroImage: string;
  heroAlt: string;
  headline: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  sectionTitle: string;
  sectionIntro: string;
  features: { title: string; body: string }[];
  spotlight: { label: string; title: string; body: string };
  about: { title: string; body: string; detail: string };
  slides: { title: string; body: string }[];
  testimonials: { quote: string; by: string }[];
  stats: { value: string; label: string }[];
  quote: string;
  quoteBy: string;
  footerLine: string;
  theme: {
    page: string;
    nav: string;
    text: string;
    muted: string;
    accent: string;
    accentText: string;
    button: string;
    buttonText: string;
    surface: string;
    border: string;
  };
  serif: boolean;
};

export const websiteDemos: WebsiteDemo[] = [
  {
    href: "/showcases/education",
    serviceType: "website",
    industry: "Education",
    brand: "Harbor Academy",
    nav: ["Learning", "Community", "Admissions"],
    heroImage: "/images/websites/harbor-academy-hero.png",
    heroAlt: "Students collaborating on a science project in a bright classroom",
    headline: "Curiosity has a place to grow.",
    intro: "A small school with big questions, strong relationships, and room for every student to be known.",
    primaryCta: "Visit Harbor",
    secondaryCta: "Explore admissions",
    sectionTitle: "Learning that starts with wonder.",
    sectionIntro: "From the lab to the garden, students learn by asking better questions and making something real.",
    features: [
      { title: "Small by design", body: "Teachers know each learner well enough to challenge them with care." },
      { title: "Built for discovery", body: "Projects connect science, writing, art, and the world outside the classroom." },
      { title: "A grounded community", body: "Families, educators, and students build a culture of attention and belonging." },
    ],
    spotlight: {
      label: "Admissions",
      title: "See what a school day feels like.",
      body: "Meet the people, visit the classrooms, and ask the questions that matter to your family.",
    },
    about: {
      title: "A school built around attention.",
      body: "Harbor is intentionally small. Teachers have the time to notice how each student thinks, where they hesitate, and what pulls them forward.",
      detail: "Our classrooms pair ambitious academics with the confidence to ask questions, test ideas, and try again.",
    },
    slides: [
      { title: "Make it tangible", body: "Build, test, plant, perform, and publish. Every subject has a life beyond the page." },
      { title: "Learn in company", body: "Students practice listening closely, contributing clearly, and making room for another point of view." },
      { title: "Follow the question", body: "A strong question can move through science, writing, design, and the neighborhood outside school." },
    ],
    testimonials: [
      { quote: "Our son comes home talking about what he is thinking, not only what he finished.", by: "Nadia Brooks, parent" },
      { quote: "Harbor made the transition to middle school feel thoughtful, personal, and genuinely exciting.", by: "Elliot Park, parent" },
    ],
    stats: [
      { value: "14", label: "students in a typical class" },
      { value: "K-8", label: "one connected learning journey" },
      { value: "1:7", label: "faculty to student ratio" },
    ],
    quote: "Harbor gave our daughter the confidence to follow her questions and the support to go further.",
    quoteBy: "Marisol Vega, parent",
    footerLine: "Learning with purpose in every classroom.",
    theme: {
      page: "bg-[#f7f1e7]",
      nav: "bg-[#f7f1e7]/90",
      text: "text-[#172c38]",
      muted: "text-[#52636b]",
      accent: "bg-[#d9914b]",
      accentText: "text-[#b66c2c]",
      button: "bg-[#183b4a]",
      buttonText: "text-[#fffaf1]",
      surface: "bg-[#fffaf1]",
      border: "border-[#d9cdbd]",
    },
    serif: false,
  },
  {
    href: "/showcases/travel",
    serviceType: "website",
    industry: "Travel",
    brand: "Northline",
    nav: ["Journeys", "Places", "Journal"],
    heroImage: "/images/websites/northline-travel-hero.png",
    heroAlt: "Stone terrace overlooking a quiet Mediterranean coastline at golden hour",
    headline: "Travel, made personal.",
    intro: "Thoughtful journeys for people who want a place to unfold slowly, with every detail handled.",
    primaryCta: "Plan a journey",
    secondaryCta: "Browse places",
    sectionTitle: "A slower way to see more.",
    sectionIntro: "We build private journeys around the texture of a place, not a checklist of attractions.",
    features: [
      { title: "Stay somewhere memorable", body: "Independent hotels, quiet villas, and rooms with a real sense of place." },
      { title: "Follow local knowledge", body: "Guides, tables, and small detours chosen for the way you like to travel." },
      { title: "Leave room for surprise", body: "A clear plan with enough space for the moments you could never schedule." },
    ],
    spotlight: {
      label: "Featured journey",
      title: "The quieter side of the Mediterranean.",
      body: "Twelve days of coastal drives, hill towns, local kitchens, and long afternoons near the water.",
    },
    about: {
      title: "The right pace changes everything.",
      body: "Northline plans private journeys with a point of view. We choose fewer places, stay longer, and leave room for the day to surprise you.",
      detail: "Every itinerary begins with a conversation about how you actually want to spend your time.",
    },
    slides: [
      { title: "Coast", body: "Swim from quiet coves, drive the headlands, and stay where the evening light reaches the table." },
      { title: "Table", body: "A market morning, a vineyard lunch, a small restaurant worth crossing town for." },
      { title: "Town", body: "Walkable days, local guides, and an unhurried route through places with a life of their own." },
    ],
    testimonials: [
      { quote: "The pacing was perfect. We saw a great deal without ever feeling managed by the itinerary.", by: "Maya Chen, traveler" },
      { quote: "Every recommendation felt personal, from the small hotel to the final dinner by the water.", by: "Theo Bennett, traveler" },
    ],
    stats: [
      { value: "1:1", label: "planning with a travel designer" },
      { value: "24h", label: "support while you are away" },
      { value: "40+", label: "places known in depth" },
    ],
    quote: "Northline found the places we would never have discovered and left the trip feeling entirely our own.",
    quoteBy: "Claire and David Morgan, travelers",
    footerLine: "Journeys composed around the way you travel.",
    theme: {
      page: "bg-[#f4f0e8]",
      nav: "bg-[#f4f0e8]/90",
      text: "text-[#19334a]",
      muted: "text-[#63717a]",
      accent: "bg-[#ba764e]",
      accentText: "text-[#a45f3c]",
      button: "bg-[#19334a]",
      buttonText: "text-[#fffaf4]",
      surface: "bg-[#fbf8f2]",
      border: "border-[#d8cec0]",
    },
    serif: true,
  },
  {
    href: "/showcases/medical",
    serviceType: "website",
    industry: "Medical",
    brand: "Northstar Health",
    nav: ["Care", "Clinicians", "Locations"],
    heroImage: "/images/websites/northstar-health-hero.png",
    heroAlt: "Physician having a calm consultation with a patient in a modern clinic",
    headline: "Care that sees the whole person.",
    intro: "Primary and specialty care with time to listen, clear next steps, and a team you can reach.",
    primaryCta: "Book a visit",
    secondaryCta: "Find a clinician",
    sectionTitle: "Healthcare should feel easier to navigate.",
    sectionIntro: "Northstar brings everyday care and specialist support together, with a clear path from question to follow-up.",
    features: [
      { title: "Start with a conversation", body: "Your care plan begins with context, not a rushed checklist." },
      { title: "Keep the next step clear", body: "Appointments, referrals, and follow-ups stay organized in one place." },
      { title: "Reach a real care team", body: "Questions get routed to the people who understand your health history." },
    ],
    spotlight: {
      label: "New patients",
      title: "A simpler first appointment.",
      body: "Choose a clinician, share what brings you in, and get a clear plan for what happens next.",
    },
    about: {
      title: "A care team that keeps the thread.",
      body: "Northstar connects primary care, specialists, and follow-up around one shared view of your health. You spend less time repeating yourself and more time getting useful answers.",
      detail: "Appointments are designed around listening first, then making the next step easy to understand.",
    },
    slides: [
      { title: "Primary care", body: "Everyday visits, annual care, and a clinician who knows your health over time." },
      { title: "Specialty support", body: "Coordinated referrals and clear follow-up when a question needs deeper expertise." },
      { title: "Care navigation", body: "A reachable team to help with scheduling, results, and what happens next." },
    ],
    testimonials: [
      { quote: "The whole visit felt calm and clear. I knew what to do next before I left.", by: "Elena Ruiz, patient" },
      { quote: "My care team followed up quickly and made the referral process much easier to navigate.", by: "Marcus Lee, patient" },
    ],
    stats: [
      { value: "Same day", label: "responses for care questions" },
      { value: "One team", label: "for visits, referrals, and follow-up" },
      { value: "20+", label: "specialties connected through Northstar" },
    ],
    quote: "I left with answers, a plan, and the sense that my doctor had actually heard me.",
    quoteBy: "Northstar Health patient",
    footerLine: "Clear, connected care for everyday health.",
    theme: {
      page: "bg-[#edf7f4]",
      nav: "bg-[#edf7f4]/90",
      text: "text-[#103b3c]",
      muted: "text-[#527071]",
      accent: "bg-[#cae7df]",
      accentText: "text-[#18756e]",
      button: "bg-[#176c68]",
      buttonText: "text-[#f8fffd]",
      surface: "bg-[#f8fcfb]",
      border: "border-[#c9dfda]",
    },
    serif: false,
  },
  {
    href: "/showcases/legal",
    serviceType: "website",
    industry: "Legal",
    brand: "Alder Finch",
    nav: ["Practices", "Attorneys", "Perspective"],
    heroImage: "/images/websites/alder-finch-law-hero.png",
    heroAlt: "Elegant law office meeting room with attorneys in a quiet discussion",
    headline: "Clear counsel for consequential decisions.",
    intro: "A focused legal team for businesses, families, and institutions navigating complex matters.",
    primaryCta: "Speak with counsel",
    secondaryCta: "View practices",
    sectionTitle: "Judgment matters most when the stakes are high.",
    sectionIntro: "We bring rigorous preparation, direct communication, and a practical understanding of what comes next.",
    features: [
      { title: "Business counsel", body: "Practical guidance for contracts, governance, transactions, and growth." },
      { title: "Dispute resolution", body: "Measured strategy for resolving conflict and protecting what matters." },
      { title: "Private client", body: "Thoughtful planning for families, estates, and long-term stewardship." },
    ],
    spotlight: {
      label: "Our approach",
      title: "Careful analysis. Direct advice.",
      body: "The goal is not more complexity. It is a clear understanding of the options and the right path forward.",
    },
    about: {
      title: "Preparation before posturing.",
      body: "Alder Finch is a focused firm for matters that need careful judgment. We work closely with clients, communicate directly, and keep strategy connected to the real decision at hand.",
      detail: "Our attorneys bring sector knowledge and a practical understanding of the people, timelines, and risks involved.",
    },
    slides: [
      { title: "Corporate", body: "Advice for governance, commercial agreements, transactions, and the decisions that shape a business." },
      { title: "Disputes", body: "A measured approach to conflict, with a clear view of leverage, cost, and the best available outcome." },
      { title: "Private client", body: "Long-term planning for families, estates, and assets that require thoughtful stewardship." },
    ],
    testimonials: [
      { quote: "The advice was direct, well considered, and focused on the decision we actually needed to make.", by: "Managing partner, investment firm" },
      { quote: "They understood the complexity quickly and gave our board a clear path forward.", by: "Chair, family-owned business" },
    ],
    stats: [
      { value: "3", label: "focused practice groups" },
      { value: "Direct", label: "partner involvement throughout" },
      { value: "Clear", label: "advice tied to the decision" },
    ],
    quote: "Alder Finch made a difficult decision easier to understand and gave us a practical way forward.",
    quoteBy: "General counsel, private company",
    footerLine: "Considered advice for important matters.",
    theme: {
      page: "bg-[#eef0f2]",
      nav: "bg-[#eef0f2]/90",
      text: "text-[#12243a]",
      muted: "text-[#596673]",
      accent: "bg-[#b08b57]",
      accentText: "text-[#8a673a]",
      button: "bg-[#12243a]",
      buttonText: "text-[#faf8f2]",
      surface: "bg-[#f8f8f6]",
      border: "border-[#d1d5d8]",
    },
    serif: true,
  },
];

export const applicationDemos: ShowcaseCard[] = [
  {
    href: "/showcases/applications/cedar",
    serviceType: "application",
    industry: "Education application",
    brand: "Cedar SIS",
    heroImage: "/images/student-information-system.png",
    heroAlt: "Student information system analytics dashboard displayed on a desktop monitor",
    headline: "A clear operational view of every student day.",
  },
];

export const aiDemos: ShowcaseCard[] = [
  {
    href: "/showcases/ai/beacon",
    serviceType: "ai",
    industry: "AI workflow",
    brand: "Beacon SEO Agent",
    heroImage: "/images/ai-seo-brand-monitoring-agent.png",
    heroAlt: "Dark SEO monitoring dashboard with visibility metrics and prioritized recommendations",
    headline: "Monitor every page. Turn findings into an actionable SEO plan.",
  },
];

export const showcaseCards: ShowcaseCard[] = [...websiteDemos, ...applicationDemos, ...aiDemos];

export const educationSite = websiteDemos[0];
export const travelSite = websiteDemos[1];
export const medicalSite = websiteDemos[2];
export const legalSite = websiteDemos[3];
