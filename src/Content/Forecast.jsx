import React, { useState, useEffect, Fragment } from 'react';
import WeatherCard from '../Components/Card/WeatherCard';
import { Grid } from '@material-ui/core';
import api from '../Service/api';
import moment from 'moment';
import 'moment/locale/pt-br';

const Forecast = () => {
    const [location, setLocation] = useState(false);
    const [forecast, setForecast] = useState(false);
    const weekDay = []
    for (let i = 0; i < 7; i++) {
        weekDay.push(moment().add(i, 'days').format('ddd'));
    }

    let getForecast = async (lat, long) => {
        let res = await api.get('forecast', {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
                cnt: 7,
                units: 'metric',
                lang: 'pt'
            }
        });
        setForecast(res.data);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            getForecast(position.coords.latitude, position.coords.longitude);
            setLocation(true);
        })
    }, []);

    if (!location) {
        return (
            <Fragment>Você precisa habilitar a localização do Browser.</Fragment>
        )
    } else if (!forecast) {
        return (
            <Fragment>Carregando a previsão...</Fragment>
        )
    } else {
        return (
            <Fragment>
                <Grid container spacing={2}>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[0]}
                            maxTemp={forecast.list[0].main.temp_max}
                            minTemp={forecast.list[0].main.temp_min}
                            desc={forecast.list[0].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[1]}
                            maxTemp={forecast.list[1].main.temp_max}
                            minTemp={forecast.list[1].main.temp_min}
                            desc={forecast.list[1].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[2]}
                            maxTemp={forecast.list[2].main.temp_max}
                            minTemp={forecast.list[2].main.temp_min}
                            desc={forecast.list[2].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[3]}
                            maxTemp={forecast.list[3].main.temp_max}
                            minTemp={forecast.list[3].main.temp_min}
                            desc={forecast.list[3].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[4]}
                            maxTemp={forecast.list[4].main.temp_max}
                            minTemp={forecast.list[4].main.temp_min}
                            desc={forecast.list[4].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[5]}
                            maxTemp={forecast.list[5].main.temp_max}
                            minTemp={forecast.list[5].main.temp_min}
                            desc={forecast.list[5].weather[0].description}
                        />
                    </Grid>
                    <Grid item>
                        <WeatherCard
                            dayWeek={weekDay[6]}
                            maxTemp={forecast.list[6].main.temp_max}
                            minTemp={forecast.list[6].main.temp_min}
                            desc={forecast.list[6].weather[0].description}
                        />
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default Forecast;
