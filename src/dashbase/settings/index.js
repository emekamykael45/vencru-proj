import { useState } from "react";

import Billing from "./billing";

const Settings = () => {
  const [selectedNav, setSelectedNav] = useState("Billing");

  const navs = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "Integrations",
    "API",
  ];

  const contentToShow = () => {
    switch (selectedNav) {
      case "Billing":
        return <Billing />;

      default:
        return <div className="mt-[32px]">Nothing to show.</div>;
    }
  };

  return (
    <>
      <div className="px-[16px] md:px-0">
        <p className="mt-[32px] md:mt-0 text-[24px] md:text-[30px] font-[500] text-gray-900">
          Settings
        </p>
        <p className="text-[14px] text-gray-500 leading-[24px]">
          Manage your team and preferences here.
        </p>
      </div>

      <div className="mt-[24px] flex vertical_scroll">
        {navs?.map((item, i) => (
          <div
            key={i}
            onClick={() => setSelectedNav(item)}
            className={`p-[9px_16px] text-[14px] font-[500] whitespace-nowrap border-gray-300 border-[1px] border-r-0 md:first:rounded-[8px_0px_0px_8px] last:border-r-[1px] md:last:rounded-[0px_8px_8px_0px] cursor-pointer ${
              selectedNav === item
                ? `text-gray-800 bg-gray-50`
                : `text-gray-700 bg-white`
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {contentToShow()}
    </>
  );
};

export default Settings;
