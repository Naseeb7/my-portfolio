"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import ProjectSection from "./ProjectSection"; // your already-styled project view
import { IProject } from "../constants/types";
import ContainerWrapper from "./ContainerWrapper";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: IProject;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const modalContent = (
    <div className="fixed inset-0 z-50 w-full p-10 flex bg-background">
      <ContainerWrapper className="max-h-screen overflow-y-auto">
        <ProjectSection {...project} onClose={onClose} />
      </ContainerWrapper>
    </div>
  );

  return createPortal(modalContent, document.body);
}
