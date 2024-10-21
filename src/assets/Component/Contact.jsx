import React from "react";
import contact1 from "../svgasset/contact1.svg";
import contact2 from "../svgasset/contact2.svg";

export const Contact = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-bg2">
        <div className="flex justify-center items-center  ">
          {" "}
          <img src={contact1} alt="img" draggable="false"></img>
        </div>
        <div className="flex justify-center items-center ">
          {" "}
          <img src={contact2} alt="ing2" draggable="false"></img>
        </div>
      </div>
    </div>
  );
};
