import React, { useState, useEffect, Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import api from '../Service/api';

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
  }
})

const Weather = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const classes = useStyles();

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
      </Fragment>
    );
  }
}

export default Weather;
