import { services } from "../data";

const Services = () => (
  <section id="services" className="section border-t border-line bg-white">
    <div className="container-page">
      <p className="eyebrow">Services</p>
      <h2 className="section-title">One person from the first workshop to the last line of code.</h2>
      <p className="section-lead">
        Most projects lose detail in the handover between the consultant and the developer. I do both, so what the
        business asked for is what gets built.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-line bg-paper p-6 sm:p-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.05em] text-brand">{service.step}</p>
            <h3 className="mt-2 text-[20px] font-semibold">{service.title}</h3>
            <p className="mt-2 text-[15px] leading-[1.65]">{service.summary}</p>
            <ul className="mt-5 space-y-[10px] border-t border-line pt-5 text-[15px] leading-[1.5]">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[9px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
