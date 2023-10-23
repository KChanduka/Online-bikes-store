import React from "react";
import { Link } from "react-router-dom";

function DropDownBtn() {
  return (
    <div className="mt-16">
       <div className="flex justify-around">

        <Link to={"/login/admin/add-products"} >

        <button className=" text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          ADD PRODUCUTS
        </button>
        </Link>

        <Link to={"/login/admin/delete-products"} >

        <button className="text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          DELETE PRODUCTS
        </button>
        </Link>

        <Link to={"/login/admin/update-products"} >

        <button className="text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          UPDATE PRODUCTS
        </button>
        </Link>
      </div>
    </div>
  );
}

export default DropDownBtn;
