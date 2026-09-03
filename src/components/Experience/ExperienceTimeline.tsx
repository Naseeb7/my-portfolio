import { IExperience } from "@/constants/types";
import ExperienceSection from "./ExperienceSection";

interface ExperienceTimelineProps {
  experiences: IExperience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-current opacity-20" />

      <div className="flex flex-col gap-16">
        {experiences.map((experience) => (
          <div
            key={`${experience.company}-${experience.role}`}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-primary-100">
              <span className="absolute -inset-1 rounded-full border border-current opacity-60 animate-ping" />
            </div>

            <ExperienceSection {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
