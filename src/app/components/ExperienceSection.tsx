import React from "react";
import { IExperience } from "../constants/types";

const ExperienceSection = ({
  company,
  endDate,
  experience,
  keyAchievements,
  role,
  startDate,
  technologiesUsed,
  awards,
}: IExperience) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-extrabold">
          {role} - {company}
        </h2>
        <div className="text-primary-100 font-bold">
          {startDate} - {endDate}
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-4">
        {experience?.map((exp, idx) => (
          <li key={`${idx}-${exp}`}>{exp}</li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-extrabold">Key Achievements:</h3>
        <ul className="list-disc pl-5 space-y-4">
          {keyAchievements?.map((item, index) => {
            return <li key={`${index}_experience`}>{item}</li>;
          })}
        </ul>
      </div>
      {awards && (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold">Awards:</h3>
          <ul className="list-disc pl-5 space-y-4">
            {awards?.map((item, index) => {
              return <li key={`${index}_experience`}>{item}</li>;
            })}
          </ul>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-extrabold">Technologies used:</h3>
        <ul className="list-disc pl-5 space-y-4">
          {technologiesUsed?.map((item, index) => {
            return <li key={`${index}_experience`}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;
