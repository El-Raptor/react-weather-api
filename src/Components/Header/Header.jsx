import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { IconButton, InputBase } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import { makeStyles } from '@material-ui/styles';
import { BoxDiv } from './styles';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
    typoStyles: {
        color: '#FFF'
    },
    logo: {
        color: '#fff',
        marginLeft: 10
    },
    icon: {
        color: "#fff",
        padding: 5
    },
    input: {
        color: "#fff",
        marginLeft: 5
    }
    /*appNameStyles: {
        
    },*/
}));

const Header = (props) => {
    const [ city, setCity ] = useState('');
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container item sm={3}>
                    <Typography className={classes.typoStyles}>
                        Weatherly
                    </Typography>
                    <CloudIcon className={classes.logo} />
                </Grid>
                <Grid sm={6} />
                <Grid sm={3} >
                    <BoxDiv component="form">
                        <IconButton 
                            id="search-btn"
                            type="submit"
                            className={classes.icon} 
                            onClick={(e) => {
                                e.preventDefault()
                                props.handleLoc(city) 
                            }} >
                            <Search />
                        </IconButton>
                        <InputBase
                            id="search-input"
                            value={city}
                            onChange={(e) => { setCity(e.target.value) }}
                            className={classes.input}
                            inputLabel={{ 'aria-label': 'search weather' }}
                            placeholder="Buscar..."
                        />
                    </BoxDiv>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;