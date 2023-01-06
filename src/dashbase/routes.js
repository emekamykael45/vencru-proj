import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navigations from "./navigations";

const UserRoutes = () => {
  const navigate = useNavigate();

  const routes = Navigations?.filter((x) => x?.to);

  const paths = routes?.map((x) => x?.to);

  const pathname = window.location.pathname;

  useEffect(() => {
    if (!paths.includes(pathname)) {
      return navigate("/settings");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      {routes?.map((route, i) => (
        <Route key={i} path={route.to} element={route.component} />
      ))}
    </Routes>
  );
};

export default UserRoutes;
