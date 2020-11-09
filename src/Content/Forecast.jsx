import React, { useState, useEffect, Fragment } from "react";
import WeatherCard from "../Components/Card/WeatherCard";
import { Grid } from "@material-ui/core";
import api from "../Service/api";
import moment from "moment";
import { getImg } from "../Service/icon";
import { capitalize } from "../Controller/capitalize";
import "moment/locale/pt-br";

const Forecast = (props) => {
  const { city } = props;
  const [location, setLocation] = useState(false);
  const [forecast, setForecast] = useState(false);
  const weekDay = [];
  for (let i = 0; i < 7; i++) {
    weekDay.push(
      moment().add(i, "days").format("ddd") +
        " " +
        moment().add(i, "days").format("D")
    );
  }

  const weekDayCap = weekDay.map((e) => {
    return capitalize(e);
  });

  let getForecast = async (city, lat, long) => {
    if (city) {
      let res = await api.get("forecast", {
        params: {
          q: city,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          cnt: 7,
          units: "metric",
          lang: "pt",
        },
      });
      setForecast(res.data);
    } else {
      let res = await api.get("forecast", {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          cnt: 7,
          units: "metric",
          lang: "pt",
        },
      });
      setForecast(res.data);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getForecast(city, position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, [city]);

  if (!location) {
    return (
      <Fragment>Você precisa habilitar a localização do Browser.</Fragment>
    );
  } else if (!forecast) {
    return <Fragment>Carregando a previsão...</Fragment>;
  } else {
    return (
      <Fragment>
        <Grid container justify="center" spacing={1}>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[0]}
              maxTemp={forecast.list[0].main.temp_max}
              minTemp={forecast.list[0].main.temp_min}
              desc={capitalize(forecast.list[0].weather[0].description)}
              imgUrl={getImg(forecast.list[0].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[1]}
              maxTemp={forecast.list[1].main.temp_max}
              minTemp={forecast.list[1].main.temp_min}
              desc={capitalize(forecast.list[1].weather[0].description)}
              imgUrl={getImg(forecast.list[1].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[2]}
              maxTemp={forecast.list[2].main.temp_max}
              minTemp={forecast.list[2].main.temp_min}
              desc={capitalize(forecast.list[2].weather[0].description)}
              imgUrl={getImg(forecast.list[2].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[3]}
              maxTemp={forecast.list[3].main.temp_max}
              minTemp={forecast.list[3].main.temp_min}
              desc={capitalize(forecast.list[3].weather[0].description)}
              imgUrl={getImg(forecast.list[3].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[4]}
              maxTemp={forecast.list[4].main.temp_max}
              minTemp={forecast.list[4].main.temp_min}
              desc={capitalize(forecast.list[4].weather[0].description)}
              imgUrl={getImg(forecast.list[4].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[5]}
              maxTemp={forecast.list[5].main.temp_max}
              minTemp={forecast.list[5].main.temp_min}
              desc={capitalize(forecast.list[5].weather[0].description)}
              imgUrl={getImg(forecast.list[5].weather[0].icon)}
            />
          </Grid>
          <Grid item>
            <WeatherCard
              dayWeek={weekDayCap[6]}
              maxTemp={forecast.list[6].main.temp_max}
              minTemp={forecast.list[6].main.temp_min}
              desc={capitalize(forecast.list[6].weather[0].description)}
              imgUrl={getImg(forecast.list[6].weather[0].icon)}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
};

export default Forecast;
