"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  className?: string
}

export default function Button({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  className=""
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`disabled:opacity-70  py-2.5 px-3 flex items-center justify-center gap-2 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full
      ${className}
        ${outline ? "bg-white" : "bg-[#f71d1d]"}
        ${outline ? "border-black" : "border-rose-500"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className=""/>
      )}
      {label}
    </button>
  );
}
