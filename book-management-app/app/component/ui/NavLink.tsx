"use client";
import React, { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  // [key: string]: string;
}

const NavLink = ({ href, children, ...rest }: NavProps) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  return (
    <Link className={isActive ? "text-blue-200" : ""} href={href} {...rest}>
      {children}
    </Link>
  );
};

export default NavLink;
