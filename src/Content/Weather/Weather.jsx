import React, { useState, useEffect, Fragment } from "react";
import { Typography } from "@material-ui/core";
import { StyledBox, StyledDiv } from "./styles";
import { capitalize } from "../../Controller/capitalize";
import api from "../../Service/api";
import { getCardinal } from "../../Controller/degreesToCardinal";
import {
  HumidityIcon,
  WindIcon,
  VisibilityIcon,
  FeelsLikeIcon,
} from "../../Assets/Icons/Icons";

const Weather = (props) => {
  const { city } = props;
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [celsius, setCelsius] = useState(true);

  let getWeather = async (city, lat, long) => {
    if (city) {
      let res = await api.get("weather", {
        params: {
          q: city,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          units: "metric",
          lang: "pt",
        },
      });
      setWeather(res.data);
    } else {
      let res = await api.get("weather", {
        params: {
          lat: lat,
          lon: long,
          appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
          units: "metric",
          lang: "pt",
        },
      });
      setWeather(res.data);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(city, position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, [city]);

  const convertUnit = (temp) => {
    return temp * (9 / 5) + 32;
  };

  if (!location) {
    return (
      <>
        <StyledDiv>
          <img
            src={require("../../Assets/Images/Others/no-location.png")}
            alt="localização desabilitada"
          />
          <Typography>
            Você precisa habilitar a localização do Browser.
          </Typography>
        </StyledDiv>
      </>
    );
  } else if (!weather) {
    return (
      <>
        <StyledDiv>
          <Typography>Carregando o clima...</Typography>
        </StyledDiv>
      </>
    );
  } else {
    return (
      <Fragment>
        <StyledBox>
          <ul>
            <li>
              <div>
                <FeelsLikeIcon fontSize="small" style={{ color: "white" }} />{" "}
                {celsius
                  ? Math.round(weather["main"]["feels_like"])
                  : Math.round(convertUnit(weather["main"]["feels_like"]))}
                º
              </div>
            </li>
            <li>
              <div className="vis-div">
                <WindIcon fontSize="small" style={{ color: "white" }} />{" "}
                {getCardinal(weather["wind"]["deg"])} {weather["wind"]["speed"]}
                m/s
              </div>
            </li>
            <li>
              <div>
                <VisibilityIcon fontSize="small" style={{ color: "white" }} />
                {weather["visibility"]} m
              </div>
            </li>
            <li>
              <div>
                <HumidityIcon fontSize="small" style={{ color: "white" }} />
                {weather["main"]["humidity"]}%
              </div>
            </li>
          </ul>
        </StyledBox>
        <StyledBox>
          <p className="temperature">
            {celsius
              ? Math.round(weather["main"]["temp"])
              : Math.round(convertUnit(weather["main"]["temp"]))}
          </p>
          <span
            className="btn-unit"
            onClick={() => {
              setCelsius(!celsius);
            }}
          >
            <p className="unit">º{celsius ? "C" : "F"}</p>
          </span>
        </StyledBox>
        <StyledBox>
          <p className="city">
            {weather["name"]}, {weather["sys"]["country"]}
          </p>
        </StyledBox>
        <StyledBox className="descr-container">
          <p className="descr">
            {capitalize(weather["weather"][0]["description"])}
          </p>
        </StyledBox>
      </Fragment>
    );
  }
};

export default Weather;
