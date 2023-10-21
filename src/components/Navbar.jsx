import Logo from "../assets/logo.png";
import Nav2 from "./Nav2";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center bg-gray-200 fixed top-0 right-0 left-0 z-50 lg:px-24 2xl:px-36 text-gray-700 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
        <div className="">
          <img src={Logo} className="w-24 lg:w-32 xl:w-40" />
        </div>
        <div className="">
          <Nav2 />
        </div>
      </div>
    </header>
  );
};
