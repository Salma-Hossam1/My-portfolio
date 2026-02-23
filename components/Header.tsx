"use client";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="font-semibold text-lg">
          Salma Hossam
        </a>

        <nav className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#hero" className="hover:text-indigo-600">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-600">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-600">
            Projects
          </a>
          <a href="#devmode" className="hover:text-indigo-600">
            Dev Mode
          </a>
          <a href="#contact" className="hover:text-indigo-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
