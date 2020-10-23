// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Documents from "views/Documents/Documents.js";
import UserDocs from "views/UserProfile/UserDocs.js";
import Calendar from "views/Calendar/Calendar.js";
import Login from "views/Login/Login.js";
import Signup from "views/Signup/Signup";

const AdminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/documents",
    name: "Clients",
    icon: LibraryBooks,
    component: Documents,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: CalendarTodayIcon,
    component: Calendar,
    layout: "/admin"
  },
  {
    path: "/userdocs",
    name: "UserDocs",
    icon: LibraryBooks,
    component: UserDocs,
    layout: "/admin"
  }
];
const CustomerRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/customer"
  },
  {
    path: "/documents",
    name: "Documents",
    icon: LibraryBooks,
    component: Documents,
    layout: "/customer"
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: CalendarTodayIcon,
    component: Calendar,
    layout: "/customer"
  }
];

const AuthRoutes = [
  {
    path: "/login",
    name: "Login",
    icon: CalendarTodayIcon,
    component: Login,
    layout: "/login"
  },
  {
    path: "/signup",
    name: "Signup",
    icon: CalendarTodayIcon,
    component: Signup,
    layout: "/signup"
  }
];

export {
  AuthRoutes,
  AdminRoutes,
  CustomerRoutes
};
