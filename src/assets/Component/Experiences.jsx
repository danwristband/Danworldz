import React from "react";
import exp1 from "../svgasset/exp1.svg";
import exp2 from "../svgasset/exp2.svg";
import exp3 from "../svgasset/exp3.svg";
import exp4 from "../svgasset/exp4.svg";
import exp5 from "../svgasset/exp5.svg";
import exp6 from "../svgasset/exp6.svg";

export const Experiences = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  bg-bg1 ">
        <img
          src={exp1}
          alt="img"
          draggable="false"
          className="h-80 md:h-full"
        ></img>
        <img
          src={exp2}
          alt="img"
          draggable="false"
          className="h-80 md:h-full"
        ></img>
      </div>

      <img
        className="w-full flex mx-auto items-center"
        src={exp3}
        draggable="false"
      ></img>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  bg-bg1 ">
        <img
          src={exp5}
          alt="img"
          draggable="false"
          className="h-80 md:h-full hidden md:block"
        ></img>
        <img
          src={exp4}
          alt="img"
          draggable="false"
          className="h-80 md:h-full"
        ></img>
      </div>

      <img
        className="w-full flex mx-auto items-center"
        src={exp6}
        draggable="false"
      ></img>
    </div>
  );
};
