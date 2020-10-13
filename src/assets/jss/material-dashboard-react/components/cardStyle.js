import {
  blackColor,
  whiteColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const cardStyle = {
  card: {
    marginBottom: "5vh",
    marginTop: "9vh",
    paddingTop: "1vh",
    borderRadius: "6px",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    zIndex: "0",
    opacity: ".5"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

export default cardStyle;
