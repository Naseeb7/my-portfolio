import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
  width?: string;
  rounded?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  width = "w-full",
  rounded = "rounded-xl",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        `flex px-4 py-2 bg-primary-600 text-white font-extrabold justify-center items-center transition-all duration-200 bg-primary-100 hover:bg-primary-100/80 disabled:opacity-60 disabled:cursor-not-allowed ${width} ${rounded} hover:cursor-pointer`,
        className
      )}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
