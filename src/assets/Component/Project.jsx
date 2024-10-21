import React from "react";
import p from "../svgasset/projects.svg";
import p1 from "../svgasset/projects1.svg";
import p1img from "../svgasset/projects1img.svg";
import p2 from "../svgasset/projects2.svg";
import p2img from "../svgasset/projects2img.svg";
import p3 from "../svgasset/projects3.svg";
import p3img from "../svgasset/projects3img.svg";

export const Project = () => {
  return (
    <div className="bg-bg2 m-0 p-0">
      <div className="flex justify-center items-center w-full h-full sm:h-full md:h-3/4 object-cover bg-bg2 m-0 p-0 ">
        {" "}
        <img
          src={p}
          draggable="false"
          className="mt-10 mb-10 m-0 p-0 bg-bg2"
        ></img>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2">
        <div className="flex justify-center items-center  ">
          {" "}
          <img src={p1} alt="img" draggable="false"></img>
        </div>
        <div className="flex justify-center items-center ">
          {" "}
          <img src={p1img} alt="ing2" draggable="false"></img>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2">
        <div className="flex justify-center items-center md:order-1">
          <img src={p2} alt="img" draggable="false" />
        </div>
        <div className="flex justify-center items-center md:order-2">
          <img src={p2img} alt="img2" draggable="false" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2 ">
        <div className="flex justify-center items-center  ">
          {" "}
          <img src={p3} alt="img" draggable="false"></img>
        </div>
        <div className="flex justify-center items-center ">
          {" "}
          <img src={p3img} alt="ing2" draggable="false"></img>
        </div>
      </div>
    </div>
  );
};
