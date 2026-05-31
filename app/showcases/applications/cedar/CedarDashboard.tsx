"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const navigation = [
  "Overview",
  "Students",
  "Attendance",
  "Academics",
  "Enrollment",
  "Reports",
];

const attendance = [
  { day: "Mon", value: 94.8 },
  { day: "Tue", value: 95.6 },
  { day: "Wed", value: 93.9 },
  { day: "Thu", value: 96.2 },
  { day: "Fri", value: 95.1 },
];

const students = [
  { id: "ST-2841", name: "Amara Patel", grade: "8", advisor: "M. Rivera", attendance: "97.4%", status: "On track" },
  { id: "ST-1937", name: "Jonah Brooks", grade: "6", advisor: "T. Nguyen", attendance: "92.8%", status: "Review" },
  { id: "ST-3168", name: "Lina Morales", grade: "10", advisor: "A. Chen", attendance: "98.1%", status: "On track" },
  { id: "ST-2254", name: "Elliot Park", grade: "7", advisor: "S. Walker", attendance: "89.6%", status: "Follow up" },
  { id: "ST-3412", name: "Sofia Bennett", grade: "11", advisor: "D. Okafor", attendance: "96.7%", status: "On track" },
];

const schedule = [
  { time: "8:15 AM", title: "Daily operations check-in", place: "Main office" },
  { time: "10:30 AM", title: "Enrollment review", place: "Conference room B" },
  { time: "1:00 PM", title: "Grade 8 attendance review", place: "Student support" },
  { time: "3:15 PM", title: "Family portal onboarding", place: "Virtual" },
];

const supportItems = [
  { name: "Elliot Park", detail: "Attendance follow-up requested", tone: "bg-[#fbe9dc] text-[#9a4b24]" },
  { name: "Jonah Brooks", detail: "Advisor note added this morning", tone: "bg-[#fff2cc] text-[#7b5a12]" },
  { name: "Maya Sullivan", detail: "Enrollment document pending", tone: "bg-[#e3eefc] text-[#315f98]" },
];

const announcements = [
  { title: "Family portal update", body: "Progress reports are available for review on Friday.", date: "Oct 18" },
  { title: "Enrollment window", body: "Returning family registration opens next Monday.", date: "Oct 21" },
];

const attendanceRecords = [
  { grade: "6", present: "95.8%", absent: "14", late: "8", trend: "Up 0.6%" },
  { grade: "7", present: "94.6%", absent: "18", late: "11", trend: "Down 0.3%" },
  { grade: "8", present: "92.9%", absent: "24", late: "13", trend: "Down 1.1%" },
  { grade: "9", present: "96.4%", absent: "12", late: "6", trend: "Up 0.8%" },
  { grade: "10", present: "95.3%", absent: "15", late: "7", trend: "Up 0.2%" },
  { grade: "11", present: "95.9%", absent: "10", late: "5", trend: "Up 0.5%" },
];

const courses = [
  { code: "ENG-08", title: "English Language Arts 8", teacher: "M. Rivera", students: "28", average: "86.4%", status: "On track" },
  { code: "MTH-07", title: "Pre-Algebra 7", teacher: "T. Nguyen", students: "26", average: "81.7%", status: "Review" },
  { code: "SCI-10", title: "Biology", teacher: "A. Chen", students: "24", average: "88.9%", status: "On track" },
  { code: "HIS-11", title: "US History", teacher: "D. Okafor", students: "22", average: "84.2%", status: "On track" },
  { code: "MTH-08", title: "Algebra I", teacher: "S. Walker", students: "27", average: "79.8%", status: "Review" },
];

const enrollmentStages = [
  { label: "Applications received", value: 248, width: "100%" },
  { label: "Documents complete", value: 206, width: "83%" },
  { label: "Ready for review", value: 164, width: "66%" },
  { label: "Offers sent", value: 118, width: "48%" },
];

const applicants = [
  { name: "Noah Williams", grade: "6", submitted: "Oct 9", owner: "L. Carter", status: "Ready for review" },
  { name: "Iris Chen", grade: "9", submitted: "Oct 8", owner: "R. Ellis", status: "Documents pending" },
  { name: "Mateo Rivera", grade: "7", submitted: "Oct 7", owner: "L. Carter", status: "Ready for review" },
  { name: "Grace Okafor", grade: "10", submitted: "Oct 6", owner: "R. Ellis", status: "Family follow-up" },
];

const reports = [
  { title: "Daily attendance summary", detail: "Attendance by school, grade, and advisory", cadence: "Daily", updated: "Today, 9:15 AM" },
  { title: "Enrollment pipeline", detail: "Applications, missing documents, and decisions", cadence: "Weekly", updated: "Oct 9, 4:30 PM" },
  { title: "Academic progress review", detail: "Course averages, grading completion, and support flags", cadence: "Monthly", updated: "Oct 1, 8:00 AM" },
  { title: "Student support activity", detail: "Open follow-ups, advisor notes, and resolution time", cadence: "Weekly", updated: "Oct 9, 3:45 PM" },
];

const card = "rounded-lg border border-[#dce4e7] bg-white shadow-[0_8px_22px_rgba(36,69,77,0.045)]";

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`rounded-md px-2 py-1 text-xs font-semibold ${
      status === "On track"
        ? "bg-[#e6f4f1] text-[#23665e]"
        : status === "Review"
          ? "bg-[#fff2cc] text-[#7b5a12]"
          : "bg-[#fbe9dc] text-[#9a4b24]"
    }`}>
      {status}
    </span>
  );
}

function EmptySearch() {
  return (
    <div className="border-t border-[#e7edef] px-5 py-10 text-center">
      <p className="text-sm font-semibold text-[#334b55]">No matching students</p>
      <p className="mt-1 text-xs text-[#68808a]">Try a different name, ID, grade, or advisor.</p>
    </div>
  );
}

export default function CedarDashboard() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("Viewing district overview.");

  const filteredStudents = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return students;

    return students.filter((student) =>
      [student.name, student.id, student.grade, student.advisor, student.status]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  return (
    <main className="min-h-[100dvh] bg-[#f5f7f8] text-[#203039]">
      <div className="grid min-h-[100dvh] lg:grid-cols-[236px_1fr]">
        <aside className="border-b border-[#dce4e7] bg-[#173f4b] text-[#e9f3f4] lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between px-5 py-5 lg:block">
            <div>
              <Link href="/showcases" className="text-lg font-semibold tracking-[-0.04em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ed4d8]">
                Cedar SIS
              </Link>
              <p className="mt-1 text-xs text-[#acd0d4]">Demo workspace</p>
            </div>
            <p className="text-xs font-medium text-[#acd0d4] lg:mt-8">Harbor View District</p>
          </div>
          <nav aria-label="Dashboard navigation" className="flex gap-1 overflow-x-auto px-3 pb-3 lg:block lg:space-y-1 lg:pb-0">
            {navigation.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setActiveNav(item);
                  setNotice(`Previewing ${item.toLowerCase()}.`);
                }}
                aria-pressed={activeNav === item}
                className={`min-h-11 shrink-0 cursor-pointer rounded-md px-3 py-2 text-left text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9ed4d8] lg:w-full ${
                  activeNav === item ? "bg-[#e7f4f4] text-[#173f4b]" : "text-[#c8e0e2] hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className="hidden border-t border-white/15 px-5 py-5 lg:mt-8 lg:block">
            <p className="text-xs text-[#acd0d4]">Academic year</p>
            <p className="mt-1 text-sm font-semibold">2026-2027</p>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="border-b border-[#dce4e7] bg-white">
            <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between lg:px-8">
              <div>
                <p className="text-xs font-medium text-[#68808a]">Monday, October 12</p>
                <h1 className="mt-1 text-2xl font-semibold tracking-[-0.045em] text-[#203039]">
                  {activeNav === "Overview" ? "District overview" : activeNav}
                </h1>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                <label className="grid gap-1 text-xs font-medium text-[#526a74]">
                  Search students
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Name or student ID"
                    className="min-h-11 w-full rounded-md border border-[#cbd8dc] bg-white px-3 text-sm text-[#203039] placeholder:text-[#7d929a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7f88] sm:w-56"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setNotice("Student creation is disabled in this demo workspace.")}
                  className="min-h-11 cursor-pointer rounded-md bg-[#226f78] px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#185962] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7f88] focus-visible:ring-offset-2"
                >
                  Add student
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 lg:px-8 lg:py-8">
            <p aria-live="polite" className="mb-4 rounded-md border border-[#cfe0e3] bg-[#edf6f6] px-3 py-2 text-xs font-medium text-[#42636b]">
              {notice}
            </p>
            {activeNav === "Overview" && (
              <>
            <section aria-label="Key district metrics" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["2,846", "Active students", "+34 since September"],
                ["95.1%", "Attendance today", "Up 0.7% this week"],
                ["186", "Open enrollments", "42 need review"],
                ["73", "Staff on campus", "6 substitute assignments"],
              ].map(([value, label, note]) => (
                <article key={label} className="rounded-lg border border-[#dce4e7] bg-white p-5 shadow-[0_8px_22px_rgba(36,69,77,0.045)]">
                  <p className="font-mono text-2xl font-semibold tracking-[-0.06em] text-[#203039]">{value}</p>
                  <h2 className="mt-2 text-sm font-semibold text-[#334b55]">{label}</h2>
                  <p className="mt-2 text-xs text-[#68808a]">{note}</p>
                </article>
              ))}
            </section>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
              <section className="rounded-lg border border-[#dce4e7] bg-white p-5 shadow-[0_8px_22px_rgba(36,69,77,0.045)]" aria-labelledby="attendance-title">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 id="attendance-title" className="text-base font-semibold tracking-[-0.025em]">Attendance this week</h2>
                    <p className="mt-1 text-xs text-[#68808a]">District-wide daily attendance</p>
                  </div>
                  <p className="w-fit rounded-md bg-[#e6f4f1] px-3 py-2 text-xs font-semibold text-[#23665e]">Weekly average 95.1%</p>
                </div>
                <div className="mt-8 grid h-52 grid-cols-5 items-end gap-3 border-b border-[#dce4e7] px-2 sm:gap-5" role="img" aria-label="Attendance ranged from 93.9 percent to 96.2 percent this week">
                  {attendance.map((day) => (
                    <div key={day.day} className="flex h-full flex-col justify-end gap-2">
                      <p className="text-center font-mono text-xs font-semibold text-[#526a74]">{day.value}%</p>
                      <div className="mx-auto w-full max-w-14 rounded-t-md bg-[#65aeb0]" style={{ height: `${(day.value - 88) * 10}%` }} />
                      <p className="pb-3 text-center text-xs font-medium text-[#68808a]">{day.day}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-lg border border-[#dce4e7] bg-white p-5 shadow-[0_8px_22px_rgba(36,69,77,0.045)]" aria-labelledby="schedule-title">
                <h2 id="schedule-title" className="text-base font-semibold tracking-[-0.025em]">Today&apos;s schedule</h2>
                <div className="mt-4 space-y-4">
                  {schedule.map((item) => (
                    <article key={item.time} className="grid grid-cols-[70px_1fr] gap-3 border-t border-[#e3eaec] pt-4">
                      <p className="font-mono text-xs font-semibold text-[#2d7f88]">{item.time}</p>
                      <div>
                        <h3 className="text-sm font-semibold text-[#334b55]">{item.title}</h3>
                        <p className="mt-1 text-xs text-[#7a8e96]">{item.place}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
              <section className="overflow-hidden rounded-lg border border-[#dce4e7] bg-white shadow-[0_8px_22px_rgba(36,69,77,0.045)]" aria-labelledby="students-title">
                <div className="flex items-center justify-between gap-4 border-b border-[#e3eaec] px-5 py-4">
                  <div>
                    <h2 id="students-title" className="text-base font-semibold tracking-[-0.025em]">Student directory</h2>
                    <p className="mt-1 text-xs text-[#68808a]">{filteredStudents.length} demo records shown</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setNotice("Showing all demo student records.");
                    }}
                    className="cursor-pointer text-xs font-semibold text-[#226f78] transition-colors duration-200 hover:text-[#174f56] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7f88]"
                  >
                    View directory
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                    <thead className="bg-[#f7f9fa] text-xs text-[#68808a]">
                      <tr>
                        <th className="px-5 py-3 font-semibold">Student</th>
                        <th className="px-4 py-3 font-semibold">Grade</th>
                        <th className="px-4 py-3 font-semibold">Advisor</th>
                        <th className="px-4 py-3 font-semibold">Attendance</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.id} className="border-t border-[#e7edef] text-[#3d535c]">
                          <td className="px-5 py-3">
                            <p className="font-semibold text-[#2a414a]">{student.name}</p>
                            <p className="mt-1 font-mono text-xs text-[#7a8e96]">{student.id}</p>
                          </td>
                          <td className="px-4 py-3">{student.grade}</td>
                          <td className="px-4 py-3">{student.advisor}</td>
                          <td className="px-4 py-3 font-mono text-xs">{student.attendance}</td>
                          <td className="px-4 py-3">
                            <span className={`rounded-md px-2 py-1 text-xs font-semibold ${
                              student.status === "On track"
                                ? "bg-[#e6f4f1] text-[#23665e]"
                                : student.status === "Review"
                                  ? "bg-[#fff2cc] text-[#7b5a12]"
                                  : "bg-[#fbe9dc] text-[#9a4b24]"
                            }`}>
                              {student.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredStudents.length === 0 && (
                  <div className="border-t border-[#e7edef] px-5 py-10 text-center">
                    <p className="text-sm font-semibold text-[#334b55]">No matching students</p>
                    <p className="mt-1 text-xs text-[#68808a]">Try a different name, ID, grade, or advisor.</p>
                  </div>
                )}
              </section>

              <div className="grid gap-5">
                <section className="rounded-lg border border-[#dce4e7] bg-white p-5 shadow-[0_8px_22px_rgba(36,69,77,0.045)]" aria-labelledby="support-title">
                  <h2 id="support-title" className="text-base font-semibold tracking-[-0.025em]">Student support</h2>
                  <div className="mt-4 space-y-3">
                    {supportItems.map((item) => (
                      <article key={item.name} className="rounded-md border border-[#e3eaec] p-3">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-sm font-semibold text-[#334b55]">{item.name}</h3>
                          <span className={`rounded-md px-2 py-1 text-[11px] font-semibold ${item.tone}`}>Open</span>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-[#68808a]">{item.detail}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-[#dce4e7] bg-white p-5 shadow-[0_8px_22px_rgba(36,69,77,0.045)]" aria-labelledby="announcements-title">
                  <h2 id="announcements-title" className="text-base font-semibold tracking-[-0.025em]">Announcements</h2>
                  <div className="mt-4 space-y-4">
                    {announcements.map((item) => (
                      <article key={item.title} className="border-t border-[#e3eaec] pt-4">
                        <div className="flex items-center justify-between gap-3">
                          <h3 className="text-sm font-semibold text-[#334b55]">{item.title}</h3>
                          <p className="font-mono text-[11px] text-[#7a8e96]">{item.date}</p>
                        </div>
                        <p className="mt-2 text-xs leading-5 text-[#68808a]">{item.body}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
              </>
            )}

            {activeNav === "Students" && (
              <section className={`${card} overflow-hidden`} aria-labelledby="student-records-title">
                <div className="flex flex-col gap-4 border-b border-[#e3eaec] px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h2 id="student-records-title" className="text-lg font-semibold tracking-[-0.035em]">Student records</h2>
                    <p className="mt-1 text-xs text-[#68808a]">{filteredStudents.length} demo records shown from 2,846 active students</p>
                  </div>
                  <button type="button" onClick={() => setNotice("Student export is disabled in this demo workspace.")} className="min-h-11 w-fit cursor-pointer rounded-md border border-[#cbd8dc] px-4 text-sm font-semibold text-[#226f78] transition-colors hover:bg-[#edf6f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7f88]">
                    Export records
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                    <thead className="bg-[#f7f9fa] text-xs text-[#68808a]">
                      <tr>
                        {["Student", "Grade", "Advisor", "Attendance", "Status"].map((label) => <th key={label} className="px-5 py-3 font-semibold">{label}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {filteredStudents.map((student) => (
                        <tr key={student.id} className="border-t border-[#e7edef] text-[#3d535c]">
                          <td className="px-5 py-4"><p className="font-semibold text-[#2a414a]">{student.name}</p><p className="mt-1 font-mono text-xs text-[#7a8e96]">{student.id}</p></td>
                          <td className="px-5 py-4">{student.grade}</td>
                          <td className="px-5 py-4">{student.advisor}</td>
                          <td className="px-5 py-4 font-mono text-xs">{student.attendance}</td>
                          <td className="px-5 py-4"><StatusBadge status={student.status} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {filteredStudents.length === 0 && <EmptySearch />}
              </section>
            )}

            {activeNav === "Attendance" && (
              <div className="grid gap-5 xl:grid-cols-[1.3fr_0.9fr]">
                <section className={`${card} p-5`} aria-labelledby="attendance-detail-title">
                  <h2 id="attendance-detail-title" className="text-lg font-semibold tracking-[-0.035em]">Attendance by grade</h2>
                  <p className="mt-1 text-xs text-[#68808a]">Today&apos;s attendance recorded by 9:15 AM</p>
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full min-w-[580px] text-left text-sm">
                      <thead className="text-xs text-[#68808a]"><tr>{["Grade", "Present", "Absent", "Late", "Weekly trend"].map((label) => <th key={label} className="border-b border-[#e3eaec] px-3 py-3 font-semibold">{label}</th>)}</tr></thead>
                      <tbody>{attendanceRecords.map((row) => <tr key={row.grade} className="border-b border-[#edf1f2]"><td className="px-3 py-4 font-semibold">Grade {row.grade}</td><td className="px-3 py-4 font-mono text-xs">{row.present}</td><td className="px-3 py-4">{row.absent}</td><td className="px-3 py-4">{row.late}</td><td className={`px-3 py-4 text-xs font-semibold ${row.trend.startsWith("Up") ? "text-[#23665e]" : "text-[#9a4b24]"}`}>{row.trend}</td></tr>)}</tbody>
                    </table>
                  </div>
                </section>
                <section className={`${card} p-5`} aria-labelledby="attendance-actions-title">
                  <h2 id="attendance-actions-title" className="text-lg font-semibold tracking-[-0.035em]">Attendance actions</h2>
                  <div className="mt-5 space-y-3">
                    {[["42", "Students absent today"], ["19", "Late arrivals"], ["8", "Follow-ups due"]].map(([value, label]) => (
                      <article key={label} className="rounded-md border border-[#e3eaec] p-4"><p className="font-mono text-xl font-semibold text-[#226f78]">{value}</p><p className="mt-1 text-sm text-[#526a74]">{label}</p></article>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeNav === "Academics" && (
              <div className="grid gap-5 xl:grid-cols-[1.35fr_0.85fr]">
                <section className={`${card} overflow-hidden`} aria-labelledby="courses-title">
                  <div className="border-b border-[#e3eaec] px-5 py-5"><h2 id="courses-title" className="text-lg font-semibold tracking-[-0.035em]">Course performance</h2><p className="mt-1 text-xs text-[#68808a]">Current term averages and sections needing review</p></div>
                  <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-[#f7f9fa] text-xs text-[#68808a]"><tr>{["Course", "Teacher", "Students", "Average", "Status"].map((label) => <th key={label} className="px-5 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{courses.map((course) => <tr key={course.code} className="border-t border-[#e7edef]"><td className="px-5 py-4"><p className="font-semibold text-[#2a414a]">{course.title}</p><p className="mt-1 font-mono text-xs text-[#7a8e96]">{course.code}</p></td><td className="px-5 py-4">{course.teacher}</td><td className="px-5 py-4">{course.students}</td><td className="px-5 py-4 font-mono text-xs">{course.average}</td><td className="px-5 py-4"><StatusBadge status={course.status} /></td></tr>)}</tbody></table></div>
                </section>
                <section className={`${card} p-5`} aria-labelledby="grading-title">
                  <h2 id="grading-title" className="text-lg font-semibold tracking-[-0.035em]">Grading completion</h2>
                  <p className="mt-1 text-xs text-[#68808a]">Progress reports due Friday</p>
                  <div className="mt-6 space-y-5">{[["Middle school", "92%"], ["High school", "87%"], ["Electives", "78%"]].map(([label, value]) => <div key={label}><div className="flex justify-between text-sm"><p className="font-medium">{label}</p><p className="font-mono text-xs font-semibold">{value}</p></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf1f2]"><div className="h-full rounded-full bg-[#65aeb0]" style={{ width: value }} /></div></div>)}</div>
                </section>
              </div>
            )}

            {activeNav === "Enrollment" && (
              <div className="grid gap-5 xl:grid-cols-[0.85fr_1.35fr]">
                <section className={`${card} p-5`} aria-labelledby="pipeline-title">
                  <h2 id="pipeline-title" className="text-lg font-semibold tracking-[-0.035em]">Enrollment pipeline</h2>
                  <p className="mt-1 text-xs text-[#68808a]">2027-2028 application cycle</p>
                  <div className="mt-6 space-y-4">{enrollmentStages.map((stage) => <article key={stage.label}><div className="flex justify-between gap-4 text-sm"><p className="text-[#526a74]">{stage.label}</p><p className="font-mono text-xs font-semibold">{stage.value}</p></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf1f2]"><div className="h-full rounded-full bg-[#65aeb0]" style={{ width: stage.width }} /></div></article>)}</div>
                </section>
                <section className={`${card} overflow-hidden`} aria-labelledby="applicants-title">
                  <div className="border-b border-[#e3eaec] px-5 py-5"><h2 id="applicants-title" className="text-lg font-semibold tracking-[-0.035em]">Recent applicants</h2><p className="mt-1 text-xs text-[#68808a]">Applications requiring the next admissions action</p></div>
                  <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><thead className="bg-[#f7f9fa] text-xs text-[#68808a]"><tr>{["Applicant", "Grade", "Submitted", "Owner", "Status"].map((label) => <th key={label} className="px-5 py-3 font-semibold">{label}</th>)}</tr></thead><tbody>{applicants.map((applicant) => <tr key={applicant.name} className="border-t border-[#e7edef]"><td className="px-5 py-4 font-semibold text-[#2a414a]">{applicant.name}</td><td className="px-5 py-4">{applicant.grade}</td><td className="px-5 py-4">{applicant.submitted}</td><td className="px-5 py-4">{applicant.owner}</td><td className="px-5 py-4 text-xs font-semibold text-[#526a74]">{applicant.status}</td></tr>)}</tbody></table></div>
                </section>
              </div>
            )}

            {activeNav === "Reports" && (
              <section className={`${card} overflow-hidden`} aria-labelledby="reports-title">
                <div className="border-b border-[#e3eaec] px-5 py-5"><h2 id="reports-title" className="text-lg font-semibold tracking-[-0.035em]">Saved reports</h2><p className="mt-1 text-xs text-[#68808a]">Frequently used district reporting views</p></div>
                <div className="grid gap-px bg-[#e3eaec] md:grid-cols-2">
                  {reports.map((report) => <article key={report.title} className="bg-white p-5"><h3 className="font-semibold text-[#2a414a]">{report.title}</h3><p className="mt-2 text-sm leading-6 text-[#68808a]">{report.detail}</p><div className="mt-5 flex items-center justify-between gap-3 text-xs"><p className="font-semibold text-[#226f78]">{report.cadence}</p><p className="text-[#7a8e96]">{report.updated}</p></div><button type="button" onClick={() => setNotice(`${report.title} preview opened.`)} className="mt-5 cursor-pointer text-sm font-semibold text-[#226f78] hover:text-[#174f56] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d7f88]">Preview report</button></article>)}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
