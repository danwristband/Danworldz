import React from "react";
import skills from "../svgasset/techskills.svg";

export const Techskills = () => {
  return (
    <>
      <div className="">
        <img
          className="w-full flex mx-auto items-center"
          src={skills}
          draggable="false"
        ></img>
      </div>
    </>
  );
};
