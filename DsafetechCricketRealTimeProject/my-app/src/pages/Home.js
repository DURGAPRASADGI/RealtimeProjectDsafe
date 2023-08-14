import React from "react";
import Multicursal from "./Multicursal";
import Facility from "./Facility";
import Forms from "../components/User/Forms";
import Brands from "../components/User/Brands";

const Home = () => {
  return (
    <>
      <Multicursal />
      <Facility />
      <Forms />
      <Brands />
    </>
  );
};

export default Home;
