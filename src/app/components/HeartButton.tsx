"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "../hooks/useFavorite";

 import { SafeUser } from "@/app/types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
   
   const {toggleFavorite, hasFavorited} = useFavorite({
    listingId,
    currentUser
   });

  return (
    <div
      onClick={toggleFavorite}
      className=" absolute top-[2px] right-[2px] hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart size={28} className="fill-white absolute" />
      <AiFillHeart
        size={24}
        className={` ${hasFavorited ? "fill-rose-600" : "fill-neutral-500/70"}`}
      />
    </div>
  );
};

export default HeartButton;
