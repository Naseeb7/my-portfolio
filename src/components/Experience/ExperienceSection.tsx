import { IExperience } from "@/constants/types";

const ExperienceSection = ({
  type,
  role,
  company,
  period,
  summary,
  responsibilities,
  projects,
  leadership,
  achievements,
}: IExperience) => {
  return (
    <article className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">{role}</h2>
          <p className="text-base opacity-80">{company}</p>
        </div>

        <p className="text-sm opacity-60">{period}</p>

        {type === "independent" && (
          <p className="text-xs uppercase tracking-wider opacity-50">
            Independent Product Engineering
          </p>
        )}
      </div>

      <section className="flex flex-col gap-3">
        <h3 className="text-base font-semibold">Summary</h3>
        <p className="leading-7 opacity-80">{summary}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h3 className="text-base font-semibold">Product Engineering</h3>

        <ul className="flex flex-col gap-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="leading-7 opacity-80">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {projects?.length ? (
        <section className="flex flex-col gap-6">
          <h3 className="text-base font-semibold">Selected Product Work</h3>

          {projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-3">
              <div>
                <h4 className="font-medium">{project.name}</h4>
                <p className="mt-1 leading-7 opacity-80">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="leading-7 opacity-70">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border px-2 py-1 text-xs opacity-70"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      {leadership?.length ? (
        <section className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Leadership</h3>

          <ul className="flex flex-col gap-3">
            {leadership.map((item, index) => (
              <li key={index} className="leading-7 opacity-80">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {achievements?.length ? (
        <section className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">
            Recognition & Achievements
          </h3>

          <ul className="flex flex-col gap-2">
            {achievements.map((item, index) => (
              <li key={index} className="leading-7 opacity-80">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
};

export default ExperienceSection;
