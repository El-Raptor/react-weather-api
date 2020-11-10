import React, { Fragment, useState } from 'react';
import { Grid } from "@material-ui/core";
import Header from './Components/Header/Header';
import Weather from './Content/Weather/Weather';
import Forecast from './Content/Forecast/Forecast';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
  const [ city, setCity ] = useState('')
  
  const change = (value) => { setCity(value) }

  return (
    <Fragment>
      <Grid direction='column'>
        <Grid item>
          <Header handleLoc={change} />
        </Grid>
        <Grid item container >
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={10}>
            <Weather city={city} />
            <Forecast city={city} />
          </Grid>
          <Grid item xs={0} sm={1} />
        </Grid>
      </Grid>

      <GlobalStyles />
    </Fragment>
  );
}

export default App;
