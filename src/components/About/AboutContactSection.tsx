import Link from "next/link";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Image from "next/image";

const AboutContactSection = () => {
  return (
    <Link href={"/contact"}>
      <ContainerWrapper className="flex-col gap-3">
        <div className="flex text-2xl font-extrabold justify-between w-full items-center">
          <span>
            Let’s <span className="text-primary-100">Collaborate</span>
          </span>
          <Image
            src={"/icons/rightArrow.svg"}
            height={24}
            width={24}
            alt="Arrow"
          />
        </div>
        <p>
          Building a product, scaling a team, or solving a complex engineering
          problem? Let&apos;s talk.
        </p>
      </ContainerWrapper>
    </Link>
  );
};

export default AboutContactSection;
