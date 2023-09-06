import React from "react";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="fs-1">
      LogIn
      <div>
        <Link to={"/signup"} className="text-decoration-none">
          signup
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
