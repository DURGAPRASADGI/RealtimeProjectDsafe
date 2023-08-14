import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ForgotPassword from "./ForgotPassword";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ handclick }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [login, setLogin] = useState({
    emailId: "",
    password: "",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPassword = (password) => {
    // Regular expression for password validation (at least 6 characters)
    return password.length >= 6;
  };

  const getlogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginHandclick = async (e) => {
    e.preventDefault();

    // Validate email
    if (!isValidEmail(login.emailId)) {
      toast.error("Please enter a valid email.", {
        position: "top-center",
      });
      return; // Prevent form submission if email is invalid
    }

    // Validate password
    if (!isValidPassword(login.password)) {
      toast.error("Password should be at least 6 characters.", {
        position: "top-center",
      });
      return; // Prevent form submission if password is invalid
    }

    try {
      const res = await axios.get("http://localhost:8082/dsafetech/reg/user");
      const fetchedDetails = res.data;

      // Check for a matching user
      const matchingUser = fetchedDetails.find(
        (user) =>
          user.gmailId === login.emailId && user.password === login.password
      );

      if (matchingUser) {
        setTimeout(() => {
          handClickPassword();
          handclick();
        });
        navigate("/event");
      } else {
        toast.error("Invalid user details", {
          position: "top-center",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginHand = (e) => {
    e.preventDefault();
    handclick();
  };

  const handClickPassword = useCallback(() => {
    setPassword(
      (pre) => {
        return !pre;
      },
      [password]
    );
  });

  return (
    <>
      <div class="w-full max-w-xs mx-auto mt-24">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-between  items-center  mb-4">
            <h1 className="font-medium mb-3 text-3xl">Login</h1>
            <a href="#">
              {" "}
              <IoClose className=" text-xl " onClick={loginHand} />
            </a>
          </div>
          <div class="mb-4 ">
            <label
              class="block text-gray-700 text-lg font-bold mb-2"
              for="username"
            >
              EmailId
            </label>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="EmailId"
              type="email"
              name="emailId"
              placeholder="EmailId"
              value={login.emailId}
              onChange={getlogin}
              required
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-lg font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={login.password}
              onChange={getlogin}
              required
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={loginHandclick}
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm cursor-pointer text-blue-500 hover:text-blue-800"
              onClick={handClickPassword}
            >
              Forgot Password?
            </a>
          </div>
          <p class="text-center text-gray-500 text-xs pt-5">
            &copy;2023 dsafetech. All rights reserved.
          </p>
        </form>
      </div>
      {password && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 z-50 bg-[#303133] ">
          <ForgotPassword handClickPassword={handClickPassword} />
        </div>
      )}
    </>
  );
};

export default Login;
