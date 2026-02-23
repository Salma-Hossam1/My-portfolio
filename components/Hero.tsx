import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section relative flex flex-col md:flex-row items-center gap-20 pb-40"
    >
      <div className="space-y-6 max-w-xl">
        <h1 className="text-5xl font-bold leading-tight tracking-tight">
          Salma Hossam
        </h1>

        <h2 className="text-xl font-medium text-indigo-600 mt-2">
          DevOps Engineer
        </h2>

        <p className="text-lg text-slate-600 leading-relaxed mt-6">
          I started my journey building software, but I was always curious about
          what happens behind the scenes — how systems scale, deploy, and
          survive real-world traffic.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mt-4">
          That curiosity led me to DevOps — where I design infrastructure,
          automate pipelines, and build environments that empower developers to
          ship confidently.
        </p>

        <div className="flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-slate-300 rounded-xl hover:border-indigo-500 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative w-[380px] h-[500px]">
        <Image
          src="/profile.jpg"
          alt="Salma Hossam"
          fill
          className="rounded-3xl object-cover shadow-2xl"
        />
      </div>
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-16"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64C240,96,480,96,720,80C960,64,1200,32,1440,48L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
