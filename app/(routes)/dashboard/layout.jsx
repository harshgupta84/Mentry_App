import React from "react";
import SideNavBar from "./_components/SideNavBar";
import DashboardHeader from "./_components/DashboardHeader";

function layout({ children }) {
  return (
    <div>
      <div className="hidden md:block md:w-64 h-screen fixed border border-white">
        <SideNavBar />
      </div>
      <div className="md:ml-72"><DashboardHeader/>{children}</div>
    </div>
  );
}

export default layout;
