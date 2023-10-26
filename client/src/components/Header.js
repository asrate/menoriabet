import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-gray-700  shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto ">
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="h-[115px] w-[235px] sm-h-[60px] sm-w-[60]"
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 text-white items-center ">
            <li className="hidden sm:inline hover:underline">Features</li>
            <li className="hidden sm:inline hover:underline">Pricing</li>
            <Link to={"/signin"}>
              <li className="hover:underline">Signin</li>
            </Link>

            <li className="items-center text-gray-700 p-3">
              <button className="bg-[#FEE715] text-gray p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
                Free Trial
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
