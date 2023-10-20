import React from "react";
import Logo from "../assets/logoHome.png";



function Navbar() {
  return (
    <div className=" flex items-center  justify-between">
      {/* logo */}
      <div>
        <a href="logo">
          <img className=" w-28"  src={Logo}></img>
        </a>
      </div>

      {/* nav links */}
      <div className=" flex">

        <ul className="flex text-2xl  font-bold gap-28">
            <li>
                <a href="home">Home</a>
            </li>
            <li>
                <a href="about">Products</a>
            </li>
            <li>
                <a href="products">Services</a>
            </li>
            <li>
                <a href="products">Brands</a>
            </li>
            <li>
                <a href="products">About us</a>
            </li>
            <li className=" bg-zinc-600 px-3 py-2 rounded-full bg-opacity-60">
                <a href="contact">Get Started</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
