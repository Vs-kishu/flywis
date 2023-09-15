import React from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {
  return (
    <header className="bg-primary text-color font-medium text-lg text-secondary p-3">
      <ul className="flex justify-evenly">
        <Link>HOME</Link>
        <Link>SHOP</Link>
        <Link to={"services"}>SERVICES</Link>
        <Link to={"gallery"}>GALLERY</Link>
        <Link>PAYMENT PLANS</Link>
        <Link to={"contact"}>CONTACT</Link>
        <Link to={"aboutus"}>ABOUT US</Link>
      </ul>
    </header>
  );
};

export default MenuOptions;
