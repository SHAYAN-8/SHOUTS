import React from "react";
import toast from "react-hot-toast";
import { FaUserSecret } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const ProfileToast = ({ username, email, t }) => {
  return (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-2 sm:p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <span className="bg-gray-600 cursor-pointer text-white text-center uppercase w-10 aspect-square text-2xl font-semibold rounded-full flex items-center justify-center">
              {status === "Post Anonymous" ? <FaUserSecret /> : username[0]}
            </span>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">{username}</p>
            <p className="mt-1 text-sm text-gray-500">{email}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss()}
          className="w-full p-4 flex items-center justify-center text-2xl"
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default ProfileToast;
