import React from "react";
import Aboutmesvg from "../svgasset/About1.svg";
import second from "../svgasset/About2.svg";

export const Aboutme = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2">
      <div className="flex justify-center items-center bg-bg2 ">
        {" "}
        <img
          src={second}
          alt="img"
          draggable="false"
          className="h-96 md:h-full bg-bg2"
        ></img>
      </div>
      <div className="flex justify-center items-center bg-bg2">
        {" "}
        <img src={Aboutmesvg} alt="ing2" draggable="false" className=" m-0 p-0 bg-bg2" ></img>
      </div>
    </div>
  );
};
