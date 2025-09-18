import Image from "next/image";
import React from "react";
import { IProject } from "@/constants/types";

const ProjectCard = ({
  heroImage,
  name,
  id,
  showName = true,
}: IProject & { showName?: boolean }) => {
  return (
    <article
      key={id}
      className="flex flex-col gap-3 hover:cursor-pointer w-full group"
    >
      <div className="flex h-[168px] w-full relative">
        <div className="flex absolute h-full w-full rounded-2xl opacity-0 group-hover:opacity-100 z-10 bg-black/40 justify-center items-center transition-opacity duration-400">
          Know More
        </div>
        <Image
          src={heroImage}
          alt={`${name} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-2xl object-cover"
          loading="eager"
        />
      </div>

      {showName && (
        <h3 className="text-xl font-extrabold truncate pr-5">{name}</h3>
      )}
    </article>
  );
};

export default ProjectCard;
