import { earlierWork, skills } from "../data";

const Skills = () => (
  <section id="skills" className="section border-t border-line">
    <div className="container-page">
      <p className="eyebrow">Skills</p>
      <h2 className="section-title">Odoo first. Everything else supports it.</h2>

      <dl className="card mt-10 divide-y divide-line">
        {skills.map((group) => (
          <div key={group.group} className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-start sm:p-6">
            <dt className={`text-[16px] font-semibold ${group.primary ? "text-plum" : "text-ink"}`}>{group.group}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className={group.primary ? "chip border-mint bg-tint text-ink" : "chip"}>
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 rounded-2xl border border-dashed border-line p-5 sm:p-6">
        <h3 className="text-[16px] font-semibold">Earlier front-end work</h3>
        <p className="mt-1 text-[15px] leading-[1.65]">
          Before Odoo I built interfaces with React. It's why the portals and themes I deliver look finished.
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium">
          {earlierWork.map((item) => (
            <li key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-brand underline decoration-mint decoration-2 underline-offset-4 hover:decoration-brand">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
