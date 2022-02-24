import React from "react";
import { Outlet } from "react-router-dom";
import Navbarusers from "../../../components/Dashboard/Users/NavBarUsers";

const Usersdashboard = () => {
  return (
    <div className=" h-full overflow-y-auto flex">
      <Navbarusers />
      <div className='w-full p-10'>
        <Outlet />
      </div>
    </div>
  );
};

export default Usersdashboard;
