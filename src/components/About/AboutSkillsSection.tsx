import Link from "next/link";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Image from "next/image";

const AboutSkillsSection = () => {
  return (
    <Link href="/skills">
      <ContainerWrapper className="flex-col gap-3 cursor-pointer">
        <div className="flex w-full justify-between items-center">
          <h4 className="font-extrabold text-2xl text-primary-100">Skills</h4>
          <Image
            src="/icons/rightArrow.svg"
            height={24}
            width={24}
            alt="Arrow"
            className="group-hover:translate-x-1 transition-transform"
          />
        </div>
        <p className="font-medium w-full">
          React, Node.js, TypeScript, MongoDB, AWS & scalable full-stack
          expertise
        </p>
      </ContainerWrapper>
    </Link>
  );
};

export default AboutSkillsSection;
