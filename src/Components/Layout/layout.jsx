import React from "react";
import Navbar from "./Navbar/navbar";
import Sidenav from "./Sidebar/sidenav";

const layout = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Sidenav />
    </div>
  );
};

export default layout;
