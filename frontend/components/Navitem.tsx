"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";

function Navlinks() {
  return (
    <>
      <ul className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
        <li> <a href="">Home</a></li>
        <li> <a href="">About</a></li>
        <li> <a href="">Contact</a></li>
        <li> <a href="">Feedback</a></li>
      </ul>
    </>
  );
}

export default function Navitem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="md:hidden flex items-center">
        <button onClick={toggleNavbar} className="text-3xl">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-10 transition-transform duration-300 md:relative md:flex md:items-center md:justify-start ${
          isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        <div className="absolute top-4 right-4 md:hidden">
          <button onClick={toggleNavbar} className="text-3xl">
            <X />
          </button>
        </div>
        <Navlinks />
      </div>
    </>
  );
}
