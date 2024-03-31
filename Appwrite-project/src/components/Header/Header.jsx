import React, { useState } from "react";
import { Logo, LogoutBtn, ToggleBtn } from "../index";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [toggle, setToggle] = useState(false);

  const navItems = [
    {
      name: "HOME",
      slug: "/",
      active: true,
    },
    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SIGNUP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "ALL POSTS",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "ADD POST",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "MY BLOGS",
      slug: "/my-blogs",
      active: authStatus,
    },
  ];

  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-14 sm:h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <ToggleBtn
                toggle={toggle}
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex sm:ml-0 -ml-8 select-none text-lg text-white font-bold flex-shrink-0 items-center">
                <Logo width="50" />
                SHOUTS
              </div>
              <div className="hidden sm:ml-6 sm:flex items-center">
                <ul className="flex ml-auto">
                  {navItems.map(
                    (item) =>
                      item.active && (
                        <li key={item.name}>
                          <NavLink
                            to={`${item.slug}`}
                            className=" text-white p-3 text-sm font-semibold hover:bg-gray-700 rounded-md"
                            aria-current="page"
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {authStatus && <LogoutBtn />}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div
          className={`${
            toggle && "max-h-44"
          }  sm:hidden max-h-1 overflow-hidden transition-all duration-500`}
          id="mobile-menu"
        >
          <div className="px-2 py-3">
            {navItems.map(
              (item) =>
                item.active && (
                  <li className="list-none" key={item.name}>
                    <NavLink
                      to={`${item.slug}`}
                      className=" text-white  block rounded-md hover:bg-gray-700 px-3 py-2  text-base font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
