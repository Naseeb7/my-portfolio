import Image from "next/image";
import React from "react";
import { IProject } from "@/app/constants/types";
import Link from "next/link";

const ProjectCard = ({
  heroImage,
  name,
  showName = true,
}: IProject & { showName?: boolean }) => {
  return (
    <Link
      href={`/project/${name}`}
      className="flex flex-col gap-3 hover:cursor-pointer relative h-[168px] w-full group"
    >
      <div className="flex absolute h-full w-full rounded-2xl opacity-0 group-hover:opacity-100 z-10 bg-black/40 justify-center items-center transition-opacity duration-400">
        Know More
      </div>
      <Image
        src={heroImage}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="rounded-2xl object-cover"
        loading="eager"
      />

      {showName && <h4 className="text-xl font-bold">{name}</h4>}
    </Link>
  );
};

export default ProjectCard;
