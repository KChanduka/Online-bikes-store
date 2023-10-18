import React from "react";

function TestimonialsCard( props) {
  return (
    <div>
      <div class="w-[400px] py-4 px-8 bg-zinc-800 shadow-lg rounded-lg my-20">
        <div class="flex justify-center md:justify-end -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-white"
            src={props.image}
          />
        </div>
        <div>
          <h2 class="text-gray-300 text-3xl font-semibold">{props.name}</h2>
          <p class="mt-2 text-gray-400">
           {props.description}
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default TestimonialsCard;
