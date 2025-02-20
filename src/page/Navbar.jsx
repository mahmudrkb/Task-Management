import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-3 ">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>Home</li>
                <li>{user?.name}</li>
              </ul>
            </div>
            
            <a className="btn btn-ghost text-xl">GetItDone</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>Home</li>
            </ul>
          </div>
          <div className="navbar-end ">
           <div className="flex gap-3">
           <Link to="/login" className="px-3 hover:text-white  rounded-md py-1 border-2 border-white">
                Log In
            </Link>
            <div className="avatar online">
              <div className="w-9 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
