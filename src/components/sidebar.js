import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

import Navigations from "../dashbase/navigations";

import Header from "./header";

import Icon from "../assets/svg";
import { bannerImg, avatar } from "../assets/img";
import FormInput from "./form-input";

const Navlink = ({ nav, handleSidebarToggle }) => (
  <NavLink
    className={({ isActive }) =>
      [
        "flex justify-between items-center p-[8px_12px] font-medium text-gray-700 rounded-[6px] hover:bg-gray-50",
        isActive ? "bg-gray-50 text-gray-900" : null,
      ]
        .filter(Boolean)
        .join(" ")
    }
    to={nav?.to}
    onClick={handleSidebarToggle}
  >
    <div className="flex">
      <Icon name={nav?.icon} />
      <p className="ml-[12px] font-[16px]">{nav?.label}</p>
    </div>

    {nav?.badge && (
      <p className="p-[1px_10px_2px_10px] text-[14px] text-gray-700 font-[500] bg-gray-100 rounded-[16px]">
        10
      </p>
    )}
  </NavLink>
);

const Sidebar = ({ open, toggle }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const handleSidebarToggle = () => {
    if (window.innerWidth < 769) {
      toggle();
    }
  };
  useEffect(() => {
    handleSidebarToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topNavs = Navigations.slice(0, 6) || [];
  const bottomNavs = Navigations.slice(6, 8) || [];

  return (
    <div
      className={classnames(
        "sidebar_container top-0 bottom-0 left-0 w-full md:w-fit bg-white z-[1] mt-[60px] md:mt-0",
        {
          hidden: !open,
          fixed: open,
        }
      )}
    >
      <div className="sidebar_container_inner p-0 pb-[82px] md:pb-[32px] md:pt-[32px] h-[100vh] w-full md:w-[279px] overflow-y-scroll bg-white">
        {window.innerWidth > 769 && <Header open={open} toggle={toggle} />}

        <div className="mt-[24px] px-[16px]">
          <FormInput
            icon="search"
            name="alternativeEmail"
            type="email"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-[24px] px-[16px] gap-[4px]">
          {topNavs?.map((nav, i) => (
            <Navlink
              key={i}
              nav={nav}
              handleSidebarToggle={handleSidebarToggle}
            />
          ))}
          <div className="mt-[23px]"></div>
          {bottomNavs?.map((nav, i) => (
            <Navlink
              key={i}
              nav={nav}
              handleSidebarToggle={handleSidebarToggle}
            />
          ))}
        </div>

        {showBanner && (
          <div className="mt-[24px] px-[16px]">
            <div className="p-[20px_16px] bg-gray-50 rounded-[8px]">
              <p className="text-[14px] font-[500] text-gray-900">
                New features available!
              </p>
              <p className="mt-[4px] text-[14px] text-gray-500 leading-[20px]">
                Check out the new dashboard view. Pages now load faster.
              </p>

              <img
                src={bannerImg}
                alt="Sidebar banner"
                className="my-[16px] w-[215px] h-[136px] object-contain rounded-[6px]"
              />

              <div className="flex gap-[12px]">
                <p
                  className="text-[14px] text-gray-500 cursor-pointer"
                  onClick={() => setShowBanner(false)}
                >
                  Dismiss
                </p>
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] font-[500] text-primary-700"
                >
                  What's new?
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="my-[24px] px-[16px]">
          <div className="border-gray-200 border-b-[1px]"></div>
        </div>

        <div className="px-[16px] flex justify-between items-start">
          <div className="flex">
            <img
              src={avatar}
              alt="Avatar"
              className="mr-[12px] w-[40px] h-[40px] object-cover rounded-full"
            />

            <div>
              <p className="text-[14px] font-[500] text-gray-900">
                Olivia Rhye
              </p>
              <p className="text-[14px] text-gray-500">olivia@untitledui.com</p>
            </div>
          </div>

          <div className="cursor-pointer">
            <Icon name="logout" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
