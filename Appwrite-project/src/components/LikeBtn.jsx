import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeBtn = ({ isLiked, likeCount, handleLikes }) => {
  return (
    <span className="flex flex-col items-center">
      <button className="text-red-500 text-3xl" onClick={() => handleLikes()}>
        {isLiked ? (
          <AiFillHeart className="animate-ping-short" />
        ) : (
          <AiOutlineHeart />
        )}
      </button>
      {likeCount}
    </span>
  );
};

export default LikeBtn;
