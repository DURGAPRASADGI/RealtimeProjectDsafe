import React from "react";
import { eventArray } from "../Arrays/Data";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const handClickEvents = () => {
    navigate("/team");
  };
  return (
    <section>
      <h1 className="w-auto text-3xl font-semibold pb-5">Events</h1>
      <div className="items-center grid md:grid-cols-2 sm:grid-cols-1   justify-between relative top-0 gap-5">
        {eventArray.map((event, index) => (
          <button
            className="text-center px-5 py-5 w-[100%] h-20 shadow text-white bg-purple-500 hover:bg-purple-800 cursor-pointer "
            key={index}
            onClick={handClickEvents}
          >
            {event.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Events;
