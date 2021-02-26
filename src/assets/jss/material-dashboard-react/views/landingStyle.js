import {
    successColor,
    grayColor
  } from "assets/jss/material-dashboard-react.js";
  
  import img from "../../../img/law-firm-logo-trans2.png";
const bkg = img;

const landingStyle = { 
    mainBkg: {
        border: "1px solid orangered",
        overflow: "none",
        backgroundImage: `url(${bkg})`,
        backgroundSize: "contain, cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "luminosity",
        minHeight: "calc(50vh)",
        padding: "1rem"
    },
    main: {
        border: '.1rem solid green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem'
    },
    content: {
        border: '.3rem solid black',
        display: 'flex',
        justifyContent: 'center',
        height: '75vh',
        opacity: '.5',
        padding: '4rem',
    },
    card: {
        border: ".1rem solid purple",
        width: "60rem",
        textAlign: "center",
        marginTop: "5vh",

    },
    cardBody: {

    } 
};
  
  export default landingStyle;
  



