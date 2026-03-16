"use client";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES — to add a new service, copy one object and paste it in the array
// ─────────────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: "⚡",
    title: "CI/CD Pipeline Setup",
    desc: "Design and implement automated build, test, and deploy pipelines using GitHub Actions or Jenkins — zero manual deployments.",
    points: [
      "GitHub Actions & Jenkins workflows",
      "Automated testing & security scanning",
      "Zero-downtime deployments with rollback",
    ],
    color: "indigo",
  },
  {
    icon: "🐳",
    title: "Docker & Containerization",
    desc: "Containerize your application with production-ready Docker setup so it runs consistently on any environment.",
    points: [
      "Multi-stage Dockerfile (lightweight images)",
      "Docker Compose for multi-service apps",
      "Security best practices (non-root, healthchecks)",
    ],
    color: "blue",
  },
  {
    icon: "☸️",
    title: "Kubernetes Deployment",
    desc: "Deploy and manage your application on Kubernetes with high availability, auto-scaling, and zero downtime.",
    points: [
      "Deployments, Services & ConfigMaps",
      "Rolling updates & rollback strategy",
      "Resource limits & liveness probes",
    ],
    color: "cyan",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure (AWS)",
    desc: "Provision and configure cloud infrastructure on AWS tailored to your project needs — scalable and cost-efficient.",
    points: [
      "EC2, S3, IAM, RDS, VPC setup",
      "Infrastructure as Code with Terraform",
      "Security groups & access management",
    ],
    color: "amber",
  },
  {
    icon: "📊",
    title: "Monitoring & Observability",
    desc: "Set up real-time monitoring and alerting so you always know what's happening in your infrastructure.",
    points: [
      "Prometheus metrics collection",
      "Grafana dashboards & visualization",
      "Alerts for critical thresholds",
    ],
    color: "green",
  },
];

const colorMap: Record<string, { card: string; badge: string; dot: string; icon: string }> = {
  indigo: {
    card: "hover:border-indigo-300 hover:shadow-indigo-100",
    badge: "bg-indigo-50 text-indigo-600 border-indigo-100",
    dot: "bg-indigo-400",
    icon: "bg-indigo-50",
  },
  blue: {
    card: "hover:border-blue-300 hover:shadow-blue-100",
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    dot: "bg-blue-400",
    icon: "bg-blue-50",
  },
  cyan: {
    card: "hover:border-cyan-300 hover:shadow-cyan-100",
    badge: "bg-cyan-50 text-cyan-600 border-cyan-100",
    dot: "bg-cyan-400",
    icon: "bg-cyan-50",
  },
  amber: {
    card: "hover:border-amber-300 hover:shadow-amber-100",
    badge: "bg-amber-50 text-amber-600 border-amber-100",
    dot: "bg-amber-400",
    icon: "bg-amber-50",
  },
  green: {
    card: "hover:border-green-300 hover:shadow-green-100",
    badge: "bg-green-50 text-green-600 border-green-100",
    dot: "bg-green-400",
    icon: "bg-green-50",
  },
};

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <h2 className="text-3xl font-semibold mb-4 text-center">Services</h2>
      <p className="text-center text-slate-400 mb-16 text-sm">
        What I can build and deliver for you
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => {
          const c = colorMap[service.color];
          return (
            <div
              key={service.title}
              className={`group flex flex-col p-8 rounded-3xl border border-slate-200 bg-white
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${c.card}`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-2xl ${c.icon} flex items-center justify-center text-2xl mb-6`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>

              {/* Points */}
              <div className="space-y-2">
                {service.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                    <p className="text-sm text-slate-500 leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-slate-500 text-sm mb-6">
          Have a project in mind? Let's talk.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-xl
            hover:bg-indigo-700 transition font-medium text-sm"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}