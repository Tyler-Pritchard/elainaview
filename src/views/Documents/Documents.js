import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function Documents() {
  const classes = useStyles();
  return (
    <GridContainer>
        <GridItem>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
                    <p className={classes.cardCategoryWhite}>
                    Created using Roboto Font Family
                    </p>
                </CardHeader>
                <CardBody>
                    <div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                    </div>
                </CardBody>
            </Card>
        </GridItem>
    </GridContainer>
  );
}
