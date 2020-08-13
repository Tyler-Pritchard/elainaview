/*eslint-disable*/
import React from "react";
//import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
// core components
import styles from "assets/jss/material-dashboard-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <div></div>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            <a
              href="https://deeplaw-client-portal.herokuapp.com/?ref=mdr-footer"
              target="_blank"
              className={classes.a}
            >
              The Deep Technologies
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
