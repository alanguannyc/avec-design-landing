"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Panel = "Builder" | "Sites" | "Findings" | "Suggestions" | "Runs" | "Settings";
type StudioPhase = "welcome" | "questions" | "building" | "dashboard";

const panels: Panel[] = ["Builder", "Sites", "Findings", "Suggestions", "Runs", "Settings"];

const setupQuestions = [
  {
    eyebrow: "Monitoring goal",
    question: "What should this agent prioritize first?",
    description: "Gemini will tune the initial workflow and recommendation ranking around this goal.",
    options: ["Technical SEO health", "Content opportunities", "Competitor visibility"],
  },
  {
    eyebrow: "Website scope",
    question: "Which sites should the agent monitor?",
    description: "Use the prepared sample workspace or start with a smaller focused crawl.",
    options: ["All sample websites", "Marketing sites only", "Single priority domain"],
  },
  {
    eyebrow: "Reporting cadence",
    question: "When should Gemini prepare the SEO brief?",
    description: "Urgent findings will still appear immediately in the workspace.",
    options: ["Every weekday morning", "After every crawl", "Weekly summary"],
  },
];

const buildTasks = [
  "Loading the Beacon monitoring template",
  "Applying your crawl and reporting preferences",
  "Connecting sample website sources",
  "Generating technical SEO checks",
  "Creating suggestion ranking rules",
  "Preparing the monitoring dashboard",
];

const runtimeEvents = [
  "template.beacon-seo loaded",
  "scope.sample-sites attached",
  "crawl-policy weekday-0600 applied",
  "checks.metadata schema links enabled",
  "ranking impact effort confidence compiled",
  "dashboard.preview ready",
];

const steps = [
  { title: "Schedule crawl", body: "Scan approved domains every weekday at 6:00 AM.", status: "Configured" },
  { title: "Inspect pages", body: "Check metadata, links, schema, indexability, and page health.", status: "Configured" },
  { title: "Compare changes", body: "Detect new issues and meaningful changes since the last run.", status: "Configured" },
  { title: "Generate suggestions", body: "Prioritize fixes by impact, effort, and affected traffic.", status: "Configured" },
  { title: "Send digest", body: "Deliver a concise action plan to the growth team.", status: "Configured" },
];

const sites = [
  { domain: "northstarhealth.example", pages: "164", score: "86", lastRun: "Today, 6:14 AM", status: "Healthy" },
  { domain: "harboracademy.example", pages: "92", score: "78", lastRun: "Today, 6:09 AM", status: "Review" },
  { domain: "northline.example", pages: "118", score: "91", lastRun: "Today, 6:05 AM", status: "Healthy" },
];

const findings = [
  { title: "Missing meta descriptions", site: "harboracademy.example", pages: "12 pages", impact: "High", area: "Content" },
  { title: "Internal links point to redirected URLs", site: "northstarhealth.example", pages: "8 pages", impact: "Medium", area: "Technical" },
  { title: "Service pages lack FAQ schema", site: "northstarhealth.example", pages: "6 pages", impact: "Medium", area: "Structured data" },
  { title: "Destination pages compete for the same query", site: "northline.example", pages: "4 pages", impact: "High", area: "Keywords" },
  { title: "Three images exceed recommended size", site: "harboracademy.example", pages: "3 pages", impact: "Low", area: "Performance" },
];

const suggestions = [
  { title: "Rewrite 12 missing meta descriptions", body: "Use page-specific copy that names the program, audience, and next action.", impact: "High", effort: "35 min", owner: "Content" },
  { title: "Replace redirected internal links", body: "Update eight links so crawlers and visitors land on the current destination directly.", impact: "Medium", effort: "20 min", owner: "Web" },
  { title: "Add FAQ schema to service pages", body: "Mark up the existing question sections on six care pages.", impact: "Medium", effort: "45 min", owner: "Web" },
  { title: "Consolidate overlapping destination copy", body: "Clarify the primary search intent for four Mediterranean itinerary pages.", impact: "High", effort: "1.5 hr", owner: "Content" },
];

const runs = [
  { date: "Today, 6:14 AM", duration: "4m 18s", pages: "374", changes: "9", status: "Complete" },
  { date: "Friday, 6:13 AM", duration: "4m 06s", pages: "371", changes: "5", status: "Complete" },
  { date: "Thursday, 6:11 AM", duration: "4m 21s", pages: "371", changes: "12", status: "Complete" },
  { date: "Wednesday, 6:08 AM", duration: "3m 58s", pages: "366", changes: "7", status: "Complete" },
];

const trend = [62, 66, 65, 71, 73, 76, 79, 82, 84, 86];

const card = "rounded-lg border border-[#20364a] bg-[#102235] shadow-[0_12px_34px_rgba(0,0,0,0.16)]";
const focus = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e3b341] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071523]";

function ImpactBadge({ impact }: { impact: string }) {
  return (
    <span className={`rounded px-2 py-1 text-[11px] font-semibold ${
      impact === "High"
        ? "bg-[#5e2730] text-[#f3a7a7]"
        : impact === "Medium"
          ? "bg-[#594015] text-[#f0c66f]"
          : "bg-[#173c55] text-[#91c4e3]"
    }`}>
      {impact} impact
    </span>
  );
}

export default function BeaconAgentDemo() {
  const [studioPhase, setStudioPhase] = useState<StudioPhase>("welcome");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completedBuildTasks, setCompletedBuildTasks] = useState(0);
  const [activePanel, setActivePanel] = useState<Panel>("Builder");
  const [notice, setNotice] = useState("Workflow builder ready.");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (studioPhase !== "building") return;
    if (completedBuildTasks >= buildTasks.length) {
      const dashboardTimer = window.setTimeout(() => {
        setStudioPhase("dashboard");
        setNotice("Beacon SEO agent is ready. Dashboard opened.");
      }, 700);
      return () => window.clearTimeout(dashboardTimer);
    }

    const taskTimer = window.setTimeout(() => {
      setCompletedBuildTasks((current) => current + 1);
    }, completedBuildTasks === 0 ? 650 : 900);

    return () => window.clearTimeout(taskTimer);
  }, [completedBuildTasks, studioPhase]);

  const filteredFindings = useMemo(() => {
    const normalized = search.trim().toLowerCase();
    if (!normalized) return findings;
    return findings.filter((item) => [item.title, item.site, item.area, item.impact].join(" ").toLowerCase().includes(normalized));
  }, [search]);

  function startSetup() {
    setQuestionIndex(0);
    setAnswers([]);
    setStudioPhase("questions");
  }

  function chooseAnswer(answer: string) {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);

    if (questionIndex === setupQuestions.length - 1) {
      setCompletedBuildTasks(0);
      setStudioPhase("building");
      return;
    }

    setQuestionIndex((current) => current + 1);
  }

  function restartStudio() {
    setStudioPhase("welcome");
    setQuestionIndex(0);
    setAnswers([]);
    setCompletedBuildTasks(0);
  }

  if (studioPhase !== "dashboard") {
    const currentQuestion = setupQuestions[questionIndex];
    const progress = Math.round((completedBuildTasks / buildTasks.length) * 100);

    return (
      <main className="min-h-[100dvh] bg-[#071523] px-5 py-6 text-[#e8f0f4] sm:px-8 lg:px-10">
        <div className="mx-auto flex min-h-[calc(100dvh-3rem)] max-w-6xl flex-col">
          <header className="flex items-center justify-between border-b border-[#20364a] pb-5">
            <div>
              <Link href="/showcases" className={`${focus} text-lg font-semibold tracking-[-0.04em] text-white`}>
                Beacon
              </Link>
              <p className="mt-1 text-xs text-[#88a6b6]">Agent Studio powered by Gemini</p>
            </div>
            <p className="rounded border border-[#29465d] bg-[#102235] px-3 py-1.5 text-xs font-semibold text-[#e3b341]">
              Interactive demo
            </p>
          </header>

          <section className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[0.86fr_1.14fr] lg:py-14">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#e3b341]">
                Gemini agent builder
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                Build an SEO monitoring agent from an existing workflow.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#a7bdc8] sm:text-base">
                This guided demo shows how Gemini loads a prepared agent, asks for the missing context, assembles the workflow, and opens a working monitoring dashboard.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-xs text-[#91c4e3]">
                {["Website monitoring", "SEO recommendations", "Automated digests"].map((label) => (
                  <span key={label} className="rounded border border-[#29465d] bg-[#102235] px-3 py-2">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${card} overflow-hidden`}>
              <div className="border-b border-[#20364a] px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold text-[#e3b341]">
                      {studioPhase === "welcome" && "Step 1 of 3"}
                      {studioPhase === "questions" && "Step 2 of 3"}
                      {studioPhase === "building" && "Step 3 of 3"}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {studioPhase === "welcome" && "Load existing agent"}
                      {studioPhase === "questions" && "Configure the workflow"}
                      {studioPhase === "building" && "Gemini is building"}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-[#88a6b6]">
                    {studioPhase === "questions" && `${questionIndex + 1}/${setupQuestions.length}`}
                    {studioPhase === "building" && `${progress}%`}
                  </p>
                </div>
                <div className="mt-4 h-1 overflow-hidden rounded-full bg-[#20364a]">
                  <div
                    className="h-full rounded-full bg-[#e3b341] transition-[width] duration-300 motion-reduce:transition-none"
                    style={{
                      width:
                        studioPhase === "welcome"
                          ? "33%"
                          : studioPhase === "questions"
                            ? `${33 + ((questionIndex + 1) / setupQuestions.length) * 33}%`
                            : `${66 + progress * 0.34}%`,
                    }}
                  />
                </div>
              </div>

              {studioPhase === "welcome" && (
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#88a6b6]">
                    Existing agent found
                  </p>
                  <article className="mt-4 rounded-lg border border-[#29465d] bg-[#0d1e30] p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-lg font-semibold tracking-[-0.035em] text-white">
                          SEO monitoring and suggestion agent
                        </h2>
                        <p className="mt-2 max-w-lg text-sm leading-6 text-[#a7bdc8]">
                          A prepared Gemini workflow for crawling approved websites, finding SEO changes, and creating prioritized recommendations.
                        </p>
                      </div>
                      <span className="w-fit rounded bg-[#173c55] px-2 py-1 text-xs font-semibold text-[#91c4e3]">
                        Template
                      </span>
                    </div>
                    <div className="mt-5 grid gap-3 border-t border-[#20364a] pt-4 sm:grid-cols-3">
                      {[["5", "Workflow stages"], ["3", "Sample websites"], ["06:00", "Default run time"]].map(([value, label]) => (
                        <div key={label}>
                          <p className="font-mono text-lg font-semibold text-[#e3b341]">{value}</p>
                          <p className="mt-1 text-xs text-[#88a6b6]">{label}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                  <button type="button" onClick={startSetup} className={`${focus} mt-5 min-h-11 cursor-pointer rounded-md bg-[#e3b341] px-4 text-sm font-semibold text-[#172334] transition-colors duration-200 hover:bg-[#f0ca68]`}>
                    Load this agent
                  </button>
                </div>
              )}

              {studioPhase === "questions" && (
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e3b341]">
                    {currentQuestion.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-white">
                    {currentQuestion.question}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#a7bdc8]">
                    {currentQuestion.description}
                  </p>
                  <div className="mt-6 grid gap-3">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => chooseAnswer(option)}
                        className={`${focus} min-h-12 cursor-pointer rounded-md border border-[#29465d] bg-[#0d1e30] px-4 py-3 text-left text-sm font-semibold text-[#d4e2e7] transition-colors duration-200 hover:border-[#e3b341] hover:bg-[#14283b] hover:text-white`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button type="button" onClick={restartStudio} className={`${focus} cursor-pointer text-xs font-semibold text-[#88a6b6] transition-colors duration-200 hover:text-white`}>
                      Start over
                    </button>
                    <p className="text-xs text-[#7896a6]">Choose one response to continue</p>
                  </div>
                </div>
              )}

              {studioPhase === "building" && (
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 size-3 shrink-0 rounded-full bg-[#e3b341] shadow-[0_0_18px_rgba(227,179,65,0.72)] motion-safe:animate-pulse" />
                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.045em] text-white">
                        Gemini is assembling Beacon
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-[#a7bdc8]">
                        Your answers are being applied to the existing workflow. This demo will open the dashboard automatically.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
                    <section className="overflow-hidden rounded-lg border border-[#29465d] bg-[#081827]" aria-label="Gemini runtime simulation">
                      <div className="flex items-center justify-between gap-4 border-b border-[#20364a] px-4 py-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#91c4e3]">Gemini runtime</p>
                          <p className="mt-1 text-xs font-semibold text-[#d4e2e7]">Reasoning and tool execution</p>
                        </div>
                        <span className="flex items-center gap-2 text-[11px] font-semibold text-[#f0ca68]">
                          <span className="size-2 rounded-full bg-[#e3b341] shadow-[0_0_12px_rgba(227,179,65,0.78)] motion-safe:animate-pulse" />
                          Running
                        </span>
                      </div>
                      <div className="p-4">
                        <div className="relative mx-auto flex size-28 items-center justify-center">
                          <span className="absolute inset-0 rounded-full border border-[#29465d]" />
                          <span className="absolute inset-2 rounded-full border border-dashed border-[#e3b341]/65 motion-safe:animate-spin motion-reduce:border-solid" />
                          <span className="absolute inset-5 rounded-full border border-[#37627a] motion-safe:animate-pulse" />
                          <span className="flex size-12 items-center justify-center rounded-full bg-[#173c55] font-mono text-[10px] font-semibold tracking-[0.16em] text-[#c9e6ef] shadow-[0_0_30px_rgba(101,174,176,0.2)]">
                            AI
                          </span>
                        </div>
                        <div className="mt-5 overflow-hidden rounded-full bg-[#14283b]">
                          <div className="beacon-scan-track h-1.5 w-1/3 rounded-full bg-[#e3b341] shadow-[0_0_14px_rgba(227,179,65,0.72)] motion-reduce:w-full" />
                        </div>
                        <div className="mt-5 grid grid-cols-3 gap-2">
                          {[
                            [String(Math.min(374, completedBuildTasks * 74)), "URLs"],
                            [String(Math.min(28, completedBuildTasks * 6)), "checks"],
                            [`${Math.min(100, progress)}%`, "build"],
                          ].map(([value, label]) => (
                            <div key={label} className="rounded border border-[#20364a] bg-[#0d1e30] px-2 py-2 text-center">
                              <p className="font-mono text-sm font-semibold text-[#e3b341]">{value}</p>
                              <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#7896a6]">{label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>

                    <div className="grid gap-4">
                      <section className="rounded-lg border border-[#29465d] bg-[#081827] p-4" aria-label="Gemini execution log">
                        <div className="flex items-center justify-between gap-3">
                          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#91c4e3]">Live execution log</p>
                          <p className="font-mono text-[10px] text-[#7896a6]">{completedBuildTasks}/{buildTasks.length} complete</p>
                        </div>
                        <div className="mt-3 min-h-32 space-y-2 font-mono text-[11px] leading-5">
                          {runtimeEvents.slice(0, Math.max(1, completedBuildTasks + 1)).map((event, index) => (
                            <p key={event} className={index < completedBuildTasks ? "text-[#98d3aa]" : "terminal-cursor text-[#f0ca68]"}>
                              <span className="mr-2 text-[#496678]">{String(index + 1).padStart(2, "0")}</span>
                              {index < completedBuildTasks ? "done  " : "run   "}
                              {event}
                            </p>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    {buildTasks.map((task, index) => {
                      const isComplete = index < completedBuildTasks;
                      const isActive = index === completedBuildTasks;
                      return (
                        <div key={task} className={`flex items-center gap-3 rounded-md border px-3 py-3 text-sm transition-colors duration-200 ${
                          isComplete
                            ? "border-[#25483e] bg-[#12332e] text-[#bde0ca]"
                            : isActive
                              ? "border-[#5b4b28] bg-[#30291b] text-[#f0ca68]"
                              : "border-[#20364a] bg-[#0d1e30] text-[#7896a6]"
                        }`}>
                          <span className={`size-2 shrink-0 rounded-full ${
                            isComplete ? "bg-[#98d3aa]" : isActive ? "bg-[#e3b341] motion-safe:animate-pulse" : "bg-[#496678]"
                          }`} />
                          {task}
                        </div>
                      );
                    })}
                  </div>
                  <button type="button" onClick={() => setStudioPhase("dashboard")} className={`${focus} mt-6 cursor-pointer text-xs font-semibold text-[#91c4e3] transition-colors duration-200 hover:text-white`}>
                    Skip to dashboard
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[100dvh] bg-[#071523] text-[#e8f0f4]">
      <div className="grid min-h-[100dvh] lg:grid-cols-[238px_1fr]">
        <aside className="border-b border-[#20364a] bg-[#091a2a] lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between px-5 py-5 lg:block">
            <div>
              <Link href="/showcases" className={`${focus} text-lg font-semibold tracking-[-0.04em] text-white`}>Beacon</Link>
              <p className="mt-1 text-xs text-[#88a6b6]">SEO agent workspace</p>
            </div>
            <p className="text-xs font-semibold text-[#e3b341] lg:mt-8">Demo mode</p>
          </div>
          <nav aria-label="Agent workspace navigation" className="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1">
            {panels.map((panel) => (
              <button
                key={panel}
                type="button"
                aria-pressed={activePanel === panel}
                onClick={() => {
                  setActivePanel(panel);
                  setNotice(`Viewing ${panel.toLowerCase()}.`);
                }}
                className={`${focus} min-h-11 shrink-0 cursor-pointer rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-200 lg:w-full ${
                  activePanel === panel ? "bg-[#e3b341] text-[#172334]" : "text-[#a7bdc8] hover:bg-white/7 hover:text-white"
                }`}
              >
                {panel}
              </button>
            ))}
          </nav>
          <div className="hidden border-t border-[#20364a] px-5 py-5 lg:mt-8 lg:block">
            <p className="text-xs text-[#7896a6]">Agent status</p>
            <p className="mt-1 text-sm font-semibold text-[#98d3aa]">Monitoring active</p>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="border-b border-[#20364a] bg-[#0b1c2d]">
            <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
              <div>
                <p className="text-xs font-medium text-[#88a6b6]">Website monitoring agent</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-[-0.045em] text-white">{activePanel}</h1>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <label className="grid gap-1 text-xs font-medium text-[#a7bdc8]">
                  Search findings
                  <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Issue, domain, or area" className={`${focus} min-h-11 rounded-md border border-[#29465d] bg-[#102235] px-3 text-sm text-white placeholder:text-[#6f8b99] sm:w-56`} />
                </label>
                <button type="button" onClick={() => setNotice("Demo scan queued. No external websites were contacted.")} className={`${focus} min-h-11 cursor-pointer rounded-md bg-[#e3b341] px-4 text-sm font-semibold text-[#172334] transition-colors hover:bg-[#f0ca68]`}>
                  Run scan
                </button>
                <button type="button" onClick={restartStudio} className={`${focus} min-h-11 cursor-pointer rounded-md border border-[#29465d] bg-[#102235] px-4 text-sm font-semibold text-[#d4e2e7] transition-colors duration-200 hover:border-[#e3b341] hover:text-white`}>
                  Rebuild agent
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 lg:px-8 lg:py-8">
            <p aria-live="polite" className="mb-5 rounded-md border border-[#29465d] bg-[#102235] px-3 py-2 text-xs font-medium text-[#b6ccd5]">{notice}</p>

            {activePanel === "Builder" && (
              <div className="grid gap-5 xl:grid-cols-[1.42fr_0.78fr]">
                <section className={`${card} p-5`} aria-labelledby="workflow-title">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div><h2 id="workflow-title" className="text-lg font-semibold tracking-[-0.035em] text-white">Monitoring and SEO suggestion workflow</h2><p className="mt-1 text-xs text-[#88a6b6]">Five stages run in order for every approved website.</p></div>
                    <p className="w-fit rounded bg-[#173c55] px-3 py-2 text-xs font-semibold text-[#91c4e3]">Weekdays at 6:00 AM</p>
                  </div>
                  <div className="mt-6 space-y-3">
                    {steps.map((step, index) => (
                      <article key={step.title} className="grid gap-3 rounded-md border border-[#29465d] bg-[#0d1e30] p-4 sm:grid-cols-[38px_1fr_auto] sm:items-center">
                        <p className="font-mono text-sm font-semibold text-[#e3b341]">{String(index + 1).padStart(2, "0")}</p>
                        <div><h3 className="text-sm font-semibold text-[#edf4f6]">{step.title}</h3><p className="mt-1 text-xs leading-5 text-[#88a6b6]">{step.body}</p></div>
                        <p className="text-xs font-semibold text-[#98d3aa]">{step.status}</p>
                      </article>
                    ))}
                  </div>
                </section>
                <div className="grid gap-5">
                  <section className={`${card} p-5`} aria-labelledby="run-summary-title">
                    <h2 id="run-summary-title" className="text-base font-semibold text-white">Latest run</h2>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {[["374", "Pages scanned"], ["9", "New changes"], ["4m 18s", "Duration"], ["86", "Health score"]].map(([value, label]) => <article key={label} className="rounded-md border border-[#29465d] p-3"><p className="font-mono text-xl font-semibold text-[#e3b341]">{value}</p><p className="mt-1 text-xs text-[#88a6b6]">{label}</p></article>)}
                    </div>
                  </section>
                  <section className={`${card} p-5`} aria-labelledby="delivery-title">
                    <h2 id="delivery-title" className="text-base font-semibold text-white">Digest delivery</h2>
                    <p className="mt-3 text-sm leading-6 text-[#a7bdc8]">Send prioritized suggestions to the growth team after each completed run.</p>
                    <button type="button" onClick={() => setNotice("Digest preview opened for the latest demo run.")} className={`${focus} mt-5 cursor-pointer text-sm font-semibold text-[#e3b341] hover:text-[#f0ca68]`}>Preview digest</button>
                  </section>
                </div>
              </div>
            )}

            {activePanel === "Sites" && (
              <section className={`${card} overflow-hidden`} aria-labelledby="sites-title">
                <div className="border-b border-[#20364a] px-5 py-5"><h2 id="sites-title" className="text-lg font-semibold text-white">Monitored websites</h2><p className="mt-1 text-xs text-[#88a6b6]">Approved domains included in the weekday crawl.</p></div>
                <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-[#0d1e30] text-xs text-[#88a6b6]"><tr>{["Domain", "Pages", "Health score", "Last run", "Status"].map((label) => <th key={label} className="px-5 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{sites.map((site) => <tr key={site.domain} className="border-t border-[#20364a]"><td className="px-5 py-4 font-semibold text-[#edf4f6]">{site.domain}</td><td className="px-5 py-4 font-mono text-xs">{site.pages}</td><td className="px-5 py-4 font-mono text-xs text-[#e3b341]">{site.score}/100</td><td className="px-5 py-4 text-[#a7bdc8]">{site.lastRun}</td><td className="px-5 py-4 text-xs font-semibold text-[#98d3aa]">{site.status}</td></tr>)}</tbody></table></div>
              </section>
            )}

            {activePanel === "Findings" && (
              <section className={`${card} overflow-hidden`} aria-labelledby="findings-title">
                <div className="border-b border-[#20364a] px-5 py-5"><h2 id="findings-title" className="text-lg font-semibold text-white">Issue queue</h2><p className="mt-1 text-xs text-[#88a6b6]">{filteredFindings.length} demo findings shown</p></div>
                <div className="divide-y divide-[#20364a]">{filteredFindings.map((item) => <article key={item.title} className="grid gap-3 px-5 py-4 md:grid-cols-[1fr_auto_auto] md:items-center"><div><h3 className="text-sm font-semibold text-[#edf4f6]">{item.title}</h3><p className="mt-1 text-xs text-[#88a6b6]">{item.site} | {item.pages} | {item.area}</p></div><ImpactBadge impact={item.impact} /><button type="button" onClick={() => setNotice(`${item.title} opened.`)} className={`${focus} w-fit cursor-pointer text-xs font-semibold text-[#e3b341] hover:text-[#f0ca68]`}>Review issue</button></article>)}</div>
                {filteredFindings.length === 0 && <p className="px-5 py-10 text-sm text-[#a7bdc8]">No findings match this search. Try a domain, area, or impact level.</p>}
              </section>
            )}

            {activePanel === "Suggestions" && (
              <section className="grid gap-4 md:grid-cols-2" aria-label="Prioritized SEO suggestions">
                {suggestions.map((item) => <article key={item.title} className={`${card} p-5`}><div className="flex items-start justify-between gap-3"><ImpactBadge impact={item.impact} /><p className="font-mono text-xs text-[#88a6b6]">{item.effort}</p></div><h2 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-white">{item.title}</h2><p className="mt-3 text-sm leading-6 text-[#a7bdc8]">{item.body}</p><div className="mt-5 flex items-center justify-between gap-3"><p className="text-xs font-semibold text-[#91c4e3]">{item.owner}</p><button type="button" onClick={() => setNotice(`${item.title} added to the demo action plan.`)} className={`${focus} cursor-pointer text-xs font-semibold text-[#e3b341] hover:text-[#f0ca68]`}>Add to plan</button></div></article>)}
              </section>
            )}

            {activePanel === "Runs" && (
              <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                <section className={`${card} overflow-hidden`} aria-labelledby="runs-title"><div className="border-b border-[#20364a] px-5 py-5"><h2 id="runs-title" className="text-lg font-semibold text-white">Run history</h2><p className="mt-1 text-xs text-[#88a6b6]">Recent weekday monitoring activity.</p></div><div className="overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="bg-[#0d1e30] text-xs text-[#88a6b6]"><tr>{["Started", "Duration", "Pages", "Changes", "Status"].map((label) => <th key={label} className="px-5 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{runs.map((run) => <tr key={run.date} className="border-t border-[#20364a]"><td className="px-5 py-4 text-[#edf4f6]">{run.date}</td><td className="px-5 py-4 font-mono text-xs">{run.duration}</td><td className="px-5 py-4 font-mono text-xs">{run.pages}</td><td className="px-5 py-4 font-mono text-xs text-[#e3b341]">{run.changes}</td><td className="px-5 py-4 text-xs font-semibold text-[#98d3aa]">{run.status}</td></tr>)}</tbody></table></div></section>
                <section className={`${card} p-5`} aria-labelledby="trend-title"><h2 id="trend-title" className="text-lg font-semibold text-white">Health score trend</h2><p className="mt-1 text-xs text-[#88a6b6]">Ten completed scans</p><div className="mt-8 flex h-48 items-end gap-2 border-b border-[#29465d] px-2" role="img" aria-label="Health score improved from 62 to 86 over ten scans">{trend.map((score, index) => <div key={`${score}-${index}`} className="flex h-full flex-1 items-end"><div className="w-full rounded-t bg-[#65aeb0]" style={{ height: `${score}%` }} /></div>)}</div><p className="mt-4 text-sm text-[#a7bdc8]">Health score improved after metadata and internal-link fixes were completed.</p></section>
              </div>
            )}

            {activePanel === "Settings" && (
              <section className={`${card} max-w-3xl p-5`} aria-labelledby="settings-title">
                <h2 id="settings-title" className="text-lg font-semibold text-white">Monitoring settings</h2>
                <p className="mt-1 text-xs text-[#88a6b6]">Demo controls show how the agent would be configured.</p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[#d4e2e7]">Crawl frequency<select className={`${focus} min-h-11 rounded-md border border-[#29465d] bg-[#0d1e30] px-3 text-sm font-medium text-white`} defaultValue="Weekdays at 6:00 AM"><option>Weekdays at 6:00 AM</option><option>Daily at 6:00 AM</option><option>Every Monday</option></select></label>
                  <label className="grid gap-2 text-sm font-semibold text-[#d4e2e7]">Digest audience<select className={`${focus} min-h-11 rounded-md border border-[#29465d] bg-[#0d1e30] px-3 text-sm font-medium text-white`} defaultValue="Growth team"><option>Growth team</option><option>Web team</option><option>Leadership</option></select></label>
                  <label className="grid gap-2 text-sm font-semibold text-[#d4e2e7] sm:col-span-2">Digest notes<textarea className={`${focus} min-h-28 rounded-md border border-[#29465d] bg-[#0d1e30] px-3 py-3 text-sm font-normal text-white placeholder:text-[#6f8b99]`} placeholder="Optional instructions for the recommendation digest" /></label>
                </div>
                <button type="button" onClick={() => setNotice("Demo settings saved locally for this preview.")} className={`${focus} mt-6 min-h-11 cursor-pointer rounded-md bg-[#e3b341] px-4 text-sm font-semibold text-[#172334] hover:bg-[#f0ca68]`}>Save settings</button>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
