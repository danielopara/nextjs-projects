"use client";
import React from "react";
import NavLink from "./ui/NavLink";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header>
      <nav className="py-5 bg-black">
        <ul className="ml-7 flex flex-row gap-4 text-gray-100 text-xl font-bold">
          <NavLink className="p-1 rounded-md" href="/">
            Book Management
          </NavLink>

          <div className="mr-7 ml-auto flex flex-row gap-4">
            {pathName === "/login" && (
              <NavLink
                className="px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all duration-200"
                href="/register"
              >
                Sign Up
              </NavLink>
            )}

            {pathName === "/register" && (
              <NavLink
                className="px-4 py-2 bg-teal-600 rounded-md text-white hover:bg-teal-700 focus:ring-2 focus:ring-teal-400 focus:outline-none transition-all duration-200"
                href="/login"
              >
                Log In
              </NavLink>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
