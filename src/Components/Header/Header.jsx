import React, { useState } from "react";
import { Toolbar, Typography, Grid } from "@material-ui/core";
import { IconButton, InputBase } from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";
import { makeStyles } from "@material-ui/styles";
import Search from "@material-ui/icons/Search";
import { StyledBox, StyledAppBar } from "./styles";

const useStyles = makeStyles(() => ({
  typoStyles: {
    color: "#FFF",
  },
  logo: {
    color: "#fff",
    marginLeft: 10,
  },
  input: {
    color: "#fff",
    marginLeft: 5,
  },
  /*appNameStyles: {
        
    },*/
}));

const Header = (props) => {
  const [city, setCity] = useState("");
  const classes = useStyles();

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Grid container item xs={6} sm={5} md={3} lg={2} xl={1}>
          <Typography className={classes.typoStyles}>Weatherly</Typography>
          <CloudIcon className={classes.logo} />
        </Grid>
        <Grid xs={0} sm={2} md={6} lg={7} xl={9} />
        <Grid xs={6} sm={5} md={3} lg={3} xl={2}>
          <StyledBox component="form">
            <IconButton
              id="search-btn"
              type="submit"
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                props.handleLoc(city);
              }}
            >
              <Search />
            </IconButton>
            <InputBase
              id="search-input"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              className={classes.input}
              inputLabel={{ "aria-label": "search weather" }}
              placeholder="Buscar..."
            />
          </StyledBox>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
