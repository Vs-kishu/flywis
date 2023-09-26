import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  PrimaryButton,
  ValidInput,
} from "../../utils/helpingComponent";

const LogIn = () => {
  return (
    <section>
      <Header heading={"Login"} />
      <div className="w-[64.87rem] h-[49.5rem] bg-primary text-secondary mx-auto py-20 px-36 flex flex-col gap-8 items-center mb-20">
        <ValidInput
          props={{
            label: "Phone No.",
            type: "number",
            placeholder: "Enter your Phone Number",
          }}
        />
        <ValidInput
          props={{
            type: "password",
            label: "Password",
            placeholder: "Enter your Password",
          }}
        />
        <div className="flex justify-center my-4">
          <PrimaryButton btnName={"SIGN IN"} />
        </div>
        <div className="text-2xl ">
          <span className="text-white mr-1 font-bold">Forgot Password?</span>
          <Link className="font-bold underline underline-offset-2 ">
            CLICK HERE
          </Link>
        </div>
        <hr className=" bg-secondary w-1/2 my-9" />
        <div className="text-2xl">
          <span className="text-white mr-1 font-base">
            Don’t Have an Account?{" "}
          </span>
          <Link className="font-bold underline underline-offset-2" to="/signup">
            SIGN UP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
