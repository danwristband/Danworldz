import React from "react";
import Award1 from "../svgasset/Award.svg";
import Award2 from "../svgasset/Award2.svg";

export const Award = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg1 pt-10 ">
        <div className="flex justify-center items-center  ">
          {" "}
          <img src={Award1} alt="img" draggable="false" className=""></img>
        </div>
        <div className="flex justify-center items-center ">
          {" "}
          <img src={Award2} alt="ing2" draggable="false"></img>
        </div>
      </div>
    </div>
  );
};
