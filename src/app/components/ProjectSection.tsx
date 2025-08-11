import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "../constants/types";
import Button from "./UI/Button";

const ProjectSection = ({
  id,
  challenge,
  credentials,
  heroImage,
  images,
  name,
  overview,
  previewLink,
  projectDetails,
  onClose,
}: IProject & { onClose?: () => void }) => {
  return (
    <div id={id} className="flex flex-col w-full gap-11 rounded-[20px] h-fit">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[32px] font-extrabold">{name}</h1>
        <div onClick={() => onClose?.()}>
          <Image
            src={"/icons/crossIcon.svg"}
            height={32}
            width={32}
            alt="Cross"
            className="hover:cursor-pointer"
          />
        </div>
      </div>

      <Image
        src={heroImage}
        alt={name}
        className="h-[440px] w-full object-cover rounded-4xl"
        width={1200}
        height={440}
        objectFit="cover"
      />

      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] font-extrabold">Overview</h2>
        <p>{overview}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] font-extrabold">Challenge</h2>
        <p>{challenge}</p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[440px]">
        {images && images.length > 0 ? (
          images.slice(0, 3).map((photo, index) => (
            <div
              key={index}
              className={index === 0 ? "row-span-2 h-full" : "h-full"}
            >
              <Image
                src={photo}
                alt={`${name} photo ${index + 1}`}
                className="h-full w-full object-cover rounded-4xl"
                width={720}
                height={440}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2">
            <Image
              src={"/projects/dummy-image.png"}
              alt="No photos available"
              className="h-full w-full object-cover rounded-4xl"
              width={720}
              height={440}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] font-extrabold">Project Details</h2>
        <ul className="list-disc pl-5">
          {projectDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] font-extrabold">Live Preview</h2>
        <Link
          href={previewLink}
          target="_blank"
          className="text-primary-100 hover:underline"
        >
          {previewLink}
        </Link>
        {credentials && (
          <div className="flex flex-col gap-3 ">
            <span className="text-2xl font-bold">Credentials</span>
            <div className="flex gap-4 text-secondary-100">
              <span className="font-semibold">
                Username: {credentials.email}
              </span>
              <span className="font-semibold">
                Password: {credentials.password}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-10">
        <span className="flex justify-center w-full font-extrabold">
          Need to Know More about the Projects?
        </span>
        <div className="flex w-full items-center">
          <div className="h-[1px] bg-gradient-to-r from-brand-200 to-white/50 w-1/2" />
          <Button className="font-semibold" width="w-1/6">
            <Link className="flex gap-1" href={"/contact"}>
              Let&apos;s Connect
              <Image
                src={"/icons/connectArrow.svg"}
                alt="Arrow"
                width={20}
                height={20}
              />
            </Link>
          </Button>
          <div className="h-[1px] bg-gradient-to-l from-brand-200 to-white/50 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
