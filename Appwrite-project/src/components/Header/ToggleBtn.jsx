import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";

const ToggleBtn = ({ toggle, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative text-3xl inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      {toggle ? (
        <CgClose className="duration-200" />
      ) : (
        <CgMenu className="duration-200" />
      )}
    </button>
  );
};

export default ToggleBtn;
