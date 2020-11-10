import React, { Fragment, useState } from "react";
import { Grid } from "@material-ui/core";
import Header from "./Components/Header/Header";
import Weather from "./Content/Weather/Weather";
import Forecast from "./Content/Forecast/Forecast";
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
  const [city, setCity] = useState("");

  const change = (value) => {
    setCity(value);
  };

  return (
    <Fragment>
      
        <Grid direction='column' container item >
          <Header handleLoc={change} />
          <Weather city={city} />
          <Forecast city={city} />
        </Grid>
      
      <GlobalStyles />
    </Fragment>
  );
}

export default App;
