import { education, experience } from "../data";

const Experience = () => (
  <section id="experience" className="section border-t border-line bg-white">
    <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
      <div>
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">From the pharmacy counter to the system behind it.</h2>
        <p className="mt-4 text-[16px] leading-[1.75] sm:text-[18px]">
          Years of working inside real operations taught me to ask how the work is actually done before deciding
          what the software should do.
        </p>

        <h3 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.05em] text-brand">Education</h3>
        <ul className="mt-3 space-y-4">
          {education.map((item) => (
            <li key={item.title}>
              <p className="text-[16px] font-medium text-ink">{item.title}</p>
              <p className="text-[15px]">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <ol className="relative border-l border-line">
        {experience.map((job) => (
          <li key={job.period} className="relative pb-9 pl-6 last:pb-0 sm:pl-8">
            <span aria-hidden="true" className="absolute -left-[6px] top-[7px] h-[11px] w-[11px] rounded-full border-2 border-white bg-brand" />
            <p className="font-mono text-[13px] text-muted">{job.period}</p>
            <h3 className="mt-1 text-[19px] font-semibold">{job.title}</h3>
            <p className="text-[15px] font-medium text-brand">{job.place}</p>
            <p className="mt-2 max-w-[600px] text-[16px] leading-[1.7]">{job.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
