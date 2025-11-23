import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl space-y-4 text-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Consulate General</p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Consulate General of XXX in Basel
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
          >
            Explore Services
          </Link>
          <Link
            href="/announcements"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            View Announcements
          </Link>
        </div>
      </div>
    </section>
  );
}
