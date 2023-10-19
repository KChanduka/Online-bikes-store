import React from "react";
import logo from "../assets/logoHome.png";
import fb from "../assets/links/link (2).png";
import insta from "../assets/links/link (3).png";
import twit from "../assets/links/link (5).png";
import MarketCard from "./MarketCard";

function Footer() {
  return (
    <div className="flex justify-evenly">
        {/* logo&quick links */}
      <div className="flex flex-col gap-8">
        <img
          className="flex w-24 relative left-[70px] "
          src={logo}
          alt="logo"
        />
        <div className="flex ">
          <img className="w-11 h-11 mx-4" src={fb} alt="fb" />
          <img className="w-11 h-11 mx-4" src={insta} alt="insta" />
          <img className="w-11 h-11 mx-4" src={twit} alt="twit" />
        </div>
      </div>

      {/* Market */}
      <div className="flex flex-col gap-8 relative left-[80px]">
        <h3 className=" text-2xl relative left-[200px]">Market</h3>
        <div className="flex">
          <div>
            <MarketCard />
            <MarketCard />
          </div>
          <div>
            <MarketCard />
            <MarketCard />
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="flex flex-col gap-8"></div>


      <button className="text-gray-100 hover:text-white border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-20 mr-2 mb-2 dark:border-gray-200 dark:text-gray-200 dark:hover:text-black dark:hover:bg-white dark:focus:ring-yellow-900  w-48 h-16">Subscribe</button>

    </div>
  );
}

export default Footer;
