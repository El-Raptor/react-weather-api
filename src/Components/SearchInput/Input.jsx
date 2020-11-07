import React from 'react';
import { IconButton, InputBase } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/styles';
import { BoxDiv } from './styles';

const useStyles = makeStyles(() => ({
    icon: {
        color: "#fff",
        padding: 5
    },
    input: {
        color: "#fff",
        marginLeft: 5
    }
}));

const Input = () => {
    const classes = useStyles();
    return (
        <BoxDiv>
            <IconButton className={classes.icon}>
                <Search />
            </IconButton>
            <InputBase 
                className={classes.input}
                inputLabel={{'aria-label': 'search weather'}} 
                placeholder="Buscar..." 
            />
        </BoxDiv>
    );
}

export default Input;
