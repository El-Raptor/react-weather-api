import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Header from './Components/Header';

const useStyles = makeStyles({
  cityStyle: {
    //fontFamily: 'Tall & Lean',
    fontSize: "20px"
  },
  temperatureStyle: {
    fontFamily: "Bahnschrift",
    fontStretch: "condensed",
    fontWeight: "lighter",
    fontSize: "60px"
  },
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

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        units: 'metric',
        lang: 'pt'
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, [])

  if (!location) {
    return (
      <Fragment>
        <Header />
        Você precisa habilitar a localização do browser.
      </Fragment>
    )
  } else if (!weather) {
    return (
      <Fragment>
        <Header />
        Carregando o clima...
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <Grid direction='column'>
          <Grid item>
            <Header />
          </Grid>
          <Grid item container className={classes.mainSection}>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              <Grid item container justify='center'>
                <Typography variant='h4' color='secondary' className={classes.cityStyle}>
                  {weather['name']}, {weather['sys']['country']}
                </Typography>
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='h4' color='secondary' className={classes.temperatureStyle}>
                  {weather['main']['temp']}º
                </Typography>
              </Grid>
              <Grid item container justify='center'>
                <Typography variant='h4' color='secondary'>
                  {weather['weather'][0]['description']}
                </Typography>
              </Grid>
              <hr />
              <Typography>
                <ul>
                  <li>Temperatura atual: {weather['main']['temp']}º</li>
                  <li>Temperatura máxima: {weather['main']['temp_max']}º</li>
                  <li>Temperatura mínima: {weather['main']['temp_min']}º</li>
                  <li>Pressão: {weather['main']['pressure']} hpa</li>
                  <li>Umidade: {weather['main']['humidity']}%</li>
                </ul>
              </Typography>

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
}

export default App;
