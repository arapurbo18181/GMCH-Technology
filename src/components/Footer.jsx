import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100 z-20 shadow">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-full md:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="w-full flex justify-start items-center text-center">
            <img src={Logo} className="w-24" />
          </div>
          <p className="mt-2 text-sm text-gray-500">Dream Big, Achieve More</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Social sites
            </h2>
            <nav className="list-none mb-10 space-y-2 flex flex-col justify-center items-center md:items-start">
              <li className="text-blue-600">
                <a href="https://www.facebook.com/" target="_blank">
                  <BsFacebook />
                </a>
              </li>
              <li className="text-blue-500">
                <a href="https://twitter.com/?lang=en" target="_blank">
                  <BsTwitter />
                </a>
              </li>
              <li className="text-blue-800">
                <a href="https://www.linkedin.com/" target="_blank">
                  <AiFillLinkedin />
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Useful Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/about"}> About Us </Link>
              </li>
              <li>
                <Link to={"/services"}>Services</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Useful Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={"/contact"}> Contact </Link>
              </li>
              <li>
                <a href="mailto: admin@gmchtech.com">admin@gmchtech.com</a>
              </li>
              <li>
                <a href="tel:+97433366874">+97433366874</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Address
            </h2>
            <nav className="list-none mb-10">
              <li>
                office # 1 basement at sherani plaza street 10 gouri town phase
                5b
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 GMCH Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};
