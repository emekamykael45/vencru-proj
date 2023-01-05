import React from "react";

import { Arrow } from "./arrow";
import { Check } from "./check";
import { Dashboard } from "./dashboard";
import { Download } from "./download";
import { DownloadGray } from "./download-gray";
import { Home } from "./home";
import { Logout } from "./logout";
import { Mail } from "./mail";
import { Plus } from "./plus";
import { Projects } from "./projects";
import { Reporting } from "./reporting";
import { Search } from "./search";
import { Settings } from "./settings";
import { Support } from "./support";
import { Tasks } from "./tasks";
import { Users } from "./users";

const Icon = ({ name }) => {
  switch (name) {
    case "arrow":
      return <Arrow />;
    case "check":
      return <Check />;
    case "dashboard":
      return <Dashboard />;
    case "download":
      return <Download />;
    case "downloadGray":
      return <DownloadGray />;
    case "home":
      return <Home />;
    case "logout":
      return <Logout />;
    case "mail":
      return <Mail />;
    case "plus":
      return <Plus />;
    case "projects":
      return <Projects />;
    case "reporting":
      return <Reporting />;
    case "search":
      return <Search />;
    case "settings":
      return <Settings />;
    case "support":
      return <Support />;
    case "tasks":
      return <Tasks />;
    case "users":
      return <Users />;
    default:
      return <Plus />;
  }
};

export default Icon;
