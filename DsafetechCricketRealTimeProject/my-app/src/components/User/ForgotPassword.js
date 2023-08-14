import axios from "axios";
import React, { useState } from "react";

const ForgotPassword = ({ handClickPassword }) => {
  const [forgotPassword, setForgetPassword] = useState({
    newPassword: "",
    username: "",
    gmailId: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setForgetPassword({ ...forgotPassword, [e.target.name]: e.target.value });
  };

  const validatePasswords = () => {
    if (forgotPassword.newPassword !== confirmPassword) {
      return "Passwords do not match";
    } else {
      return null;
    }
  };

  const handleSubmit = (e) => {
    // TODO: send password reset email
    e.preventDefault();
    console.log(forgotPassword);
    axios
      .post(
        "http://localhost:8082/dsafetech/user/forgotPassword",
        forgotPassword
      )
      .then(() => alert("your  password change"), handClickPassword())
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
      <div className="flex flex-col justify-center py-12 sm:py-16 lg:py-12 bg-slate-300 shadow">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Forgot Password?
          </h2>

          <p className="text-center text-gray-600 mb-6">
            Don't worry, we can help you get back into your account.
          </p>

          <form className="mt-6">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Email address
              </label>

              <input
                type="email"
                id="email"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="gmailId"
                value={forgotPassword.gmailId}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800">
                userName
              </label>

              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="username"
                value={forgotPassword.username}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>

              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="newPassword"
                value={forgotPassword.newPassword}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-800">
                Confirm Password
              </label>

              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-gray-900 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-auto px-4 py-2 tracking-wide text-white transition-colors duration-200 bg-purple-600 border border-purple-600 hover:bg-purple-700 focus:outline-none"
              onClick={handleSubmit}
            >
              Change Password
            </button>

            <p>{validatePasswords()}</p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
