import Navbar from "./Navbar";

const languages = ["EN","دری"];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
            CG
          </div>
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-wide text-slate-500">Consulate General</p>
            <p className="text-lg font-semibold text-slate-900">Consulate General of XXX in Basel</p>
          </div>
        </div>

        <div className="hidden items-center gap-1 text-sm text-slate-700 sm:flex">
          {languages.map((lang, idx) => (
            <span key={lang} className="flex items-center">
              {idx > 0 && <span className="mx-2 text-slate-300">|</span>}
              <button
                type="button"
                className="rounded px-2 py-1 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                {lang}
              </button>
            </span>
          ))}
        </div>
      </div>

      <Navbar />
    </header>
  );
}
