import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-base-200 h-screen  to-green-900 ">
      <div className="container mx-auto p-5">
      <div className="text-center space-y-5 max-w-xl  text-green-100 mx-auto mt-36  lg:mt-20 ">
      <h1 className="text-3xl lg:text-5xl font-bold"> Get Things Done with Us</h1>
      <p className="">Organize, track, and complete tasks effortlessly. Whether it’s work, or personal projects, we’ve got you covered.</p>
      <Link className="btn " to="/task" >
        Get Started
      </Link>
      </div>
      </div>
    </div>
  );
};

export default Banner;
