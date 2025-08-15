import Link from "next/link";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Skills from "@/data/skills.json";
import Image from "next/image";

const AboutSkillsSection = () => {
  return (
    <Link href={"/skills"}>
      <ContainerWrapper className="justify-between items-center">
        <h4 className="font-extrabold text-2xl text-primary-100">Skills</h4>
        <div className="flex w-4/5 justify-between">
          <p className="font-medium w-11/12 truncate">
            {Skills?.map((t) => t.name)?.join(", ")}
          </p>
          <Image
            src={"/icons/rightArrow.svg"}
            height={24}
            width={24}
            alt="Arrow"
          />
        </div>
      </ContainerWrapper>
    </Link>
  );
};

export default AboutSkillsSection;
