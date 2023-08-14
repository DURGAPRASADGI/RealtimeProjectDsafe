import React, { useCallback, useEffect, useState } from "react";
import Login from "./Login";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import ShowEvents from "./ShowEvents";

const Registration = () => {
  const [getAllUsers, setGetAllUsers] = useState([]);
  const [userEvent, setUserEvent] = useState(false);
  const [login, setLogin] = useState(false);
  const handclick = useCallback(() => {
    setLogin((pre) => {
      return !pre;
    });
  }, [login]);

  const handClickUserEvent = () => {
    setUserEvent((pre) => {
      return !pre;
    });
  };
  const [userRegistration, setUSerRegistration] = useState({
    firstName: "",
    lastName: "",
    gmailId: "",
    gender: "",
    username: "",
    password: "",
    mobileNumber: "",
  });

  useEffect(() => {
    const getuserdata = async () => {
      try {
        const res = await axios.get("http://localhost:8082/dsafetech/reg/user");
        setGetAllUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getuserdata();
  });

  const handclickUser = (e) => {
    setUSerRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Regular expression for phone number validation (10 digits, optional + at the beginning)
    const phoneRegex = /^\+?\d{10}$/;
    return phoneRegex.test(phone);
  };

  const isValidPassword = (password) => {
    // Regular expression for password validation (at least 6 characters)
    return password.length >= 6;
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(userRegistration);

    // Check if any required field is empty
    const requiredFields = [
      "firstName",
      "lastName",
      "username",
      "gmailId",

      "password",
      "mobileNumber",
      "gender",
    ];
    for (const field of requiredFields) {
      if (!userRegistration[field]) {
        toast.error(`${field} is required.`, {
          position: "top-center",
        });
        return; // Prevent form submission if any required field is empty
      }
    }

    // Validate email
    if (!isValidEmail(userRegistration.gmailId)) {
      toast.error("Please enter a valid email.", {
        position: "top-center",
      });
      return; // Prevent form submission if email is invalid
    }

    // Validate phone number
    if (!isValidPhoneNumber(userRegistration.mobileNumber)) {
      toast.error(
        "Please enter a valid phone number (10 digits, optional + at the beginning).",
        {
          position: "top-center",
        }
      );

      return; // Prevent form submission if phone number is invalid
    }

    // Validate password
    if (!isValidPassword(userRegistration.password)) {
      toast.error("Password should be at least 6 characters.", {
        position: "top-center",
      });

      return null; // Prevent form submission if password is invalid
    }

    //unique validation
    getAllUsers.map((user) => {
      if (user.username === userRegistration.username) {
        toast.error(
          `${userRegistration.username} userName has been already taken`,
          {
            position: "top-center",
          }
        );

        return null;
      } else if (user.gmailId === userRegistration.gmailId) {
        toast.error(
          ` ${userRegistration.gmailId} email has been already registered`,
          {
            position: "top-center",
          }
        );

        return null;
      } else if (
        user.mobileNumber === parseInt(userRegistration.mobileNumber)
      ) {
        toast.error(
          `${userRegistration.mobileNumber} Number has been already taken`,
          {
            position: "top-center",
          }
        );
        return null;
      }
    });
    axios
      .post("http://localhost:8082/dsafetech/reg/user", userRegistration)
      .then(() =>
        toast.success("your registration was successfull", {
          position: "top-center",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section
        className=" py-1 bg-blueGray-50 mx-auto  "
        id="reg"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="w-full  px-10 mx-auto  flex flex-col justify-between items-center lg:flex-row  drop-shadow-md  ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg bg-blueGray-100 border-0  lg:w-6/12 bg-slate-300 shadow  ">
            <div className="rounded-t  mb-0 px-6 py-6 ">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Registration Form
                </h6>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 z-50">
              <form className=" text-center">
                <div className="flex lg:flex-col flex-wrap">
                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        First Name
                      </p>

                      <input
                        placeholder=""
                        type="text"
                        className="border placeholder-gray-400 focus:outline-none
                        

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="firstName"
                        value={userRegistration.firstName}
                        required={true}
                        onChange={handclickUser}
                      />
                    </div>
                  </div>

                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Last Name
                      </p>

                      <input
                        placeholder=""
                        type="text"
                        className="border placeholder-gray-400 focus:outline-none

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="lastName"
                        value={userRegistration.lastName}
                        onChange={handclickUser}
                        required={true}
                      />
                    </div>
                  </div>

                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        User name
                      </p>

                      <input
                        placeholder=""
                        type="text"
                        className="border placeholder-gray-400 focus:outline-none

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="username"
                        value={userRegistration.username}
                        required={true}
                        onChange={handclickUser}
                      />
                    </div>
                  </div>

                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        EmailId
                      </p>

                      <input
                        placeholder=""
                        type="email"
                        className="border placeholder-gray-400 focus:outline-none

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="gmailId"
                        value={userRegistration.gmailId}
                        onChange={handclickUser}
                      />
                    </div>
                  </div>

                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        Password
                      </p>

                      <input
                        placeholder=""
                        type="password"
                        className="border placeholder-gray-400 focus:outline-none

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="password"
                        required={true}
                        value={userRegistration.password}
                        onChange={handclickUser}
                      />
                    </div>
                  </div>

                  <div className="w-full  px-4">
                    <div className="relative w-full mb-3">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">
                        MobileNumber
                      </p>

                      <input
                        placeholder=""
                        type="number"
                        className="border placeholder-gray-400 focus:outline-none

    focus:border-black w-full pt-2 pr-4 pb-2 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white

    border-gray-300 rounded-md"
                        name="mobileNumber"
                        value={userRegistration.mobileNumber}
                        required={true}
                        onChange={handclickUser}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 mt-1">
                    <div className="relative w-full mb-1 ">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 font-medium text-gray-600  rounded-lg absolute left-3">
                        Gender
                      </p>
                      <div className="flex items-center mt-1 pt-4">
                        <input
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          className="mr-2"
                          checked={userRegistration.gender === "male"}
                          required={true}
                          onChange={handclickUser}
                        />
                        <label htmlFor="male" className="text-gray-700 mr-4">
                          {" "}
                          Male{" "}
                        </label>
                        <input
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          className="mr-2"
                          checked={userRegistration.gender === "female"}
                          onChange={handclickUser}
                        />
                        <label htmlFor="female" className="text-gray-700 mr-4">
                          {" "}
                          Female{" "}
                        </label>
                        <input
                          type="radio"
                          id="other"
                          name="gender"
                          value="other"
                          className="mr-2"
                          checked={userRegistration.gender === "other"}
                          onChange={handclickUser}
                        />
                        <label htmlFor="other" className="text-gray-700">
                          {" "}
                          Other{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 space-x-4">
                  <button
                    className="bg-stone-500  py-3 px-8 text-white active:bg-pink-600 font-bold uppercase text-xs  rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:bg-stone-800"
                    type="button"
                    onClick={submit}
                  >
                    Sign-up
                  </button>

                  <button
                    className="bg-stone-500 py-3 px-8 text-white active:bg-pink-600 font-bold uppercase text-xs  rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 hover:bg-stone-800"
                    type="button"
                    onClick={handclick}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-auto sm:bg-cover relative  top-0 lg:w-5/12  sm:mt-10   shadow-lg bg-white p-5 mb-60 ">
            <ShowEvents handClickUserEvent={handClickUserEvent} />
          </div>
        </div>
      </section>
      {login ? (
        <div className=" fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#3031336f] ">
          <Login handclick={handclick} />
        </div>
      ) : (
        ""
      )}

      <ToastContainer />
    </>
  );
};

export default Registration;
