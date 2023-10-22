import React from "react";

function BrandsCard(props) {
  return (
    <div className="   bg-zinc-200 m-5 flex items-center  justify-center rounded-lg  ">
      <img src={props.image} alt={props.image} className=" w-96 p-10" />
    </div>
  );
}

export default BrandsCard;
