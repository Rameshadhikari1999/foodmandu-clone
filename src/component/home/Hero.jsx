import React from "react";
import Buttons from "../../utility/Buttons";

const Hero = () => {
  return (
    <div className='relative w-full h-[85vh] bg-[url("./assets/images/hero.jpg")] bg-cover bg-center bg-no-repeat flex items-center justify-center flex-col'>
      <div className='absolute inset-0 bg-black/40'></div>
      <h1 className="text-xl font-bold font-roboto capitalize text-gray-200 p-5 text-center z-10">
        Order food from the widest range of restaurants.
      </h1>

      <div className="z-10 w-5/6 flex justify-center">
        <input
          type="text"
          placeholder="Restaurant or Cuisine (leave it blank to browse all)"
          className="p-2 w-1/2  rounded-sm font-roboto text-gray-800 outline-none border-none"
        />
        <Buttons
          bgColor={"bg-yellow-400"}
          textColor={"text-gray-800"}
          title={"Find Restaurants"}
        />
      </div>
    </div>
  );
};

export default Hero;
