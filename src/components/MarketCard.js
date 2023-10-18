import loc from "../assets/links/link (4).png";
import phone from "../assets/links/link (1).png";
import React from "react";

function MarketCard(props) {
  return (
    <div className="pb-8">
      <div className="flex my-2 mx-3">
        <img className=" w-5 h-5" src={loc} alt="location" />
        <p className=" text-B9B8B7 mx-4">Lore amet, consectetur.</p>
      </div>
      <div className="flex my-2 mx-3">
        <img className="w-5 h-5" src={phone} alt="phone" />
        <p className=" text-B9B8B7 mx-4 ">+94777522726.</p>
      </div>
    </div>
  );
}

export default MarketCard;
