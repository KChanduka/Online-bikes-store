import React from "react";
import Logo from "../assets/logoHome.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      {/* logo */}
      <div>
        <Link to="/">
          <img className="w-28" src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* nav links */}
      <div className="flex">
        <ul className="flex text-2xl font-medium gap-28 tracking-wider items-center ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li className="bg-zinc-600 px-3 py-2 rounded-full bg-opacity-60 font-bold">
            <Link to="/login">Get Started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
