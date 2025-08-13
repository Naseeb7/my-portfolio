"use client";

import Image from "next/image";
import React from "react";
import { sideMenuOptions } from "../constants";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type SideMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};

const SideMenu = ({ onClose, isOpen }: SideMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed left-0 top-0 z-40 h-screen w-full bg-black/70 flex justify-end"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex flex-col gap-4 bg-background/95 w-1/4 p-5"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="flex w-full justify-end hover:cursor-pointer"
              onClick={onClose}
            >
              <Image
                src={"/icons/crossIcon.svg"}
                height={32}
                width={32}
                alt="Close"
              />
            </button>

            <div className="flex flex-col gap-5 items-center">
              <Image
                src="/side-menu-profile-image.webp"
                height={120}
                width={120}
                className="rounded-full object-cover"
                alt="Pradosh"
              />
              {sideMenuOptions.map((option) =>
                option.external ? (
                  <a
                    key={option.label}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {option.label}
                  </a>
                ) : (
                  <Link key={option.label} href={option.href} onClick={onClose}>
                    {option.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideMenu;
