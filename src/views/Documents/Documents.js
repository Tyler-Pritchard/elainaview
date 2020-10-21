import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-dashboard-react/views/documentsStyle.js";

import SearchBar from '../../components/Searchbar/Searchbar.js';

const useStyles = makeStyles(styles);

export default function Documents() {
  const classes = useStyles();
  return (
    <div className={classes.mainBkg}>

    <GridContainer style={styles.content}>
        <GridItem>
            <Card>
                <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Elaina Documents Repository</h4>
                    <p className={classes.cardCategoryWhite}>
                    Search for documents by case number, client name, etc.
                    </p>
                </CardHeader>
                <CardBody>
                    <div>
                        <SearchBar />
                    </div>
                </CardBody>
            </Card>
        </GridItem>
    </GridContainer>
    </div>
  );
}