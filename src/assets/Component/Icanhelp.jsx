import React from "react";
import icanhelpu1 from "../svgasset/icanhelpu1.svg";
import icanhelpu2 from "../svgasset/icanhelpu2.svg";
import icanhelpu3 from "../svgasset/icanhelpu3.svg";
import icanhelpu4 from "../svgasset/icanhelpu4.svg";

export const Icanhelp = () => {
  return (
    <div className=" mx-auto justify-center bg-bg2 ">
      <div className="flex justify-center items-center w-full h-full sm:h-full md:h-3/4 object-cover bg-bg2 m-0 p-0 ">
        {" "}
        <img src={icanhelpu1} draggable="false" className="bg-bg2 m-0 p-0"></img>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center  bg-bg2 pb-12">
        <img
          src={icanhelpu2}
          alt="img"
          draggable="false"
          className=" w-full h-full  bg-bg2"
        ></img>
        <img
          src={icanhelpu3}
          alt="img"
          draggable="false"
          className=" w-full h-full  bg-bg2"
        ></img>
        <img
          src={icanhelpu4}
          alt="img"
          draggable="false"
          className="w-full h-full  bg-bg2"
        ></img>
      </div>
    </div>
  );
};
