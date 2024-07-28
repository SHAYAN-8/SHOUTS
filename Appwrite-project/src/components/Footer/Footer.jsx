import React from "react";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <footer className="bg-gray-900 absolute w-full">
      <div className="mx-auto w-full max-w-screen-xl px-3 py-4 sm:p-4  lg:py-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <Logo className="w-16 sm:w-20" />
              <span className="self-center text-2xl sm:text-3xl font-semibold whitespace-nowrap text-white">
                SHOUTS
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Websites
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://shayan.netlify.app"
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://msprogrammers.netlify.app/"
                    className="hover:underline"
                  >
                    Company
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow Me
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/muhammad~shayan//"
                    className="hover:underline "
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/SHAYAN-8"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className=" text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=923213991664"
                    className="hover:underline"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex text-center sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-500">
            © 2024 SHOUTS™. All Rights Reserved. Developed by{" "}
            <a
              target="_blank"
              href="https://shayan.netlify.app/"
              className="text-gray-300 hover:underline whitespace-nowrap hover:text-gray-100"
            >
              SHAYAN
            </a>
          </span>
          <div className="flex gap-4 sm:gap-2 text-2xl w-full sm:w-auto mt-4 justify-center sm:mt-0">
            <a
              title="Facebook"
              target="_blank"
              href="https://facebook.com/profile.php?id=100094010756930"
            >
              <FaFacebookSquare className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a
              title="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/in/muhammad~shayan/"
            >
              <FaLinkedin className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a
              title="Whatsapp"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=923213991664"
            >
              <FaWhatsapp className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
            <a
              title="Github"
              target="_blank"
              href="https://github.com/SHAYAN-8"
            >
              <FaGithub className="text-gray-400 cursor-pointer hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
