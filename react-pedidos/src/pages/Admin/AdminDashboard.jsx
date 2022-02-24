import React from "react";
import { Outlet } from "react-router-dom";
import NavLink from "../../components/Dashboard/NavLink";

const Admindashboard = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <NavLink />
        <div className="h-full px-16 py-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admindashboard;
