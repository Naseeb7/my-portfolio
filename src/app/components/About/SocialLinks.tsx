import React from "react";
import ContainerWrapper from "../ContainerWrapper";
import Image from "next/image";
import { socials } from "@/app/constants";

const SocialLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full">
      <Image
        src="/profile-image.webp"
        height={336}
        width={332}
        className="h-[336px] w-full lg:w-1/2 flex rounded-xl object-contain"
        alt="Pradosh"
      />
      <div className="flex flex-col gap-3 w-full lg:w-1/2">
        <ContainerWrapper className="justify-between font-medium">
          <span className="text-secondary-100">Name:</span>
          <span>Pradosh Chand</span>
        </ContainerWrapper>
        <ContainerWrapper className="justify-between font-medium">
          <span className="text-secondary-100">Location:</span>
          <span>Somewhere in OD</span>
        </ContainerWrapper>
        <a href={"tel:+919937417411"} aria-label={"phone"}>
          <ContainerWrapper className="justify-between font-medium">
            <span className="text-secondary-100">Phone Number:</span>
            <span>(+91) 99374-17411 </span>
          </ContainerWrapper>
        </a>
        <ContainerWrapper className="justify-between">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex flex-col items-center gap-1"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={52}
                height={52}
                className="hover:opacity-80 transition"
              />
              <p className="text-[10px] font-bold">{item.name}</p>
            </a>
          ))}
        </ContainerWrapper>
      </div>
    </div>
  );
};

export default SocialLinks;
