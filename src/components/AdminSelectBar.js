import React from "react";

function DropDownBtn() {
  return (
    <div className="mt-16">
       <div className="flex justify-around">
        <button className=" text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          ADD PRODUCUTS
        </button>

        <button className="text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          DELETE PRODUCTS
        </button>

        <button className="text-2xl text-opacity-50 text-zinc-200 pr-16 ">
          UPDATE PRODUCTS
        </button>
      </div>
    </div>
  );
}

export default DropDownBtn;
