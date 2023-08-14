import React from "react";

const Slide = ({ img }) => {
  return (
    <div className="w-56 h-56 mx-3">
      <img src={img} alt="..." className="w-[100%] h-36 shadow-lg" />
    </div>
  );
};

export default Slide;
