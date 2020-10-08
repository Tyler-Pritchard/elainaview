import {
  drawerWidth,
  transition,
  container
} from "assets/jss/material-dashboard-react.js";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    float: "right",
    ...transition,
    minHeight: "80%",
    maxHeight: "100%",
    overflowScrolling: "touch"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;