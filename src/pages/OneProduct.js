import React from "react";
import Navbar from "../components/Navbar";
import test from "../assets/test.png";
import nl from "../assets/like/notliked2.png";
import MoreImgCards from "../components/MoreImgCards";
import SimilarProductCard from "../components/SimilarProductCard";

function OneProduct(props) {
  let productName = props.name;
  let productDescription = props.description;
  let price = props.price;
  return (
    <div>
      {/* <Navbar /> */}
      <div className=" ml-10">
        {/* product name */}
        <h1 className="text-zinc-400 text-4xl font-semibold mt-16 ">
          {productName}
        </h1>
        {/* product image, price, like buy add to cart buttons */}
        <div className="flex">
          {/* product image -left column */}
          <div className="w-[1000px]">
            <img src={test} alt="product image" />

            {/* Product description */}
            <h1 className=" text-zinc-400 text-xl">{productDescription}</h1>
          </div>
          {/* right column */}
          <div className="ml-[300px]">
            <div className="flex">
              <h1 className="text-zinc-400 text-3xl font-semibold mt-16 ">
                $ {price}
              </h1>
              <img
                src={nl}
                alt="like button"
                className="w-[45px] ml-10 mt-16"
              />
            </div>
            {/* buy and add to cart buttons */}
            <button className="text-gray-100 hover:text-white border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-20 mr-2 mb-2 dark:border-gray-200 dark:text-gray-200 dark:hover:text-black dark:hover:bg-white dark:focus:ring-yellow-900  w-48 h-16">
              BUY
            </button>
            <button className="text-gray-100 hover:text-white border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-20 mr-2 mb-2 dark:border-gray-200 dark:text-gray-200 dark:hover:text-black dark:hover:bg-white dark:focus:ring-yellow-900  w-48 h-16">
              ADD TO CART
            </button>

            {/* more images of the product */}
            <div className=" mt-16 flex ">
              <MoreImgCards />
              <MoreImgCards />
              <MoreImgCards />
            </div>
          </div>
        </div>
      </div>

      {/* Similar product section */}
      <h1 className="text-zinc-400 text-2xl font-semibold mt-16 ">
        Similar Products
        </h1>
      <div className=" flex mt-16 justify-evenly">
        <SimilarProductCard />
        <SimilarProductCard />
        <SimilarProductCard />  
        <SimilarProductCard />  
        <SimilarProductCard />  

      </div>
    </div>
  );
}

export default OneProduct;
