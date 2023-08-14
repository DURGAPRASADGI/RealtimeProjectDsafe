import React from "react";
import { Link } from "react-router-dom";
const Curosal = ({ url }) => {
  return (
    <>
      <div className="mx-auto  max-w-[370px] items-center text-center  ">
        <div className="mb-4 overflow-hidden rounded">
          <img src={url} alt="..." className="w-full " />
        </div>
        <div>
          <h3>
            <Link
              to={""}
              className="mb-2 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
            >
             vizag Cricket Academy
            </Link>
          </h3>
          <p className="text-base text-body-color mb-2">Visakhapatnam</p>
          <button className="inline-flex items-center justify-center rounded-md bg-blue-800 text-white py-3 px-8 text-center mb-8 text-base font-normal  hover:bg-opacity-90  ">
            BookNow
          </button>
        </div>
      </div>
    </>
  );
};

export default Curosal;
