import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Slide from "./Slide";
import axios from "axios";
import { ImageData, brand, faclits } from "../Arrays/Data";

const Brands = () => {
  // const [brands, setBrands] = useState([]);
  // useEffect(() => {
  //   const fetchBrands = async () => {
  //     await axios
  //       .get("http://localhost:8082/dsafetech/all/brands")
  //       .then((res) => {
  //         setBrands(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   fetchBrands();
  // }, []);

  const imageSlider = brand.map((img, index) => (
    <Slide img={img.imageurl} key={index} />
  ));
  return (
    <>
      <Marquee direction="left" speed={100} delay={1}>
        {imageSlider}
      </Marquee>
    </>
  );
};

export default Brands;
