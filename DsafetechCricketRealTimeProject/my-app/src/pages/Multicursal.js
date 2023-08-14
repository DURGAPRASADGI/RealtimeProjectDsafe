import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Curosal from "./Curosal";
import { responsive,ImageData } from "../components/Arrays/Data";
// import { responsive,ImageData } from "../Arrays/Data";

const Multicursal = () => {
  const list = ImageData.map((item, index) => (
    <Curosal key={index} url={item.imageurl} />
  ));
  return (
    <>
      <section className="pt-10 lg:pb-[90px]  " data-aos="zoom-in-up">
        <div className="container mx-auto shadow-2xl">
          <div className=" flex flex-wrap  ">
            <div className="w-full px-4 ">
              <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true}
                partialVisible={false}
                showDots={true}
                arrows={false}
                transitionDuration={10}
                dotListClass="custom-dot-list-style"
              >
                {list}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Multicursal;
