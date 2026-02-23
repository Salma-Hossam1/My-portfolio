export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-12">Tech Skills</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
            DevOps & Infrastructure
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>Docker (Multi-stage builds, Compose)</li>
            <li>Kubernetes (Deployments & Services)</li>
            <li>CI/CD – GitHub Actions</li>
            <li>Linux (Processes, Networking)</li>
            <li>Git & Branching Strategies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-600">
            Development
          </h2>
          <ul className="space-y-3 text-slate-600">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>SQL & Database Design</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
