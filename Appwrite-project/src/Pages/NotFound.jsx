import { BiChevronsRight } from "react-icons/bi";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gray-900 ">
      <h1 className="text-9xl font-extrabold text-white tracking-widest ">
        404
      </h1>
      <br />
      <p className="text-gray-300 ">Looks like you found the wrong doorway</p>
      <div className="bg-cyan-300 px-2 text-sm rounded font-semibold rotate-12 absolute z-10">
        Page Not Found
      </div>
      <Link
        to="/"
        className="relative w-36 inline-flex mt-5 items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-cyan-300 rounded-full shadow-md group"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-cyan-300  rounded-full group-hover:translate-x-0 ease">
          <BiChevronsRight className="text-4xl" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-cyan-300 transition-all duration-300 transform group-hover:translate-x-full ease">
          Go Home
        </span>
        <span className="relative invisible">Go Home</span>
      </Link>
    </main>
  );
};

export default NotFound;
