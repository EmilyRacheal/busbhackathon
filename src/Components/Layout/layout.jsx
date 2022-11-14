import React from "react";
import Navbar from "./Navbar/navbar";
import Sidenav from "./Sidebar/sidenav";
import Navhead from "./Navhead/navhead"
import EmployeeBody from "./EmployeeBody/employeebody"
import Emplyoercard from "./EmployersCard/emplyoercard";

const layout = () => {
  return (
    <div className="w-full">
       <Navbar />
        <Sidenav />
        <Navhead />
        <EmployeeBody />
        <Emplyoercard />
    </div>
  );
};

export default layout;
