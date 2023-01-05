import SettingsPage from "./settings";

const Page = () => {
  return <div>Page</div>;
};

const Navigations = [
  {
    icon: "home",
    label: "Home",
    to: "/home",
    component: <Page />,
  },
  {
    icon: "dashboard",
    label: "Dashboard",
    to: "/dashboard",
    component: <Page />,
  },
  {
    icon: "projects",
    label: "Projects",
    to: "/projects",
    component: <Page />,
  },
  {
    icon: "tasks",
    label: "Tasks",
    to: "/tasks",
    component: <Page />,
  },
  {
    icon: "reporting",
    label: "Reporting",
    to: "/reporting",
    component: <Page />,
  },
  {
    icon: "users",
    label: "Users",
    to: "/users",
    component: <Page />,
  },
  {
    icon: "support",
    label: "Support",
    to: "/support",
    component: <Page />,
  },
  {
    icon: "settings",
    label: "Settings",
    to: "/settings",
    component: <SettingsPage />,
  },
];

export default Navigations;
