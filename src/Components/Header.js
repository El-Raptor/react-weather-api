import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typoStyles: {
        flex: 1,
        color: '#FFF'
    }
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typoStyles}>
                    Weatherly
                </Typography>
                <CloudIcon style={{ color: 'white' }}/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;