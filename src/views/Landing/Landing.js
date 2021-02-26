import React from 'react';
import { Container, Paper, Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/landingStyle";
import CardBody from '../../components/Card/CardBody';

const useStyles = makeStyles(styles);

export const Index = () => {
  const classes = useStyles();

  return( 
    <div  className={classes.mainBkg}>
      <Container
          // fixed
          className={classes.main}
        >
        <Paper className={classes.content}>
          <Card className={classes.card}>
            <CardBody className={classes.cardBody}>
              <h1>Welcome to Elaina</h1>
              <h3>by The Deep Technologies</h3>
            </CardBody>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};