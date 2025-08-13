"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ProjectSection from "./ProjectSection";
import { IProject } from "../constants/types";
import ContainerWrapper from "./ContainerWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: IProject | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders in the browser
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100%" }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 w-full p-10 flex bg-background"
        >
          <ContainerWrapper className="max-h-screen overflow-y-auto">
            <ProjectSection {...project} onClose={onClose} />
          </ContainerWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
