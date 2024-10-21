import React from "react";
import Aboutmesvg from "../svgasset/About1.svg";
import second from "../svgasset/About2.svg";

export const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2">
      <div className="flex justify-center items-center  ">
        {" "}
        <img
          src={second}
          alt="img"
          draggable="false"
          className="h-96 md:h-full"
        ></img>
      </div>
      <div className="flex justify-center items-center ">
        {" "}
        <img src={Aboutmesvg} alt="ing2" draggable="false"></img>
      </div>
    </div>
  );
};
