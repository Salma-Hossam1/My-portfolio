// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 text-center">
//       <h3 className="text-2xl font-bold text-emerald-400 mb-6">Contact Me</h3>

//       <div className="flex justify-center gap-6 flex-wrap">
//         <a
//           href="https://github.com/Salma-Hossam1"
//           target="_blank"
//           className="border border-emerald-400 px-5 py-2 rounded-lg hover:bg-emerald-400 hover:text-black transition"
//         >
//           GitHub
//         </a>

//         <a
//           href="https://www.linkedin.com/in/salma-hossam--/"
//           target="_blank"
//           className="border border-emerald-400 px-5 py-2 rounded-lg hover:bg-emerald-400 hover:text-black transition"
//         >
//           LinkedIn
//         </a>

//         <a
//           href="/MyCv.pdf"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-emerald-500 text-black px-5 py-2 rounded-lg hover:scale-105 transition"
//         >
//           Download CV
//         </a>
//       </div>
//     </section>
//   );
// }

"use client";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Whether you have a DevOps opportunity, collaboration idea, or just
            want to connect — I’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <a
              href="https://github.com/Salma-Hossam1"
              target="_blank"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <Github className="text-slate-700" />
              <span className="text-slate-700">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/salma-hossam--/"
              target="_blank"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <Linkedin className="text-blue-600" />
              <span className="text-slate-700">LinkedIn</span>
            </a>

            <a
              href="/MyCv.pdf"
              target="_blank"
              className="flex items-center gap-4 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
            >
              <FileText className="text-slate-700" />
              <span className="text-slate-700">Download CV</span>
            </a>
          </div>

          {/* Right Side - Form */}
          <form
            action="https://formspree.io/f/maqdpegd"
            method="POST"
            className="space-y-6 p-8 rounded-2xl border border-slate-200 shadow-sm"
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-600">
                Your Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-black py-3 rounded-lg hover:scale-[1.02] transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
