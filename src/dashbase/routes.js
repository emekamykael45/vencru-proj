import { Routes, Route, Navigate } from "react-router-dom";

import Navigations from "./navigations";

const UserRoutes = () => {
  const routes = Navigations?.filter((x) => x?.to);

  const paths = routes?.map((x) => x?.to);

  const pathname = window.location.pathname;

  return (
    <Routes>
      {routes?.map((route, i) => (
        <Route key={i} exact path={route.to || ""} element={route.component} />
      ))}

      <Route
        path="*"
        render={() => (
          <Navigate to={paths.includes(pathname) ? pathname : "/settings"} />
        )}
      />
    </Routes>
  );
};

export default UserRoutes;
