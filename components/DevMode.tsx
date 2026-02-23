// "use client";

// import { useEffect, useRef, useState } from "react";

// // type Line = {
// //   type: "input" | "output";
// //   content: string;
// // };

// // const fakeProjects = [
// //   {
// //     name: "DevOps AI Platform",
// //     description:
// //       "Full-stack platform with CI/CD, Docker, AWS deployment and AI microservice.",
// //   },
// //   {
// //     name: "IoT Competition System",
// //     description:
// //       "System to manage IoT competitions with evaluation metrics and live scoring.",
// //   },
// // ];

// export default function DevMode() {
//   const [history, setHistory] = useState<string[]>([
//     "salma@devops:~$ whoami",
//     "Salma Hossam",
//     "DevOps Engineer | Cloud & CI/CD Enthusiast",
//     "",
//     "Type 'help' to see available commands.",
//   ]);

//   const [input, setInput] = useState("");

//   const commands: Record<string, string[]> = {
//     help: [
//       "Available commands:",
//       "about",
//       "skills",
//       "dev",
//       "projects",
//       "contact",
//       "clear",
//     ],

//     about: [
//       "I am a DevOps Engineer with a software engineering mindset.",
//       "I understand not only how to deploy systems,",
//       "but how applications are built, structured, and scaled.",
//       "",
//       "With a background in React, Next.js, and SQL,",
//       "I bridge the gap between development and operations.",
//       "",
//       "I don't just run commands.",
//       "I design systems.",
//     ],

//     skills: [
//       "Core DevOps Skills:",
//       "- Docker (Containerization)",
//       "- Kubernetes (Basic Deployment)",
//       "- Git & GitHub (Branching workflow)",
//       "- CI/CD (GitHub Actions)",
//       "- Linux (Permissions, Processes, Networking)",
//     ],

//     dev: [
//       "Development Knowledge:",
//       "- React (SPA build & deployment)",
//       "- Next.js (SSR & Production builds)",
//       "- SQL (Database structure & queries)",
//       "- REST APIs integration",
//     ],

//     projects: [
//       "1. Dockerized Full-Stack App",
//       "   - Multi-stage Dockerfile",
//       "   - Docker Compose setup",
//       "",
//       "2. CI/CD Pipeline",
//       "   - Automated build & test",
//       "   - GitHub Actions workflow",
//       "",
//       "3. Kubernetes Deployment",
//       "   - Deployment & Service YAML",
//       "   - Scalable replicas",
//     ],

//     contact: [
//       "GitHub: github.com/yourusername",
//       "LinkedIn: linkedin.com/in/yourusername",
//       "Email: your@email.com",
//     ],
//   };

//   const handleCommand = (e: React.FormEvent) => {
//     e.preventDefault();
//     const cmd = input.trim().toLowerCase();

//     if (cmd === "clear") {
//       setHistory([]);
//       setInput("");
//       return;
//     }

//     if (commands[cmd]) {
//       setHistory((prev) => [
//         ...prev,
//         `salma@devops:~$ ${cmd}`,
//         ...commands[cmd],
//         "",
//       ]);
//     } else {
//       setHistory((prev) => [
//         ...prev,
//         `salma@devops:~$ ${cmd}`,
//         "Command not found. Type 'help'.",
//         "",
//       ]);
//     }

//     setInput("");
//   };

//   return (
//     <main
//       className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center p-4"
//       id="devmode"
//     >
//       <div className="w-full max-w-4xl bg-neutral-900 rounded-2xl shadow-2xl p-6 overflow-hidden">
//         {/* Terminal Header */}
//         <div className="flex items-center mb-4 space-x-2">
//           <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//           <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//         </div>

//         {/* Terminal Content */}
//         <div className="whitespace-pre-wrap text-sm sm:text-base max-h-[60vh] overflow-y-auto">
//           {history.map((line, i) => (
//             <div key={i}>{line}</div>
//           ))}
//         </div>

//         {/* Input */}
//         <form onSubmit={handleCommand} className="flex mt-4">
//           <span className="mr-2">salma@devops:~$</span>
//           <input
//             className="bg-transparent outline-none flex-1"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             autoFocus
//           />
//         </form>

//         {/* Signature */}
//         <div className="mt-6 text-xs text-gray-500 border-t border-gray-700 pt-4">
//           Built & Designed by{" "}
//           <span className="text-green-400 font-semibold">Salma Hossam</span> ©{" "}
//           {new Date().getFullYear()}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

export default function DevMode() {
  const [history, setHistory] = useState<string[]>([
    "salma@devops:~$ whoami",
    "Salma Hossam",
    "DevOps Engineer | Cloud & CI/CD Enthusiast",
    "",
    "Type 'help' to see available commands.",
  ]);

  const [input, setInput] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // 👇 Animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const commands: Record<string, string[]> = {
    help: [
      "Available commands:",
      "about",
      "skills",
      "dev",
      "projects",
      "contact",
      "clear",
    ],

    about: [
      "I am a DevOps Engineer with a software engineering mindset.",
      "I understand not only how to deploy systems,",
      "but how applications are built, structured, and scaled.",
      "",
      "With a background in React, Next.js, and SQL,",
      "I bridge the gap between development and operations.",
      "",
      "I don't just run commands.",
      "I design systems.",
    ],

    skills: [
      "Core DevOps Skills:",
      "- Docker (Containerization)",
      "- Kubernetes (Basic Deployment)",
      "- Git & GitHub (Branching workflow)",
      "- CI/CD (GitHub Actions)",
      "- Linux (Permissions, Processes, Networking)",
    ],

    dev: [
      "Development Knowledge:",
      "- React (SPA build & deployment)",
      "- Next.js (SSR & Production builds)",
      "- SQL (Database structure & queries)",
      "- REST APIs integration",
    ],

    projects: [
      "1. Dockerized Full-Stack App",
      "   - Multi-stage Dockerfile",
      "   - Docker Compose setup",
      "",
      "2. CI/CD Pipeline",
      "   - Automated build & test",
      "   - GitHub Actions workflow",
      "",
      "3. Kubernetes Deployment",
      "   - Deployment & Service YAML",
      "   - Scalable replicas",
    ],

    contact: [
      "GitHub: github.com/yourusername",
      "LinkedIn: linkedin.com/in/yourusername",
      "Email: your@email.com",
    ],
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    if (commands[cmd]) {
      setHistory((prev) => [
        ...prev,
        `salma@devops:~$ ${cmd}`,
        ...commands[cmd],
        "",
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        `salma@devops:~$ ${cmd}`,
        "Command not found. Type 'help'.",
        "",
      ]);
    }

    setInput("");
  };

  return (
    <section
      ref={sectionRef}
      id="devmode"
      className="py-32 bg-gradient-to-b from-slate-50 to-white"
    >
      <div
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dev Mode</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A terminal-style interface to explore my technical profile. Type
            commands and interact like a real DevOps environment.
          </p>
        </div>

        {/* Terminal Box */}
        <div
          className={`w-full max-w-4xl mx-auto bg-neutral-900 text-green-400 font-mono rounded-2xl p-6 border border-slate-800 transition-all duration-1000 ${
            isVisible
              ? "shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(34,197,94,0.35)] scale-[1.02]"
              : "shadow-xl scale-100"
          }`}
        >
          {/* Terminal Header */}
          <div className="flex items-center mb-4 space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Terminal Content */}
          <div className="whitespace-pre-wrap text-sm sm:text-base max-h-[60vh] overflow-y-auto">
            {history.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleCommand} className="flex mt-4">
            <span className="mr-2">salma@devops:~$</span>
            <input
              className="bg-transparent outline-none flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
          </form>

          {/* Signature */}
          <div className="mt-6 text-xs text-gray-500 border-t border-gray-700 pt-4">
            Built & Designed by{" "}
            <span className="text-green-400 font-semibold">Salma Hossam</span> ©{" "}
            {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </section>
  );
}
