import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
