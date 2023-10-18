import React from "react";
import OffersCard from "../components/OffersCard";
import OffersImage1 from "../assets/offers1.jpeg";
import OffersImage2 from "../assets/offers2.jpeg";
import OffersImage3 from "../assets/offers3.jpeg";

function Offers() {
  return (
    <div className= " mt-20 flex justify-center items-center flex-col space-y-10 ">
      <h1 className= " text-2xl font-bold underline text-zinc-500 ">
        EXPLORE WITH FREEDOM,<br/>&<br/>LET THE JOURNEY UNFOLD BENEATH YOUR WHEELS
      </h1>
      <div className=" flex  gap-5">
        <div >
          <OffersCard image={OffersImage1} title="BUILD YOUR DREAM BIKE" width="600px" height="420px" />
        </div>
        <div className= " flex  flex-col gap-5 ">
          <OffersCard image={OffersImage2} title="LATEST PRODUCTS" width="600px" height="200px" />
          <OffersCard image={OffersImage3} title="SALES & OFFERS"  width=" 600px" height="200px"/>
        </div>
      </div>
    </div>
  );
}

export default Offers;
