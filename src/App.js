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
        className={classnames("dashboard", {
          hide_sidebar: isSidebarOpen,
        })}
      >
        <Sidebar
          open={isSidebarOpen}
          toggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="dashboard_content">
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
