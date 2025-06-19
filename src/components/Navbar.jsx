import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="flex justify-between items-center w-full py-6 navbar">
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] cursor-pointer"
      />

      <ul className="gap-7 sm:flex hidden items-center flex-1 justify-end">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="cursor-pointer text-[16px] hover:text-[#00f6ff] duration-500 ease-in"
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? menu : close}
          alt="menu"
          className="w-[28px] h-[28px] cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "hidden" : "flex"
          } absolute top-20 right-0 my-2 mx-4 py-6 px-5 bg-black-gradient bg-amber-500 rounded-xl min-w-[124px] sidebar`}
        >
          <ul className="gap-4 flex flex-col items-start">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="cursor-pointer text-[16px]">
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
