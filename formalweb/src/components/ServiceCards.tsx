import Link from "next/link";

type Service = {
  id: number | string;
  title: string;
  description: string;
  href: string;
  icon?: string;
};

type ServiceCardsProps = {
  services: Service[];
};

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <section className="border-t border-slate-200 bg-white/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Consular Services</h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Important services for citizens, residents, and visitors.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group flex flex-col gap-4 rounded-lg border border-slate-200 bg-white/80 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                {service.icon ?? ""}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
              <span className="mt-auto inline-flex items-center text-sm font-semibold text-slate-700 transition group-hover:text-slate-900">
                Learn more
                <span aria-hidden className="ml-2 text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-600">
                  -&gt;
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
