import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[180px] bg-white z-[1]"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/random/?gradient')",
        backgroundSize: "cover",
      }}
    ></div>
  );
};

export default Banner;
