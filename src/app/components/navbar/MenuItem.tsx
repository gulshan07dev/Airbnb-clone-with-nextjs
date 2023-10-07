"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  className?: string
}

export default function MenuItem({ onClick, label, className="" }: MenuItemProps) {
  return (
    <div
      className={`px-4 py-3 hover:bg-neutral-100 transition font-semibold ${className}`}
      onClick={onClick}
    >
        {label}
    </div>
  );
}
