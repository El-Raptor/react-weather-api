import styled from 'styled-components';
import { AppBar, Box } from '@material-ui/core';

export const StyledAppBar = styled(AppBar)`
    position: static;
    background-color: #3F4656;
`;

export const StyledBox = styled(Box)`
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    padding: .2em;

    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
        background-color: rgba(255, 255, 255, 0.25);
    }
    border-radius: 50px;

    .icon {
        color: #fff;
        padding: .2em;
    }

    @media (max-width: 490px) {
        .MuiInputBase-root {
           width: 70%;
       }
    }
`;