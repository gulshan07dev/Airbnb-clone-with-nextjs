import { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function Input({
  id,
  label,
  type = "text",
  disabled = false,
  formatPrice = false,
  register,
  required = false,
  errors,
}: InputProps) {
  const hasError = errors[id];
  const [isHidePassword, setIsHidePassword] = useState(true);

  let passwordInputType = isHidePassword ? "password" : "text";

  const toggleHidePassword = () => {
    setIsHidePassword((prev) => !prev);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type === "password" ? passwordInputType : type}
        className={`peer w-full p-4 pt-6 text-base text-gray-700 font-medium bg-white border-2 rounded-md outline-none transition
          ${formatPrice ? "pl-9" : "pl-4"}
          ${hasError ? "border-rose-500" : "border-neutral-300"}
          ${hasError ? "focus:border-rose-500" : "focus:border-black"}
          ${disabled ? "opacity-70 cursor-not-allowed" : ""}
        `}
      />
      <label
        className={`absolute text-m duration-150 transform transition -translate-y-4 top-5 z-10 origin-0 
          ${formatPrice ? "left-9" : "left-4"}
          ${hasError ? "text-rose-500" : "text-zinc-700"}
          ${hasError ? "scale-75 -translate-y-4" : ""}
        `}
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={toggleHidePassword}
          className={`absolute md:px-5 px-3 right-2 bottom-2 top-2 h-[calc(100%-16px)] flex justify-center items-center bg-white text-lg ${
            isHidePassword ? "text-gray-600" : "text-gray-950"
          } `}
        >
          {isHidePassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      )}
    </div>
  );
}
