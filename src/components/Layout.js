import React from "react";
import Header from "./Header";

import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="bg-slate-800 ">
      <div className="">
        <Header />
        <div className="flex ">
          <div className="w-[12%]  ">
            <Sidebar />
          </div>

          <div className="  w-[88%] ">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
