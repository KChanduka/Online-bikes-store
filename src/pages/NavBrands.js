import React from "react";
import Navbar from "../components/Navbar";
import BrandsCard from "../components/BrandsCard";
import BrandsImage1 from "../assets/brands/brans (7).png";
import BrandsImage2 from "../assets/brands/brans (2).png";
import BrandsImage3 from "../assets/brands/brans (3).png";
import BrandsImage4 from "../assets/brands/brans (4).png";
import BrandsImage5 from "../assets/brands/brans (5).png";
import BrandsImage6 from "../assets/brands/brans (6).png";

function NavBrands() {
  return (
    <div>
      <Navbar/>
      <div className=" mt-20 flex justify-center items-center flex-col space-y-10 ">
        <div className=" flex  gap-5 flex-col">
          <div className=" flex">
            <BrandsCard image={BrandsImage1} />
            <BrandsCard image={BrandsImage2} />
            <BrandsCard image={BrandsImage3} />
          </div>
          <div className="flex">
            <BrandsCard image={BrandsImage4} />
            <BrandsCard image={BrandsImage5} />
            <BrandsCard image={BrandsImage6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBrands;
