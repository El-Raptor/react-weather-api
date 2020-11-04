import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { List } from './styles';
import api from '../Service/api';

const useStyles = makeStyles({
  cityStyle: {
    fontFamily: "Bahnschrift",
    fontStretch: "condensed",
    fontWeight: "lighter",
    fontSize: "30px"
  },
  temperatureStyle: {
    fontFamily: "Bahnschrift",
    fontStretch: "condensed",
    fontWeight: "lighter",
    fontSize: "80px"
  },
  descStyle: {
    fontFamily: "Bahnschrift",
    fontStretch: "condensed",
    fontWeight: "lighter",
    fontSize: "20px"
  }
})

const Weather = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const classes = useStyles();

  const timezone = weather['timezone'] / 60 / 60;

  let getWeather = async (lat, long) => {
    let res = await api.get('weather', {
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
  }, []);

  if (!location) {
    return (
      <>
        Você precisa habilitar a localização do Browser.
      </>
    )
  } else if (!weather) {
    return (
      <>
        Carregando o clima...
      </>
    )
  } else {
    return (
      <Fragment>
        
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
            <Typography variant='h4' color='secondary' className={classes.descStyle}>
              {weather['weather'][0]['description']}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <List>
                <li>Sensação térmica {weather['main']['feels_like']}º</li>
                <li>Vento {weather['wind']['deg']}º {weather['wind']['speed']}</li>
                <li>Visibilidade {weather['visibility']} m</li>
              </List>
              <List>
                <li>Pressão Atm {weather['main']['pressure']} hpa</li>
                <li>Umidade {weather['main']['humidity']}%</li>
                <li>Fuso Horário GMT{timezone} </li>
              </List>
            </Typography>
          </Grid>
          <hr />
      </Fragment>
    );
  }
}

export default Weather;
