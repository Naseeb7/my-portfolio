import clsx from "clsx";
import React from "react";

interface FormFieldProps {
  name: string;
  type?: string; // 'text', 'email', etc.
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  placeholder?: string;
  className?: string;
  width?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder = "",
  className = "",
  width = "w-full",
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className={clsx(
        `${width} border border-secondary-300 px-3 py-4 outline-none text-secondary-400 font-medium placeholder:text-secondary-400 bg-secondary-200 rounded-xl`,
        className
      )}
    />
  );
};

export default FormField;
