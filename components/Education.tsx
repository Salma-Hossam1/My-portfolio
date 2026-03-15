"use client";

// ─────────────────────────────────────────────────────────────────────────────
// EDUCATION — to add a new degree, copy one object and paste it in the array
// ─────────────────────────────────────────────────────────────────────────────
const education = [
  {
    degree: "B.Sc. Computer & Control Systems Engineering",
    school: "Faculty of Engineering — Mansoura University",
    period: "Sept 2021 – Present",
    grade: "Grade: Excellent",
  },
  // { degree: "...", school: "...", period: "...", grade: "..." },
];

// ─────────────────────────────────────────────────────────────────────────────
// TRAINING — to add a new training, copy one object and paste it in the array
// status: "In Progress" | "Completed" | "Certified"
// certLink: URL to certificate, or "" to hide the button
// ─────────────────────────────────────────────────────────────────────────────
const trainings = [
  {
    title: "DevOps Engineering Track",
    org: "Digital Egypt Pioneers Initiative (DEPI) — Ministry of Communications",
    period: "In Progress",
    status: "In Progress",
    certLink: "",
    points: [
      "Intensive national DevOps training program by the Egyptian government",
      "Docker · Kubernetes · CI/CD · Terraform · Ansible · Cloud · Monitoring",
    ],
  },
  {
    title: "Cloud Essentials Summer Training",
    org: "National Telecommunication Institute (NTI) — ITIDA",
    period: "Aug 2025",
    status: "Completed",
    certLink: "",
    points: [
      "90 hours hands-on labs: AWS & Huawei Cloud",
      "IAM · EC2 · S3 · EBS · RDS · DynamoDB · Virtual Networks",
      "Earned AWS Academy Cloud Foundations certification",
      "Final score: 99%",
    ],
  },
  {
    title: "HCIA – Datacom Certification",
    org: "Huawei ICT Talent Program",
    period: "Certified",
    status: "Certified",
    certLink: "",
    points: [
      "Networking fundamentals and hands-on experience using Huawei eNSP simulation tool",
    ],
  },
  {
    title: "System Programming Course",
    org: "Linux & Operating Systems",
    period: "",
    status: "Completed",
    certLink: "",
    points: [
      "Linux commands, file system hierarchy, process management, virtualization",
      "Built a custom shell from scratch using system calls in C",
    ],
  },
  // ── Add new training below ────────────────────────────────────────────────
  // {
  //   title: "...",
  //   org: "...",
  //   period: "...",
  //   status: "Completed",
  //   certLink: "",
  //   points: ["...", "..."],
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// VOLUNTEERING — to add a new role, copy one object and paste it in the array
// ─────────────────────────────────────────────────────────────────────────────
const volunteering = [
  { role: "Embedded Systems Head", org: "BreakinPoint", icon: "🏆" },
  { role: "Embedded Systems Supervisor", org: "BreakinPoint", icon: "👥" },
  { role: "Embedded Systems Vice Head", org: "IEEE Mansoura Chapter", icon: "⚡" },
  // { role: "...", org: "...", icon: "🎯" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Status styles helper
// ─────────────────────────────────────────────────────────────────────────────
function getBadgeStyle(status: string) {
  if (status === "In Progress") return "bg-amber-50 text-amber-600 border border-amber-200";
  if (status === "Certified")   return "bg-blue-50  text-blue-600  border border-blue-200";
  return "bg-green-50 text-green-600 border border-green-200";
}

function getDotColor(status: string) {
  if (status === "In Progress") return "bg-amber-400";
  if (status === "Certified")   return "bg-blue-500";
  return "bg-green-500";
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Education() {
  return (
    <section id="education" className="section bg-white">

      <h2 className="text-3xl font-semibold mb-4 text-center">
        Education &amp; Training
      </h2>
      <p className="text-center text-slate-400 mb-16 text-sm">
        Academic background, professional training &amp; certifications
      </p>

      <div className="max-w-3xl mx-auto space-y-16">

        {/* ══ EDUCATION ═══════════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">🎓</span>
            <h3 className="text-xl font-semibold text-slate-800">Education</h3>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="space-y-5">
            {education.map((e, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50
                           hover:border-indigo-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-semibold text-slate-800">
                      {e.degree}
                    </h4>
                    <p className="text-indigo-500 text-sm mt-1 font-medium">
                      {e.school}
                    </p>
                  </div>
                  {e.period && (
                    <span className="text-xs bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {e.period}
                    </span>
                  )}
                </div>
                {e.grade && (
                  <p className="text-slate-500 text-sm mt-3">{e.grade}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ══ TRAINING & CERTS ════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">🚀</span>
            <h3 className="text-xl font-semibold text-slate-800">
              Training &amp; Certifications
            </h3>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-200" />
            <div className="space-y-7">
              {trainings.map((t, i) => (
                <div key={i} className="flex gap-5 items-start">

                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div className={`w-10 h-10 rounded-full ${getDotColor(t.status)} flex items-center justify-center shadow-sm`}>
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-6 bg-slate-50 rounded-2xl border border-slate-100
                                  hover:border-indigo-200 hover:shadow-md transition-all duration-300">

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-semibold text-slate-800 leading-snug">
                          {t.title}
                        </h4>
                        <p className="text-indigo-500 text-sm mt-1 font-medium">
                          {t.org}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        {t.period && (
                          <span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ${getBadgeStyle(t.status)}`}>
                            {t.period}
                          </span>
                        )}
                        {t.certLink && (
                          <a
                            href={t.certLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-indigo-500 hover:text-indigo-700 flex items-center gap-1 transition"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      {t.points.map((pt, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-300 flex-shrink-0" />
                          <p className="text-sm text-slate-500 leading-relaxed">{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ VOLUNTEERING ════════════════════════════════════════════════ */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-xl">🤝</span>
            <h3 className="text-xl font-semibold text-slate-800">Volunteering</h3>
            <div className="flex-1 h-px bg-slate-200" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {volunteering.map((v, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl border border-slate-200 bg-white
                           hover:border-indigo-300 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-3">{v.icon}</div>
                <p className="font-semibold text-slate-800 text-sm mb-1">{v.role}</p>
                <p className="text-indigo-500 text-xs font-medium">{v.org}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}