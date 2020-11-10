import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const StyledBox = styled(Box)`
    
    display: flex;
    justify-content: center;
    
    color: #fff;
    font-family: "Bahnschrift";
    font-stretch: condensed;
    font-weight: lighter;

    &.descr-container {
        margin-bottom: 2em;
    }

    p {
        margin: 0;
        
        &.temperature {
            font-size: 7.5em;
            line-height: 1.1em;
        }

        &.city {
            font-size: 1.8em;
        }

        &.descr {
            margin-top: 0.3em;
            font-size: 1em;
        }
    }

    li {
        display: inline-block;
        padding: 0px 15px 0px 15px;
    }

    .btn-unit {
        flex-wrap: nowrap;
        align-items: flex-start;
        height: 3.3em;
        padding: 0 .5em 0 .5em;
        cursor: pointer;

        border-radius: 800px;
        &:hover {
            background-color: rgba(0, 0, 0, .25);
        }
        > p {
            font-size: 2.8em;
        }
    }
    div {
        display: flex;
        flex-direction: row;
        align-items: center;

        
        > svg {
            margin-right: 0.3em;
        }
    }
`;

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 3em;

    > img {
        width: 9em;
        opacity: .7;
    }
    > p {margin-top: 0.7em;
        color: white;
        font-size: 1.2em;
    }
`;