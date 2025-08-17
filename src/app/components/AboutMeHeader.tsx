"use client";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Image from "next/image";
import SideMenu from "./SideMenu";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import { AnimatePresence, motion } from "framer-motion";

const AboutMeHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);

  useBodyScrollLock(showMenu || showAbout);
  return (
    <div className="flex w-full relative">
      <ContainerWrapper className="rounded-[20px] justify-between hidden lg:flex">
        <p className="text-[32px] font-extrabold">
          About <span className="text-primary-100">Myself</span>
        </p>
        <Image
          onClick={() => setShowMenu(!showMenu)}
          src={"/icons/menuItem.svg"}
          height={32}
          width={32}
          alt="Menu"
          className="hover:cursor-pointer"
        />
      </ContainerWrapper>
      <div className="flex lg:hidden justify-between w-full items-center bg-primary-200/80 py-4 px-6 overflow-y-auto">
        <Image
          src="/side-menu-profile-image.webp"
          height={32}
          width={32}
          className="rounded-full object-cover"
          alt="Pradosh"
          onClick={() => setShowAbout(!showAbout)}
        />

        <Image
          onClick={() => setShowMenu(!showMenu)}
          src={"/icons/menuItem.svg"}
          height={32}
          width={32}
          alt="Menu"
          className="hover:cursor-pointer"
        />
      </div>
      <SideMenu onClose={() => setShowMenu(false)} isOpen={showMenu} />
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex flex-col fixed left-0 top-0 h-[100dvh] w-full bg-background/95 overflow-y-auto p-4 gap-3 origin-top-left"
            onClick={() => setShowAbout(!showAbout)}
          >
            <button
              className="flex w-full justify-end hover:cursor-pointer"
              onClick={() => setShowAbout(!showAbout)}
            >
              <Image
                src={"/icons/crossIcon.svg"}
                height={32}
                width={32}
                alt="Close"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMeHeader;
