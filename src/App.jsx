import React, { Fragment, useState } from "react";
import { Grid, Divider } from "@material-ui/core";
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
      <Grid style={{ minHeight: "100%" }} direction="column" container item>
        <Header handleLoc={change} />
        <Weather city={city} />
        <Divider
          style={{ marginTop: "2.5em", marginBottom: "1.5em" }}
          variant="middle"
        />
        <Forecast city={city} />
      </Grid>

      <GlobalStyles />
    </Fragment>
  );
}

export default App;
