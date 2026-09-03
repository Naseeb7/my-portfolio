import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "../constants/types";
import Button from "./UI/Button";

const ProjectSection = ({
  category,
  challenge,
  credentials,
  heroImage,
  images,
  name,
  overview,
  role,
  type,
  stack,
  outcome,
  githubLinks,
  previewLink,
  projectDetails,
  highlights,
  onClose,
}: IProject & { onClose?: () => void }) => {
  return (
    <div
      id={name}
      className="flex w-full flex-col gap-8 rounded-[20px] lg:gap-10"
    >
      <div className="flex w-full items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-extrabold lg:text-[32px]">{name}</h1>

          <div className="flex flex-wrap items-center gap-2 text-sm opacity-70">
            <span>{category}</span>
            <span>·</span>
            <span>{type}</span>
            <span>·</span>
            <span>{role}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="shrink-0"
        >
          <Image
            src="/icons/crossIcon.svg"
            height={32}
            width={32}
            alt=""
            className="hover:cursor-pointer"
          />
        </button>
      </div>

      <Image
        src={heroImage}
        alt={`${name} project preview`}
        className="h-[220px] w-full rounded-4xl object-cover lg:h-[440px]"
        width={1200}
        height={440}
      />

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">
          Project Overview
        </h2>
        <p className="leading-7 opacity-80">{overview}</p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">
          Engineering Challenge
        </h2>
        <p className="leading-7 opacity-80">{challenge}</p>
      </section>

      {images && images.length > 0 && (
        <div className="grid gap-4 lg:h-[440px] lg:grid-cols-2 lg:grid-rows-2">
          {images.slice(0, 3).map((photo, index) => (
            <div
              key={photo}
              className={index === 0 ? "row-span-2 h-full" : "h-full"}
            >
              <Image
                src={photo}
                alt={`${name} screenshot ${index + 1}`}
                className="h-[220px] w-full rounded-4xl object-cover lg:h-full"
                width={720}
                height={440}
              />
            </div>
          ))}
        </div>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">
          Engineering Highlights
        </h2>

        <ul className="flex list-disc flex-col gap-3 pl-5">
          {highlights.map((highlight) => (
            <li key={highlight} className="leading-7 opacity-80">
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">
          Technical Implementation
        </h2>

        <ul className="flex list-disc flex-col gap-3 pl-5">
          {projectDetails.map((detail) => (
            <li key={detail} className="leading-7 opacity-80">
              {detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">Technology</h2>

        <div className="flex flex-wrap gap-2">
          {stack.map((technology) => (
            <span
              key={technology}
              className="rounded-md border px-3 py-1.5 text-sm opacity-80"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {outcome && (
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold lg:text-[32px]">Outcome</h2>
          <p className="leading-7 opacity-80">{outcome}</p>
        </section>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-extrabold lg:text-[32px]">
          Explore the Project
        </h2>

        <div className="flex flex-col gap-4">
          {previewLink && (
            <div className="flex flex-col gap-1">
              <span className="text-lg font-semibold">Live Preview</span>
              <Link
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-primary-100 hover:underline"
              >
                {previewLink}
              </Link>
            </div>
          )}

          {githubLinks && githubLinks.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="text-lg font-semibold">
                GitHub Repository
                {githubLinks.length > 1 ? "ies" : ""}
              </span>

              <div className="flex flex-col gap-1">
                {githubLinks.map((githubLink) => (
                  <Link
                    key={githubLink}
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all text-primary-100 hover:underline"
                  >
                    {githubLink}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {!previewLink && (!githubLinks || githubLinks.length === 0) && (
            <p className="opacity-70">Public project links are unavailable.</p>
          )}
        </div>

        {credentials && (
          <div className="flex flex-col gap-3">
            <span className="text-2xl font-bold">Demo Credentials</span>

            <div className="flex flex-col gap-2 text-secondary-100 lg:flex-row lg:gap-4">
              <span className="font-semibold">
                Username: {credentials.email}
              </span>
              <span className="font-semibold">
                Password: {credentials.password}
              </span>
            </div>
          </div>
        )}
      </section>

      <div className="flex flex-col gap-5 lg:gap-10">
        <span className="flex w-full justify-center font-extrabold">
          Interested in how I approach engineering challenges?
        </span>

        <div className="flex w-full items-center justify-center lg:justify-normal">
          <div className="hidden h-[1px] w-1/2 bg-gradient-to-r from-brand-200 to-white/50 lg:block" />

          <Button className="font-semibold" width="lg:w-1/6 w-2/3">
            <Link className="flex gap-1" href="/contact">
              Let&apos;s Connect
              <Image
                src="/icons/connectArrow.svg"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </Button>

          <div className="hidden h-[1px] w-1/2 bg-gradient-to-l from-brand-200 to-white/50 lg:block" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
