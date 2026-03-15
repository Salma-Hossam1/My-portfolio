// ⚠️ When you add a skill here, also update DevMode.tsx → skills command
import Image from "next/image";

export default function Skills() {
  const skills = [
    // 1. Jenkins — currently learning
    {
      name: "Jenkins",
      image: "/skills/jenkins.svg",
      desc: "Building and managing CI/CD pipelines with Jenkins automation server.",
    },

    // 2. Terraform — currently learning
    {
      name: "Terraform",
      image: "/skills/terraform.svg",
      desc: "Provisioning and managing cloud infrastructure as code.",
    },

    // 3. SQL — currently learning
    {
      name: "SQL",
      image: "/skills/sql.svg",
      desc: "Designing and querying relational databases.",
    },

    {
      name: "Docker",
      image: "/skills/docker.png",
      desc: "Containerizing applications for scalable, reproducible deployments.",
    },
    {
      name: "Kubernetes",
      image: "/skills/kubernetes.png",
      desc: "Orchestrating containerized workloads with high availability.",
    },
    {
      name: "GitHub Actions",
      image: "/skills/github.png",
      desc: "Automating CI/CD pipelines — build, test, deploy seamlessly.",
    },
    {
      name: "Linux",
      image: "/skills/linux.png",
      desc: "Managing infrastructure, system programming & server environments.",
    },
    {
      name: "Ansible",
      image: "/skills/ansible.svg",
      desc: "Automating server configuration and infrastructure management.",
    },
    {
      name: "Bash Scripting",
      image: "/skills/bash.svg",
      desc: "Writing automation scripts for system administration tasks.",
    },
    {
      name: "AWS",
      image: "/skills/aws.svg",
      desc: "Cloud infrastructure: EC2, S3, IAM, RDS, VPC and more.",
    },
    {
      name: "Next.js",
      image: "/skills/next.png",
      desc: "Building optimized production-grade frontends.",
    },
    {
      name: "React",
      image: "/skills/react.png",
      desc: "Creating interactive, component-based user interfaces.",
    },
  ];

  return (
    <section id="skills" className="section bg-white">
      <h2 className="text-3xl font-semibold mb-16 text-center">Tech Stack</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-10 bg-white/70 backdrop-blur-sm rounded-3xl border border-slate-200 hover:-translate-y-2 transition duration-300"
          >
            <div className="mb-6">
              <Image
                src={skill.image}
                alt={skill.name}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-600 transition">
              {skill.name}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
