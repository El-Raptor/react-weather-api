import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 12,
    },
    tempMax: {
        fontSize: 30,
        display: 'inline-block',
        margin: '0 .1em 0 0'
    },
    tempMin: {
        display: 'inline-block',
        margin: '0 0 0 .1em'
    }
});

const WeatherCard = props => {
    const classes = useStyles();
    const { dayWeek, maxTemp, minTemp, desc } = props;
    const maxRounded = Math.round(maxTemp)
    const minRounded = Math.round(minTemp)

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {dayWeek}
                </Typography>
                <Typography className={classes.tempMax}>
                    {maxRounded}º
            </Typography>
                <Typography className={classes.tempMin}>
                    {minRounded}º
            </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default WeatherCard;
