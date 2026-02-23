export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Salma Hossam. Built with Next.js.
      </div>
    </footer>
  );
}
