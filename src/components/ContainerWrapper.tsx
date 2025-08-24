import React, { ReactNode } from "react";
import clsx from "clsx";

interface IContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

const ContainerWrapper = ({
  className = "",
  children,
}: IContainerWrapperProps) => {
  return (
    <div
      className={clsx("flex w-full p-5 bg-primary-200 rounded-2xl", className)}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
