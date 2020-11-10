import React from "react";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  card: {
    width: 150,
    minWidth: 150,
    minHeight: 284,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    fontSize: 15,
  },
  tempMax: {
    fontSize: 30,
    display: "inline-block",
    margin: "0 .1em 0 0",
  },
  tempMin: {
    display: "inline-block",
    margin: "0 0 0 .1em",
  },
  media: {
    paddingTop: 150,
  }
});

const WeatherCard = (props) => {
  const classes = useStyles();
  const { dayWeek, maxTemp, minTemp, desc, imgUrl } = props;
  const maxRounded = Math.round(maxTemp);
  const minRounded = Math.round(minTemp);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {dayWeek}
        </Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={require("../../Assets/Images/WeatherIcons/" + imgUrl + ".png")}
        height={1}
        title={'weather icon'}
      />
      <CardContent>
        <Typography className={classes.tempMax}>{maxRounded}º</Typography>
        <Typography className={classes.tempMin}>{minRounded}º</Typography>
        <Typography className={classes.pos} color="textSecondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
