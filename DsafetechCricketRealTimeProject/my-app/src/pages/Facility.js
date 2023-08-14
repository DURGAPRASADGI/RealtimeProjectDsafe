import React from "react";
import Singlefacility from "./Singlefacility";
import { faclits } from "../components/Arrays/Data";


const Facility = () => {
  return (
    <section
      className="text-gray-600 body-font lg:-mt-32 md:-mt-10 sm:mt-0"
      data-aos="fade-up"
      data-aos-duration="3000"
      id="Facility"
    >
      <div className=" px-10 py-24 mx-auto">
        <div className="flex flex-wrap  justify-between items-center gap-5">
          {faclits.map((list, index) => (
            <Singlefacility key={index} url={list.imageurl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
