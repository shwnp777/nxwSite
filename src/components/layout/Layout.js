import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./NavBar";
import SideDrawer from "./Sidebar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-full">
      <SideDrawer open={open} setOpen={setOpen} classNames={classNames} />
      <div className="flex flex-1 flex-col lg:pl-64">
        <Nav open={open} setOpen={setOpen} classNames={classNames} />

        <main className="flex-1 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
