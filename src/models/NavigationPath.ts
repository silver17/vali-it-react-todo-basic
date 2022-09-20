import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";

type NavType = {
  name: string;
  path: string;
  component: React.FC;
};

const NavigationPath: NavType[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Admin",
    path: "/admin",
    component: AdminPage,
  },
];

export default NavigationPath;
