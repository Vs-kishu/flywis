import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-primary">
      <header className="flex px-3 justify-between items-center navbar-expand-lg">
        <div className="w-[10%]">
          <Link className="text-decoration-none" to={"/"}>
            {" "}
            <img src="/asessts/navbar/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <img
            className="w-8 h-8"
            src="/asessts/navbar/search.png"
            alt="search"
          />
          <FaShoppingCart className="text-secondary w-8 h-8 text-2xl" />
          <div className="flex items-center gap-2">
            <img
              src="/asessts/navbar/profile.png"
              className="w-8 h-8"
              alt="profiles"
            />
            <Link className="text-secondary font-medium" to={"/login"}>
              <span>LOGIN</span>
            </Link>
          </div>

          <img
            className="w-14 h-14"
            src="/asessts/navbar/crown.png"
            alt="crown"
          />
        </div>
      </header>
      <div
        className="mx-auto mt-5"
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
    </div>
  );
};

export default Navbar;
