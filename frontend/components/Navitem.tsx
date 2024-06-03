"use client";

import { useState } from "react";
import { X, Menu } from "lucide-react";
import SearchItem from "./SearchItem";

function Navlinks() {
  return (
    <>
      <ul className="flex flex-col gap-3 md:flex-row">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
  <li>Feedback</li>
</ul>
      {/* <SearchItem /> */}
    </>
  );
}

export default function Navitem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  return (
    <>
    <div className="flex">
      <div className="w-1/3 flex items-center justify-between">
        <div className="hidden md:flex">
          <Navlinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center">
          <Navlinks />
        </div>
      )}
      </div>
    </>
  );
}
