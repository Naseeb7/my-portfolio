import React from "react";

type SkillCardProps = {
  name: string;
  desc?: string;
};

const SkillCard = ({ name, desc = "" }: SkillCardProps) => {
  return (
    <div className="flex flex-col p-4 rounded-2xl bg-secondary-200 gap-3 w-full">
      <div className="flex flex-col gap-2 lg:flex-row w-full lg:justify-between lg:items-center">
        <h4 className="text-xl lg:text-2xl font-bold">{name}</h4>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default SkillCard;
