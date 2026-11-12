import { label, profile } from "../data";

const Hero = () => (
  <section id="top" className="container-page grid items-center gap-8 pb-12 pt-8 sm:pt-14 lg:grid-cols-[1.2fr_1fr] lg:gap-[72px] lg:pb-20 lg:pt-[72px]">
    <div>
      <p className="text-[14px] font-medium tracking-[0.02em] text-brand">{profile.role}</p>
      <h1 className="mt-4 text-[33px] font-semibold leading-[1.14] tracking-[-0.02em] sm:text-[44px] lg:mt-5 lg:text-[52px]">
        The right system, <span className="highlight">prescribed</span> for how your business works.
      </h1>
      <p className="mt-4 max-w-[520px] text-[16px] leading-[1.75] sm:text-[18px] lg:mt-6">
        I spent years in hospital pharmacy, where a wrong process has real consequences. I bring the same care to
        Odoo: diagnose first, then configure, then build the custom modules myself.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 sm:gap-[14px] lg:mt-[34px]">
        <a href="#case-studies" className="btn-primary">See case studies</a>
        <a href="#contact" className="btn-secondary">Get in touch</a>
      </div>
    </div>

    <aside className="card overflow-hidden shadow-card" aria-label="Profile summary">
      <div className="flex justify-between border-b border-line bg-tint px-[22px] py-[14px] font-mono text-[12px] tracking-[0.06em] text-body">
        <span>PROFILE LABEL</span>
        <span>No. 001</span>
      </div>
      <p className="px-[22px] pb-1 pt-5 text-[25px] font-semibold text-ink sm:text-[30px]">
        Rx <span className="text-plum">Odoo</span>
      </p>
      <dl className="px-[22px] pb-[14px] pt-[6px]">
        {label.map((row) => (
          <div key={row.term} className="grid grid-cols-[96px_1fr] border-b border-[#edf1ef] py-[11px] text-[14px] last:border-0 sm:grid-cols-[110px_1fr] sm:py-[13px] sm:text-[15px]">
            <dt className="text-muted">{row.term}</dt>
            <dd className="font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-t border-line bg-[#fafbfa] px-[22px] py-[14px] text-[13px] text-body">
        Use: requirements → implementation → custom development
      </p>
    </aside>
  </section>
);

export default Hero;
