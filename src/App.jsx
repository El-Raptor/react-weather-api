import React, { Fragment } from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Header from './Components/Header';
import Weather from './Content/Weather';
import Forecast from './Content/Forecast';

const useStyles = makeStyles({
  buttonStyle: {
    color: '#FFF'
  },
  mainSection: {
    paddingTop: "2em"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container className={classes.mainSection}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <Weather />
            <Forecast />
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
