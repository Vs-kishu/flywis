import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section>
      <h1 className="text-center text-6xl font-light text-primary my-8">
        Login
      </h1>
      <div className="w-[800px] bg-primary text-secondary mx-auto my-10 flex flex-col gap-6 items-center py-10">
        <label
          htmlFor=""
          className="flex flex-col gap-2 w-2/3 font-medium text-lg"
        >
          Phone No.
          <input
            type="text"
            name=""
            id=""
            className="py-2 px-4 border-none text-gray-700 text-base"
            placeholder="Enter your Phone Number"
          />
        </label>
        <label
          htmlFor=""
          className="flex flex-col gap-2 w-2/3 font-medium text-lg"
        >
          Password
          <input
            type="text"
            name=""
            id=""
            className="py-2 px-4 border-none text-gray-700 text-base"
            placeholder="Enter your Password"
          />
        </label>
        <div className="w-1/2 bg-secondary text-center mt-6 font-bold text-xl">
          <button className=" text-primary py-2">SIGN IN</button>
        </div>
        <div>
          <span className="text-white mr-1 font-semibold">
            Forgot Password?
          </span>
          <Link className="font-semibold underline underline-offset-2 ">
            CLICK HERE
          </Link>
        </div>
        <hr className=" bg-secondary w-1/2" />
        <div>
          <span className="text-white mr-1 font-semibold">
            Don’t Have an Account?{" "}
          </span>
          <Link
            className="font-semibold underline underline-offset-2"
            to="signup"
          >
            SIGN UP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
