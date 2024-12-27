"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
  href: string;
  [key: string]: string;
}

const NavLink = ({ href, ...rest }: NavProps) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link className={isActive ? "text-blue-200" : ""} href={href} {...rest} />
  );
};

export default NavLink;
