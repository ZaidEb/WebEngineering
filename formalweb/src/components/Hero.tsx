import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="max-w-3xl space-y-4 text-slate-900">
          <p style={{ color: 'white' }} className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Consulate General</p>
          <h1 style={{ color: 'white' }} className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Consulate General of XXX in Basel
          </h1>
        </div>

        <div style={{ color: 'white' }} className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
          >
            Services
          </Link>
          <Link
            href="/announcements"
            className="inline-flex items-center justify-center
rounded-md bg-blue-50 border border-blue-200 px-6 py-3 text-sm
font-semibold text-blue-900 transition
hover:bg-blue-100
focus-visible:outline focus-visible:outline-2
focus-visible:outline-offset-2 focus-visible:outline-blue-400

"
          >
            View Announcements
          </Link>
        </div>
      </div>
    </section>
  );
}
