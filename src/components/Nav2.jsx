import { Disclosure } from "@headlessui/react";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

const Nav2 = () => {
  return (
    <div className="">
      <label class="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside class="sidebar absolute left-0 top-0 bg-gradient-to-tl from-[#181b90] to-[#0f1012]  w-full sm:w-[60vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] border-r">
        <AnimationXaxis>
          <nav className="md:ml-auto md:mr-auto flex flex-col flex-wrap items-start text-xl justify-center space-y-4 text-gray-100">
            <Link to={"/"} className="mr-5 hover:text-gray-200 border-b w-full">
              Home
            </Link>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between mr-5 hover:text-gray-200 border-b">
                    <Link to={"/about"}>About Us</Link>
                    <MdKeyboardArrowDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-gray-100`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 w-full flex flex-col justify-start items-start space-y-3">
                    <Link
                      to={"/about"}
                      className="mr-5 hover:text-gray-200 hover:underline underline-offset-8 w-full"
                    >
                      1. GMCH technologies
                    </Link>
                    <Link
                      to={"/about"}
                      className="mr-5 hover:text-gray-200 hover:underline underline-offset-8 w-full"
                    >
                      2. Board of directors
                    </Link>
                    <Link
                      to={"/about"}
                      className="mr-5 hover:text-gray-200 hover:underline underline-offset-8 w-full"
                    >
                      3. Management team
                    </Link>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            <Link to={"/services"} className="mr-5 hover:text-gray-200 border-b w-full">
              Services
            </Link>
            <Link to={"/contact"} className="mr-5 hover:text-gray-200 border-b w-full">
              Contact
            </Link>
          </nav>
        </AnimationXaxis>
      </aside>
    </div>
  );
};

export default Nav2;
