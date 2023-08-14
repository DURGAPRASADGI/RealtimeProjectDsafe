import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { MdHelp, MdOutlineSportsCricket } from "react-icons/md";
import { default as img1 } from "../assets/images/logo1.png";
import { RiUser2Fill } from "react-icons/ri";
// import { default as image } from "../../assets/Image/bgimage.jpg";
import { default as image } from "../assets/images/bgimage.jpg";

const UserDashboard = () => {
  const [nav, setNav] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState(false);
  const [selectedItems, setSelectedItems] = useState(false);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div className="max-w-[1640px] mx-auto items-center pb-16 ">
        <div className="bg-black/50 absolute w-full z-10 top-0 left-0 h-52 overflow-hidden"></div>
        <img src={image} className="h-52 w-[100%]" alt="" />
        <div className=" flex flex-row items-center justify-between  -mt-40 ">
          <div className="ml-10 z-30 ">
            <img src={img1} alt="" className="w-24 rounded-full" />
          </div>
          <div className=" hidden z-30 text-white items-center text-center md:block">
            <h1 className="text-5xl pb-5">Andhra Cricket Club</h1>
            <p className="max-w-xl">
              Cricket is a game of the mind. If you can stay calm and focused,
              you'll be more likely to succeed
            </p>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer bg-blue-900 text-black mr-10 rounded-full shadow-xl px-4 py-3 animate-bounce z-30"
          >
            <AiOutlineMenu size={40} />
          </div>
        </div>

        {nav ? (
          <div className=" fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[19rem] h-screen bg-white z-50 duration-500"
              : "fixed top-0 left-[-100%] w-[18rem] h-screen bg-white z-50 duration-500"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer"
          />
          <h2 className="text-2xl p-4">
            Criket<span className="font-bold">Club</span>
          </h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex ">
                <RiUser2Fill
                  size={25}
                  className="mr-4 "
                  onClick={() => setSelectedItems(!selectedItems)}
                />{" "}
                <a
                  href="/#reg"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Registration
                </a>
                {/* <Link to="/#reg">Registration</Link> */}
              </li>
              <li className="text-xl py-4 flex">
                <BsBuilding
                  size={25}
                  className="mr-4"
                  onClick={() => setSelectedFoods(!selectedFoods)}
                />{" "}
                <a href="/#Facility">Facility</a>
              </li>

              <li className="text-xl py-4 flex">
                <MdOutlineSportsCricket size={25} className="mr-4" />{" "}
                <a href="#Academy"> Academy</a>
              </li>
              <li className="text-xl py-4 flex">
                <MdHelp size={25} className="mr-4" /> Help
              </li>
              <li className="text-xl py-4 flex">
                <FaUserFriends size={25} className="mr-4" /> Invite Friends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
