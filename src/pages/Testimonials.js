import React from "react";
import TestimonialsCard from "../components/TestimonialsCard";
import TestimonialsImage1 from "../assets/reviews/reviews (1).png";
import TestimonialsImage2 from "../assets/reviews/reviews (2).png";
import TestimonialsImage3 from "../assets/reviews/reviews (3).png";

function Testimonials() {
  return (
    <div>
      <div>
        <div className=" mt-20 flex justify-center items-center flex-col space-y-10 ">
          <h1 className=" text-2xl font-bold underline text-zinc-500 tracking-widest">
            HEAR WHAT OHTERS HAVE TO SAY
          </h1>
          <div className=" flex  gap-5 flex-col">
            <div className=" flex flex-row gap-5">
              <TestimonialsCard image={TestimonialsImage1}  name = "Mike John" description= "lorem ipsum dolor sit amet consectetur. Gravida nam orci suscipit ipsum facilisis diam id euismod. Vitae consequat lobortis ut ornare ac. Quis s."/>
              <TestimonialsCard image={TestimonialsImage2} name= "Chanduka Kunmara" description="lorem ipsum dolor sit amet consectetur. Gravida nam orci suscipit ipsum facilisis diam id euismod. Vitae consequat lobortis ut ornare ac. Quis s."/>
              <TestimonialsCard image={TestimonialsImage3} name = "Samin Chandeepa" description="lorem ipsum dolor sit amet consectetur. Gravida nam orci suscipit ipsum facilisis diam id euismod. Vitae consequat lobortis ut ornare ac. Quis s."/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
