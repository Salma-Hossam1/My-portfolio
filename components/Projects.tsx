

import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS — easy to edit
// To add a new project: copy one object and paste it into the `projects` array
//
// Fields:
//   icon      → path to image in /public/skills/ folder
//   title     → project name
//   desc      → short description shown on the card
//   tags      → array of tech tags shown as badges
//   github    → GitHub repo URL (or "" to hide the button)
//   demo      → live demo URL (or "" to hide the button)
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    icon: "/skills/pipeline.png",
    title: "CI/CD Automation System",
    desc: "Built a full automated deployment pipeline using GitHub Actions. Every push to main triggers a build, runs tests inside a Docker container, then deploys to the server via SSH — zero manual steps required.",
    tags: ["GitHub Actions", "Docker", "Linux", "Bash"],
    github: "https://github.com/Salma-Hossam1/GitHubActions_course",
    demo: "",
  },
  {
    icon: "/skills/linux.png",
    title: "Custom Linux Shell",
    desc: "Built a fully functional Unix shell from scratch in C using Linux system calls. Started with basic command execution and progressively added piping, redirection, background processes, and a built-in command parser — mirroring how real shells like Bash work internally.",
    tags: ["C", "Linux", "System Calls", "Bash"],
    github: "https://github.com/Salma-Hossam1/Linux-Tasks",
    demo: "",
  },
  {
    icon: "/skills/docker.png",
    title: "Docker Multi-Service Setup",
    desc: "Containerized a multi-service application (app + database + redis + nginx) using Docker Compose. Implemented multi-stage builds to keep images lean, added health checks, non-root users, and environment-based configuration — production-ready from day one.",
    tags: ["Docker", "Docker Compose", "Nginx", "Linux"],
    github: "https://github.com/Salma-Hossam1",
    demo: "",
  },
  {
    icon: "/skills/kubernetes.png",
    title: "Kubernetes Cluster Deployment",
    desc: "Set up a local Kubernetes cluster using Minikube and deployed a containerized application with Deployments, Services, and ConfigMaps. Practiced rolling updates, rollbacks, horizontal scaling, and resource limits — all managed through kubectl and YAML manifests.",
    tags: ["Kubernetes", "Minikube", "kubectl", "YAML", "Docker"],
    github: "https://github.com/Salma-Hossam1/kubernetes",
    demo: "",
  },
  {
    icon: "/skills/bash.svg",
    title: "SysAdmin Automation Scripts",
    desc: "A collection of Bash scripts that automate common Linux system administration tasks: real-time resource monitoring with alerts, automated backups with versioning, user management, server health reports, and one-command environment provisioning on Ubuntu/CentOS.",
    tags: ["Bash", "Linux", "Cron", "Automation", "Ubuntu"],
    github: "https://github.com/Salma-Hossam1/Shell-Scripting",
    demo: "",
  },
  {
    icon: "/skills/aws.svg",
    title: "Cloud Infrastructure — AWS & Huawei",
    desc: "Hands-on cloud labs during the NTI training program. Deployed and configured EC2 instances, S3 buckets, IAM roles, RDS databases, DynamoDB tables, and virtual networks on both AWS and Huawei Cloud platforms. Achieved a final score of 99%.",
    tags: ["AWS", "Huawei Cloud", "EC2", "S3", "IAM", "RDS"],
    github: "",
    demo: "",
  },
  // ── Add new project below ─────────────────────────────────────────────────
  // {
  //   icon: "/skills/terraform.png",
  //   title: "Infrastructure as Code with Terraform",
  //   desc: "...",
  //   tags: ["Terraform", "AWS", "IaC"],
  //   github: "https://github.com/Salma-Hossam1/...",
  //   demo: "",
  // },
];

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-transparent to-indigo-50/40 rounded-3xl"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
      <p className="text-center text-slate-400 mb-16 text-sm">
        Real-world projects built during training and self-learning
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-8 bg-white rounded-3xl shadow-sm border border-slate-200
                       hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-4">
              <Image
                src={project.icon}
                alt={project.title}
                width={48}
                height={48}
                className="object-contain flex-shrink-0 mt-1"
              />
              <h3 className="text-lg font-semibold text-slate-800 leading-snug">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
              {project.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-indigo-50 text-indigo-600 text-xs px-3 py-1 rounded-full border border-indigo-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600
                             hover:text-indigo-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-slate-600
                             hover:text-indigo-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {!project.github && !project.demo && (
                <span className="text-xs text-slate-400 italic">Training project</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}