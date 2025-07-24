import React from "react";
import ContainerWrapper from "./ContainerWrapper";
import Image from "next/image";
import { socials } from "@/app/constants";
import Skills from "@/data/skills.json";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="flex flex-col w-full gap-3 ">
      {/* Header */}
      <ContainerWrapper className="rounded-[20px] justify-between">
        <p className="text-[32px] font-extrabold">
          About <span className="text-primary-100">Myself</span>
        </p>
        <Image src={"/icons/menuItem.svg"} height={32} width={32} alt="Menu" />
      </ContainerWrapper>

      {/* About and Social Links */}
      <div className="flex gap-3">
        <Image
          src="/profile-image.webp"
          height={336}
          width={332}
          className="h-[336px] w-1/2 flex rounded-xl object-contain"
          alt="Pradosh"
        />
        <div className="flex flex-col gap-3 w-1/2">
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

      {/* Skills */}
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

      {/* Contact Section */}
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
    </div>
  );
};

export default AboutMe;
