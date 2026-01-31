import React from "react";

const Home = () => {
  return (
    <div className="flex justify-between bg-pink-400/40 h-screen pt-30 px-30 items-center">
      <div className="w-[35%] space-y-3">
        <div>
          <h1 className="text-5xl font-bold ">Find The Best </h1>
          <h1 className="text-5xl font-bold ">Fashion Style</h1>
          <h1 className="text-5xl font-bold ">For You</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          fugit eius neque facere dolor molestias libero quia est aut earum,
          labore repudiandae!
        </p>
        <button className="bg-black text-white text-xl px-4 py-2 rounded-md">SHOP NOW</button>
      </div>
      <div >
        <img
          src="https://png.pngtree.com/png-clipart/20250224/original/pngtree-family-shopping-fun-a-joyful-experience-together-png-image_20509273.png"
          alt=""
          className=" w-140"
        />
      </div>
    </div>
  );
};

export default Home;
