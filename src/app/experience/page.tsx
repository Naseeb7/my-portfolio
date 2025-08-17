import Image from "next/image";
import Link from "next/link";
import React from "react";
import Experiences from "@/data/experience.json";
import ExperienceSection from "../components/ExperienceSection";
import ContainerWrapper from "../components/ContainerWrapper";

const ExperiencePage = () => {
  return (
    <section>
      <ContainerWrapper className="flex-col gap-8">
        <div className="flex w-full justify-between lg:items-center">
          <h1 className="text-[32px] font-extrabold">
            Experience on <span className="text-primary-100">Full Stack</span>
          </h1>
          <Link href={"/"}>
            <Image
              src={"/icons/crossIcon.svg"}
              height={32}
              width={32}
              alt="Arrow"
            />
          </Link>
        </div>
        <div>
          {Experiences?.map((experience, index) => (
            <ExperienceSection
              key={`${experience.role}_${index}`}
              {...experience}
            />
          ))}
        </div>
      </ContainerWrapper>
    </section>
  );
};

export default ExperiencePage;
