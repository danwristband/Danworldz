import React from "react";
import Heroic from "../svgasset/Hero.svg";

export const Heros = () => {
  return (
    <div className="flex justify-center items-center w-full h-full sm:h-full md:h-3/4 object-cover bg-bg1 ">
      {" "}
      <img src={Heroic} draggable="false"></img>
    </div>
  );
};
