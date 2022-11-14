import React from "react";
import Navbar from "./Navbar/navbar";
import Sidenav from "./Sidebar/sidenav";
import Navhead from "./Navhead/navhead"

const layout = () => {
  return (
    <div className="w-full">
       <Navbar />
        <Sidenav />
        <Navhead />
    </div>
  );
};

export default layout;
