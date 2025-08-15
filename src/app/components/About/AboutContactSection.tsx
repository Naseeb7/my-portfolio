import Link from "next/link";
import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Image from "next/image";

const AboutContactSection = () => {
  return (
    <Link href={"/contact"}>
      <ContainerWrapper className=" flex-col gap-4">
        <div className="flex text-2xl font-extrabold justify-between w-full items-center">
          <span>
            <span className="text-primary-100">Connect</span> with me
          </span>
          <Image
            src={"/icons/rightArrow.svg"}
            height={24}
            width={24}
            alt="Arrow"
          />
        </div>
        <p>
          Got a project in mind or just want to say hello? Let’s get in touch.
        </p>
      </ContainerWrapper>
    </Link>
  );
};

export default AboutContactSection;
