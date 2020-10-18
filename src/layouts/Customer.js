import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {CustomerRoutes} from "routes.js";

// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import ChatWindow from "components/ChatWindow/ChatWindow.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/layouts/customerStyle.js";
import '../App.css';


import bgImage from "assets/img/sidebar-2.jpg";
import logo from "assets/img/law-firm-logo-trans_1732x1732.png";

let ps;

const switchRoutes = (
  <Switch>
    {CustomerRoutes.map((prop, key) => {
      if (prop.layout === "/customer") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/customer" to="/customer/dashboard" />
  </Switch>
);

const useStyles = makeStyles(styles);

export default function Customer({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image, setImage] = React.useState(bgImage);
  const [color] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const handleImageClick = image => {
  //   setImage(image);
  // };
  // const handleColorClick = color => {
  //   setColor(color);
  // };
  // const handleFixedClick = () => {
  //   if (fixedClasses === "dropdown") {
  //     setFixedClasses("dropdown show");
  //   } else {
  //     setFixedClasses("dropdown");
  //   }
  // };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return window.location.pathname !== "/admin/";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      <Sidebar
        routes={CustomerRoutes}
        logo={logo}
        image={bgImage}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        customerActive
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          routes={CustomerRoutes}
          handleDrawerToggle={handleDrawerToggle}
          customerActive
          {...rest}
        />
        <div className="mainBkg">
          <div className={classes.container}>
            {getRoute() ? (
       
              <div>{switchRoutes}</div>
              ) : (
                <div className={classes.map}>{switchRoutes}</div>
                )}
          </div>
          {getRoute() ? <Footer /> : null}
        </div>
      
      <ChatWindow />
      </div>
    </div>
  );
}
