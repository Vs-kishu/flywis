import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-color ">
      <header className="navbar  px-3 justify-content-between   navbar-expand-lg">
        <div>
          <Link className="text-decoration-none" to={"/"}>
            {" "}
            <img height={80} src="/asessts/navbar/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="d-flex align-items-center gap-3 ">
          <img height={20} src="/asessts/navbar/search.png" alt="search" />
          <FaShoppingCart style={{ color: "#E5D896", fontSize: "1.5rem" }} />
          <div className="d-flex align-items-center gap-2">
            <img height={20} src="/asessts/navbar/profile.png" alt="profile" />
            <Link className="text-decoration-none" to={"/login"}>
              <span style={{ color: "#E5D896" }}>LOGIN</span>
            </Link>
          </div>

          <img height={40} src="/asessts/navbar/crown.png" alt="crown" />
        </div>
      </header>
      <div
        className="mx-auto "
        style={{ backgroundColor: "#E5D896", height: "2px", width: "85%" }}
      ></div>
    </div>
  );
};

export default Navbar;
