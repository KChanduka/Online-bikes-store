import React from "react";
import Logo from "../assets/logoHome.png";

function AdminNavBar() {
  return (
    <div className=" flex items-center  justify-between">
      {/* logo */}
      <div>
        <a href="logo">
          <img className=" w-28" src={Logo}></img>
        </a>
      </div>

      {/* nav links */}
      <div className=" flex">
        <ul className="flex text-2xl  font-bold gap-28">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="products">Products</a>
          </li>
          <li>
            <a href="products">Brands</a>
          </li>
          <li className=" bg-green-400 px-3 py-2 rounded-full">
            <a href="contact">Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavBar;
