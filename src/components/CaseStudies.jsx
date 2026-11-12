import { caseStudies } from "../data";

const CaseStudies = () => (
  <section id="case-studies" className="section border-t border-line">
    <div className="container-page">
      <p className="eyebrow">Case studies</p>
      <h2 className="section-title">Problems I've worked through.</h2>
      <p className="section-lead">Each one follows the same order: the problem, what I did, and where it stands.</p>

      <div className="mt-10 space-y-5">
        {caseStudies.map((study, index) => (
          <article key={study.title} className="card overflow-hidden">
            <header className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-tint px-5 py-3 font-mono text-[12px] tracking-[0.06em] text-body sm:px-8">
              <span>
                CASE {String(index + 1).padStart(2, "0")} · {study.tag.toUpperCase()}
              </span>
              <span className="rounded-full border border-line bg-white px-3 py-1 font-sans text-[12px] font-medium tracking-normal text-ink">
                {study.status}
              </span>
            </header>

            <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
              <div>
                <h3 className="text-[22px] font-semibold leading-snug sm:text-[26px]">{study.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{study.client}</p>
                <h4 className="mt-6 text-[13px] font-semibold uppercase tracking-[0.05em] text-brand">The problem</h4>
                <p className="mt-2 text-[16px] leading-[1.7]">{study.problem}</p>
              </div>

              <div>
                <h4 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-brand">What I did</h4>
                <ul className="mt-3 space-y-3 text-[16px] leading-[1.6]">
                  {study.work.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[10px] h-[6px] w-[6px] shrink-0 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-tint p-4 sm:p-5">
                  <h4 className="text-[13px] font-semibold uppercase tracking-[0.05em] text-brand">Where it stands</h4>
                  <p className="mt-1 text-[16px] leading-[1.65] text-ink">{study.result}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                  {study.stack.map((item) => (
                    <li key={item} className="chip">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
