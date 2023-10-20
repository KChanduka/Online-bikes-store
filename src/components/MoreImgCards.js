import React from "react";
import test from "../assets/test.png";

function MoreImgCards() {
  return (
    <div>
      <div className=" w-[100px] h-[100px] bg-slate-300  rounded-lg relavtive mr-5">
        {/* image */}
        <div>
          <img src={test} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default MoreImgCards;
