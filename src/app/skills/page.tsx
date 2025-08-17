import React from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import ClientBackButton from "../components/UI/ClientBackButton";
import Skills from "@/data/skills.json";
import SkillCard from "../components/UI/SkillCard";

const SkillsPage = () => {
  return (
    <section>
      <ContainerWrapper className="gap-8 flex-col">
        <div className="flex w-full justify-between items-start lg:items-center">
          <p className="text-[32px] font-extrabold">
            Technical <span className="text-primary-100">Proficiencies</span>
          </p>
          <ClientBackButton />
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {Skills.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default SkillsPage;
