import {
  drawerWidth,
  transition,
  container
} from "assets/jss/material-dashboard-react.js";
import img from "../../../img/law-firm-logo-trans_1732x1732.png";
const bkg = img;

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    //border: "3px solid green",
    top: "0",
    height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    //border: "2px solid red",
    backgroundImage: `url(${bkg})`,
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgrounndBlend: "luminosity",
    opacity: ".1",
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  }
});

export default appStyle;
