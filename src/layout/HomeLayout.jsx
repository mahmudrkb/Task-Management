import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../page/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default HomeLayout;
