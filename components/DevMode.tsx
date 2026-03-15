
"use client";

import { useEffect, useRef, useState } from "react";

const WELCOME = [
  "salma@devops:~$ whoami",
  "Salma Hossam",
  "DevOps Engineer | Cloud & CI/CD Enthusiast",
  "",
  "Type 'help' to see available commands.",
  "",
];

type HistoryLine = {
  text: string;
  isCommand?: boolean;
  isNew?: boolean; // marks the command line where scroll should jump to
};

export default function DevMode() {
  const [history, setHistory] = useState<HistoryLine[]>(
    WELCOME.map((t) => ({ text: t, isCommand: t.startsWith("salma@devops") })),
  );
  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const outputRef = useRef<HTMLDivElement | null>(null);
  const newCommandRef = useRef<HTMLDivElement | null>(null);

  // Entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Scroll to the command line itself — so result starts at top of view
  useEffect(() => {
    if (newCommandRef.current && outputRef.current) {
      const container = outputRef.current;
      const el = newCommandRef.current;
      container.scrollTop = el.offsetTop - container.offsetTop;
    }
  }, [history]);

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "  about      → who I am",
      "  skills     → my tech stack",
      "  education  → training & certifications",
      "  projects   → what I built",
      "  contact    → how to reach me",
      "  clear      → clear history",
    ],
    about: [
      "I'm a Computer Science student at Mansoura University",
      "currently on the DevOps Engineering track (DEPI).",
      "",
      "I started with low-level systems & Linux internals,",
      "then moved into DevOps — automating infrastructure,",
      "building CI/CD pipelines, and containerizing apps.",
      "",
      "I don't just run commands. I design systems.",
    ],
    // ⚠️ Keep in sync with Skills.tsx when you add new skills
    skills: [
      "DevOps & Infrastructure:",
      "  - Docker & Docker Compose",
      "  - Kubernetes (Minikube, kubectl)",
      "  - GitHub Actions (CI/CD)",
      "  - Jenkins (CI/CD)             ← learning",
      "  - Ansible (Config Management)",
      "  - Linux Administration",
      "  - Bash Scripting",
      "",
      "Infrastructure as Code:",
      "  - Terraform                   ← learning",
      "",
      "Cloud:",
      "  - AWS (EC2, S3, IAM, RDS, DynamoDB)",
      "  - Huawei Cloud",
      "",
      "Database:",
      "  - SQL                         ← learning",
      "",
      "Development:",
      "  - React & Next.js",
      "  - C / C++ / JavaScript",
    ],
    education: [
      "🎓 B.Sc. Computer & Control Systems Engineering",
      "   Mansoura University — Grade: Excellent",
      "",
      "🚀 DevOps Engineering Track",
      "   Digital Egypt Pioneers Initiative (DEPI) — In Progress",
      "",
      "☁️  Cloud Essentials Summer Training",
      "   NTI — ITIDA | Score: 99% | Aug 2025",
      "",
      "📡 HCIA Datacom Certification",
      "   Huawei ICT Talent Program",
    ],
    projects: [
      "1. CI/CD Automation System",
      "   GitHub Actions: build → test → deploy",
      "   github.com/Salma-Hossam1/GitHubActions_course",
      "",
      "2. Custom Linux Shell",
      "   Built from scratch in C using system calls",
      "   github.com/Salma-Hossam1/Linux-Tasks",
      "",
      "3. Docker Multi-Service Setup",
      "   App + DB + Redis + Nginx with Compose",
      "   github.com/Salma-Hossam1",
      "",
      "4. Kubernetes Cluster Deployment",
      "   Deployments, Services, ConfigMaps, rolling updates",
      "   github.com/Salma-Hossam1/kubernetes",
      "",
      "5. SysAdmin Automation Scripts",
      "   Bash scripts for monitoring, backup & provisioning",
      "   github.com/Salma-Hossam1/Shell-Scripting",
    ],
    contact: [
      "GitHub:   github.com/Salma-Hossam1",
      "LinkedIn: linkedin.com/in/salma-hossam--/",
      "Email:    salmahossam574@gmail.com",
      "Phone:    01003779904",
    ],
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");

    if (cmd === "clear") {
      setHistory(
        WELCOME.map((t) => ({
          text: t,
          isCommand: t.startsWith("salma@devops"),
        })),
      );
      return;
    }
    if (cmd === "") return;

    // Mark first line (the command itself) as isNew so we scroll to it
    const output = commands[cmd] ?? [
      `Command not found: '${cmd}'. Type 'help'.`,
    ];
    setHistory((prev) => [
      // Remove isNew from all previous lines
      ...prev.map((l) => ({ ...l, isNew: false })),
      { text: `salma@devops:~$ ${cmd}`, isCommand: true, isNew: true },
      ...output.map((t) => ({ text: t, isCommand: false, isNew: false })),
      { text: "", isNew: false },
    ]);
  };

  return (
    <section
      ref={sectionRef}
      id="devmode"
      className="py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Custom scrollbar styles */}
      <style>{`
        .terminal-output::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-output::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-output::-webkit-scrollbar-thumb {
          background: #22c55e55;
          border-radius: 99px;
        }
        .terminal-output::-webkit-scrollbar-thumb:hover {
          background: #22c55e99;
        }
      `}</style>

      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dev Mode</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A terminal-style interface to explore my technical profile. Type
            commands and interact like a real DevOps environment.
          </p>
        </div>

        {/* Terminal */}
        <div
          className={`w-full max-w-4xl mx-auto bg-neutral-900 text-green-400
            font-mono rounded-2xl border border-neutral-700 overflow-hidden
            flex flex-col h-[460px]
            transition-all duration-1000 ${
              isVisible
                ? "shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(34,197,94,0.25)] scale-[1.02]"
                : "shadow-xl scale-100"
            }`}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-neutral-800 flex-shrink-0">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="ml-3 text-xs text-neutral-500">
              salma@devops — terminal
            </span>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            className="terminal-output flex-1 overflow-y-auto px-6 py-4 text-sm leading-relaxed"
          >
            {history.map((line, i) => (
              <div
                key={i}
                ref={line.isNew ? newCommandRef : null}
                className={
                  line.isCommand
                    ? "text-green-400 font-semibold"
                    : "text-green-300/75"
                }
              >
                {line.text || "\u00A0"}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t border-neutral-800 px-6 py-4">
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-green-400 text-sm font-semibold whitespace-nowrap">
                salma@devops:~$
              </span>
              <input
                className="bg-transparent outline-none flex-1 text-green-400 caret-green-400 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>

        {/* Signature */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Built & Designed by{" "}
          <span className="text-indigo-500 font-medium">Salma Hossam</span> ©{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
