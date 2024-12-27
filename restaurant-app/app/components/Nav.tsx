import React, { ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

function NavItem({ children }: NavProps) {
  return (
    <li className="p-2 hover:bg-gray-300 rounded transition-all">{children}</li>
  );
}

export default function Nav() {
  return (
    <div className="bg-gray-800 py-4">
      <header className="container mx-auto">
        <nav>
          <ul className="flex gap-6 text-lg text-white">
            <NavItem>
              <a href="/" className="block">
                Home
              </a>
            </NavItem>

            <NavItem>
              <a href="/food" className="block">
                Foods
              </a>
            </NavItem>

            {/* <NavItem>
              <a href="/" className="block">
                About
              </a>
            </NavItem> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}
