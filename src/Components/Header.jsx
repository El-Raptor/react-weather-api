import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import { makeStyles } from '@material-ui/styles';
import Input from './SearchInput/Input';

const useStyles = makeStyles(() => ({
    typoStyles: {
        color: '#FFF'
    },
    icon: {
        color: '#fff',
        marginLeft: 10
    },
    /*appNameStyles: {
        
    },*/
}))

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container item sm={3}>
                    <Typography className={classes.typoStyles}>
                        Weatherly
                    </Typography>
                    <CloudIcon className={classes.icon}/>
                </Grid>
                <Grid sm={6} />
                <Grid sm={3} >
                    <Input />
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;