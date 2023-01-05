import React, { useEffect } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

import Navigations from "../dashbase/navigations";

import Header from "./header";

import Icon from "../assets/svg";

const Sidebar = ({ open, toggle }) => {
  let navigations = Navigations?.slice(0, Navigations?.length - 1) || [];

  const handleSidebarToggle = () => {
    if (window.innerWidth < 769) {
      toggle();
    }
  };
  useEffect(() => {
    handleSidebarToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={classnames(
        "sidebar_container top-0 bottom-0 left-0 bg-[#fff] z-[1]",
        {
          hidden: !open,
          fixed: open,
          // "": open,
        }
      )}
    >
      <div className="sidebar_container_inner p-0 pb-[30px] h-[100vh] w-[255px] overflow-y-scroll bg-[#fff]">
        {window.innerWidth > 769 && <Header open={open} toggle={toggle} />}

        <div className="mt-[24px] px-[16px]">
          {navigations?.map((nav, i) => (
            <NavLink
              key={i}
              className="flex justify-start items-center p-[8px_12px] font-medium"
              to={nav?.to}
              onClick={handleSidebarToggle}
            >
              <Icon name={nav?.icon} className="" />
              <p className="ml-[12px] font-[16px]">{nav?.label}</p>
            </NavLink>
          ))}

          <div className="link logout" onClick={() => handleSidebarToggle()}>
            <Icon name="logout" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
