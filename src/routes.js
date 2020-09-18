/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Typography from "views/Typography/Typography.js";
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Documents",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Calendar",
    icon: CalendarTodayIcon,
    component: NotificationsPage,
    layout: "/admin"
  }
  // {
  //   path: "/signout",
  //   name: "Signout",
  //   icon: CalendarTodayIcon,
  //   component: SignoutPage,
  //   layout: "/signout"
  // }
];

// const AuthRoutes = [
//   {
//     path: "/login",
//     name: "Login",
//     icon: CalendarTodayIcon,
//     component: LoginPage,
//     layout: "/login"
//   }
// ];

export default dashboardRoutes;
