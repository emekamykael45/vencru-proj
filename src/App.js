import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import classnames from "classnames";

import Header from "./components/header";
import Sidebar from "./components/sidebar";

import UserRoutes from "./dashbase/routes";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div
        className={classnames(
          "dashboard flex justify-start items-start min-h-[100vh]",
          {
            hide_sidebar: isSidebarOpen,
          }
        )}
      >
        <Sidebar
          open={isSidebarOpen}
          toggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div
          className="dashboard_content m-[0_0_0_auto] p-[0px_0px_50px_0px] md:p-[32px_30px_50px_30px]
          min-h-[100vh] bg-gray-50"
        >
          {window.innerWidth < 769 && (
            <Header
              open={isSidebarOpen}
              toggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          )}

          <UserRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
