// export default function Skills() {
//   const skills = [
//     "Docker",
//     "Kubernetes",
//     "GitHub Actions",
//     "Next.js",
//     "React",
//     "Linux",
//   ];

//   return (
//     <section id="skills" className="section section-light rounded-3xl">
//       <h2 className="text-3xl font-semibold mb-12">Tech Stack</h2>

//       <div className="grid md:grid-cols-3 gap-8">
//         {skills.map((skill) => (
//           <div
//             key={skill}
//             className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition"
//           >
//             <h3 className="font-semibold text-lg mb-2">{skill}</h3>
//             <p className="text-slate-500 text-sm">
//               Professional experience working with {skill}.
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "Docker",
      image: "/skills/docker.png",
      desc: "Containerizing applications for scalable deployments.",
    },
    {
      name: "Kubernetes",
      image: "/skills/kubernetes.png",
      desc: "Orchestrating containerized workloads efficiently.",
    },
    {
      name: "GitHub Actions",
      image: "/skills/github.png",
      desc: "Automating CI/CD pipelines seamlessly.",
    },
    {
      name: "Next.js",
      image: "/skills/next.png",
      desc: "Building optimized production-grade frontends.",
    },
    {
      name: "React",
      image: "/skills/react.png",
      desc: "Creating interactive user interfaces.",
    },
    {
      name: "Linux",
      image: "/skills/linux.png",
      desc: "Managing infrastructure & server environments.",
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
            {/* Logo */}
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
