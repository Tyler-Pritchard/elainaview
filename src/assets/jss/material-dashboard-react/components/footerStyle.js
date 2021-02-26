<<<<<<< HEAD
import {
  defaultFont,
  container,
  primaryColor,
  grayColor
=======
import { grayColor } from "assets/jss/material-dashboard-react";
import {
  defaultFont,
  container,
  primaryColor
>>>>>>> a92354f02f58cdb1ffcc4210c89265946de10065
} from "assets/jss/material-dashboard-react.js";

const footerStyle = {
  block: {
    color: "inherit",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
  },
  footer: {
    float: "right !important",
    borderTop: "1px solid " + grayColor[11],
    padding: "1.5vh 0",
    bottom: "0",
    position: "sticky",
<<<<<<< HEAD
    backgroundColor: primaryColor,
=======
    backgroundColor: "whitesmoke",
>>>>>>> a92354f02f58cdb1ffcc4210c89265946de10065
    width: "fill-available",
    ...defaultFont
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
<<<<<<< HEAD
    backgroundColor: primaryColor
=======
    backgroundColor: "transparent"
>>>>>>> a92354f02f58cdb1ffcc4210c89265946de10065
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  }
};
export default footerStyle;
