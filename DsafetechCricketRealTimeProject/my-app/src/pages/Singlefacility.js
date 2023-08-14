import React from "react";

const Singlefacility = ({ url }) => {
  return (
    <>
    <div className="relative block  bg-gray-900 group  lg:w-[31%] md:w-[48%] sm:w-full ">
      <img
        className="absolute inset-0 object-cover
								w-full h-full group-hover:opacity-50 sm:w-full "
        src={url}
        alt=""
      />
      <div className="relative p-5">
        <div className="mt-40">
          {/* Hidden content */}
          <div
            className="transition-all transform
								translate-y-8 opacity-0
								group-hover:opacity-100
								group-hover:translate-y-0"
          >
            <div className="p-2 -mt-40 text-white">
              <h1 className="tracking-widest text-sm title-font font-medium mb-1">
                Coach
              </h1>
              <h1 className="title-font text-lg font-medium  mb-3">
                We provide Coaching
              </h1>
              <p className="leading-relaxed pb-2">
                Plan and deliver sessions for players of all ages and develop
                individual training plans Create a positive and supportive
                learning
              </p>
              <button
                className="px-4 py-2 text-sm
											text-white bg-green-600"
              >
                Visit site
              </button>
            </div>
          </div>
          {/* End of hidden content */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Singlefacility;
