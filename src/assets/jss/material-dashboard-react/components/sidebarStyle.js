import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-react.js";

const sidebarStyle = theme => ({
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingTop: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    }
  },

  // logo: {
  //   height: "18vh",
  //   position: "relative",
  //   padding: "0px 10px 0px 25px",
  //   marginBottom: "5vh",
    // zIndex: "4",
    // "&:after": {
    //   content: '""',
    //   position: "absolute",
    //   bottom: "0",

    //   height: "3px",
    //   right: "15px",
    //   width: "calc(100% - 30px)",
    //   backgroundColor: "rgba(" + hexToRgb(grayColor[2]) + ", 0.3)"
    // }
  //},
  // logoLink: {
  //   ...defaultFont,
  //   textTransform: "uppercase",
  //   padding: "8px 0",
  //   display: "block",
  //   fontSize: "18px",
  //   textAlign: "left",
  //   fontWeight: "600",
  //   lineHeight: "35px",
  //   textDecoration: "none",
  //   backgroundColor: "transparent",
  //   "&,&:hover": {
    //     color: whiteColor
    //   }
    // },
      logoImage: {
          width: "30px",
          display: "inline-block",
          maxHeight: "30px"
        },
        img: {
            width: "200px",
            top: "0px",
            position: "absolute",
            verticalAlign: "middle",
            border: "0"
          },
          background: {
            position: "absolute",
            zIndex: "1",
            height: "100%",
            width: "100%",
            display: "block",
            top: "0",
            left: "0",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            "&:after": {
              position: "absolute",
              zIndex: "3",
              width: "100%",
              height: "100%",
              content: '""',
              display: "block",
              background: blackColor,
              opacity: ".6"
            }
          },
          list: {
            border: "1px solid green",
              // border: "3px solid red",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "50%",
            paddingLeft: "0",
            listStyle: "none",
            position: "unset"
          },
          item: {
            position: "relative",
            display: "block",
            textDecoration: "none",
            "&:hover,&:focus,&:visited,&": {
              color: whiteColor
          }
  },
  itemLink: {
    width: "auto",
    transition: "all 300ms linear",
    margin: "5px 15px",
    borderRadius: "3px",
    position: "relative",
    display: "block",
    padding: "5px 15px",
    backgroundColor: "transparent",
    ...defaultFont
  },
  itemIcon: {
    width: "28px",
    height: "34px",
    fontSize: "26px",
    lineHeight: "30px",
    float: "right",
    marginRight: "15px",
    textAlign: "center",
    verticalAlign: "middle",
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)"
  },
  itemText: {
    ...defaultFont,
    margin: "0",
    lineHeight: "30px",
    fontSize: "26px",
    color: whiteColor
  },
  whiteFont: {
    color: whiteColor
  },
  purple: {
    backgroundColor: primaryColor[0],
    ...primaryBoxShadow,
    "&:hover,&:focus": {
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow
    }
  },
  blue: {
    backgroundColor: infoColor[0],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.2)"
    }
  },
  green: {
    backgroundColor: successColor[0],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(successColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(successColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(successColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ",.2)"
    }
  },
  orange: {
    backgroundColor: warningColor[0],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(warningColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(warningColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: warningColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.2)"
    }
  },
  red: {
    backgroundColor: dangerColor[0],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(dangerColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(dangerColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.2)"
    }
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch"
  }
});

export default sidebarStyle;
