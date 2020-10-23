import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Switch, Route, Redirect } from "react-router-dom";

import { AdminRoutes }  from 'routes.js';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import Card from '../Card/Card.js';
import CardAvatar from '../Card/CardAvatar';
import CardBody from '../Card/CardBody.js';
import CardHeader from '../Card/CardHeader.js';
import CustomInput from '../CustomInput/CustomInput.js';
import Button from 'components/CustomButtons/Button.js';

import UserDocs from 'views/UserProfile/UserDocs.js';

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/components/searchbarStyle.js";

import marc from './marc.jpg';

const useStyles = makeStyles(styles);


const Search = () => {
  const [term, setTerm] = useState('lorem ipsum');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <GridItem>
        <Card style={{width: "23vw", display: "flex", alignItems: "center", textAlign: "center"}}>
          {/* <CardAvatar> */}
            <img src={marc} 
            alt="user_avatar_url"
            style={{width: "40%"}}
          />
          {/* </CardAvatar> */}
          <div key={result.pageid} className="item">
            <div className="right floated content">
              <Button
                link={true}
                children={UserDocs}
              >
                Client Docs
              </Button>
              {/* <Button
                color="info"
                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                target="_blank"
              >
                Open Document
              </Button> */}
            </div>
            <div className="content">
              <CardHeader>{result.title}</CardHeader>
              {/* <CardBody dangerouslySetInnerHTML={{ __html: result.snippet }}></CardBody> */}
            </div>
          </div>
        </Card>
      </GridItem>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Client Name: </label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <GridContainer>
        {renderedResults}
      </GridContainer>
    </div>
  );
};

export default Search;
