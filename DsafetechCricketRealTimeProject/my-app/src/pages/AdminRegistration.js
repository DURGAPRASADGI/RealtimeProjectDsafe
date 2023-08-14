import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AdminRegistration = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gmailId: "",
    gender: "",
    phone: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!form.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    }
    if (!form.gmailId.trim()) {
      newErrors.gmailId = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.gmailId)) {
      newErrors.gmailId = "Email is invalid";
    }
    if (!form.gender) {
      newErrors.gender = "Please select a gender";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Contact no is required";
    } else if (!/^[0-9]+$/.test(form.phone)) {
      newErrors.phone = "Contact no must be a number";
    }
    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios
        .post("http://localhost:8082/dsafetech/reg/admin", form)
        .then(() =>
          toast.success("Your registration was successful", {
            position: "top-center",
          })
        )
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div>
        <span className="text-xl font-bold whitespace-nowrap dark:text-white">
          Registration Details
        </span>
      </div>
      <br />
      <form
        className="flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2  pb-5 mx-5 md:mx-0 md:my-0  overflow-y-scroll"
        onSubmit={handleSubmit}
      >
        <div className="md:w-1/3 max-w-xs">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt=""
          />
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1 font-semibold text-base">Sign up</label>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              for
            </p>
          </div>

          {/* First Name */}
          <input
            className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded ${
              errors.firstName && "border-red-500"
            }`}
            type="text"
            placeholder="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleInputChange}
            required
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}

          {/* Last Name */}
          <input
            className={`text-sm w-full px-4 py-2 my-5 border border-solid border-gray-300 rounded mt-4 ${
              errors.lastName && "border-red-500"
            }`}
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleInputChange}
            required
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}

          {/* Email */}
          <input
            className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded ${
              errors.gmailId && "border-red-500"
            }`}
            type="text"
            placeholder="EmailId"
            name="gmailId"
            value={form.gmailId}
            onChange={handleInputChange}
            required
          />
          {errors.gmailId && (
            <p className="text-red-500 text-xs mt-1">{errors.gmailId}</p>
          )}

          {/* Gender */}
          <div className="flex items-center mb-4 my-5 space-x-2">
            <input
              id="default-radio-1"
              type="radio"
              value="Female"
              name="gender"
              className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${
                errors.gender && "border-red-500"
              }`}
              checked={form.gender === "Female"}
              onChange={handleInputChange}
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Female
            </label>
            <input
              id="default-radio-2"
              type="radio"
              value="Male"
              name="gender"
              className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600${
                errors.gender && "border-red-500"
              }`}
              checked={form.gender === "Male"}
              onChange={handleInputChange}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Male
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}

          <input
            className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded ${
              errors.phone && "border-red-500"
            }`}
            type="number"
            placeholder="Contact no"
            name="phone"
            value={form.phone}
            onChange={handleInputChange}
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}

          <input
            className={`my-4 text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded ${
              errors.username && "border-red-500"
            }`}
            type="text"
            placeholder="userName"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">{errors.username}</p>
          )}

          <input
            className={`text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded ${
              errors.password && "border-red-500"
            }`}
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default AdminRegistration;
