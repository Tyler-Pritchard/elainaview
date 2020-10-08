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

const useStyles = makeStyles(styles);

export default function Documents() {
  const classes = useStyles();
  return (
    <div className={classes.mainBkg}>

    <GridContainer style={styles.content}>
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
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     height: '90vh',
//     backgroundImage: 'url(/Users/tylerpritchard/Desktop/elainaview/src/assets/img/law-firm-logo-trans.png)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   }
// }));