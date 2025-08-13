"use client";
import React, { useState } from "react";
import ContainerWrapper from "./ContainerWrapper";
import Image from "next/image";
import SideMenu from "./SideMenu";
import useBodyScrollLock from "../hooks/useBodyScrollLock";

const AboutMeHeader = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  useBodyScrollLock(showMenu);
  return (
    <>
      <ContainerWrapper className="rounded-[20px] justify-between">
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
      <SideMenu onClose={() => setShowMenu(false)} isOpen={showMenu} />
    </>
  );
};

export default AboutMeHeader;
