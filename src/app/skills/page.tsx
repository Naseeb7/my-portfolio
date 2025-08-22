import React from "react";
import ContainerWrapper from "../components/ContainerWrapper";
import ClientBackButton from "../components/UI/ClientBackButton";
import Skills from "@/data/skills.json";
import SkillCard from "../components/UI/SkillCard";

const SkillsPage = () => {
  return (
    <section>
      <ContainerWrapper className="flex flex-col gap-8">
        <header className="flex w-full justify-between items-start lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Technical <span className="text-primary-100">Proficiencies</span>
          </h1>
          <ClientBackButton />
        </header>

        <div className="flex flex-col gap-6">
          <p>
            Comprehensive expertise across web, mobile, and cloud technologies.
          </p>
          {Object.entries(Skills).map(([category, skillList]) => (
            <section key={category} className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-secondary-100">
                {category}
              </h2>
              <div className="grid gap-3 lg:grid-cols-2">
                {skillList.map((skill) => (
                  <SkillCard key={skill.id} {...skill} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default SkillsPage;
