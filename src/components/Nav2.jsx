import React from "react";
import { Link } from "react-router-dom";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

const Nav2 = () => {
  return (
    <div className="">
      <label class="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside class="sidebar absolute left-0 top-0 bg-black w-full sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] border-r">
        <AnimationXaxis>
          <nav className="md:ml-auto md:mr-auto flex flex-col flex-wrap items-start text-xl justify-center space-y-4">
            <Link to={"/"} className="mr-5 hover:text-gray-800 border-b w-full">
              Home
            </Link>
            <Link to={"/"} className="mr-5 hover:text-gray-800 border-b w-full">
              About Us
            </Link>
            <Link to={"/"} className="mr-5 hover:text-gray-800 border-b w-full">
              Services
            </Link>
            <Link to={"/"} className="mr-5 hover:text-gray-800 border-b w-full">
              Contact
            </Link>
          </nav>
        </AnimationXaxis>
      </aside>
    </div>
  );
};

export default Nav2;
