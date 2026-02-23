// export default function Projects() {
//   return (
//     <section id="projects" className="section">
//       <h2 className="text-3xl font-semibold mb-12">Projects</h2>

//       <div className="grid md:grid-cols-2 gap-10">
//         <div className="p-8 bg-white rounded-2xl shadow-md border border-slate-200">
//           <h3 className="text-xl font-semibold mb-3">
//             CI/CD Automation System
//           </h3>

//           <p className="text-slate-600 mb-4">
//             Automated full deployment pipeline using GitHub Actions & Docker.
//           </p>

//           <div className="flex gap-3 text-xs">
//             <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
//               Docker
//             </span>
//             <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
//               CI/CD
//             </span>
//             <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
//               Linux
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section bg-gradient-to-b from-transparent to-indigo-50/40 rounded-3xl"
    >
      <h2 className="text-3xl font-semibold mb-16 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div
          className="p-10 bg-white rounded-3xl shadow-md border border-slate-200
hover:shadow-2xl hover:-translate-y-1
transition-all duration-300"
        >
          <Image
            src="/skills/pipeline.png"
            alt="CI/CD"
            width={60}
            height={60}
            className="mb-6"
          />

          <h3 className="text-xl font-semibold mb-4">
            CI/CD Automation System
          </h3>

          <p className="text-slate-600 mb-6 leading-relaxed">
            Designed and implemented a full deployment pipeline integrating
            Docker containers with GitHub Actions, ensuring automated and
            reliable production releases.
          </p>

          <div className="flex flex-wrap gap-3 text-xs">
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              Docker
            </span>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              GitHub Actions
            </span>
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
              Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
