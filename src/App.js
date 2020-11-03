import React, { Fragment, useState, useEffect } from 'react';
import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Header from './Components/Header';
import Weather from './Content/Weather';

const useStyles = makeStyles({
  buttonStyle: {
    color: '#FFF'
  },
  mainSection: {
    paddingTop: "2em"
  }
});

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const classes = useStyles();
  return (
    <Fragment>
      <Grid direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container className={classes.mainSection}>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={8}>
            <Weather />
            <Button
              className={classes.buttonStyle}
              color="primary"
              variant="contained"
            >Enviar</Button>
          </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
