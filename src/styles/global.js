import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 20px;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #4876ff;
        color: #c4c4cc;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem; 
    }

    input, textarea, button {
        cursor: pointer;
    }

    :focus {
        outline: transparent;
        box-shadow: 0 0 0 2px #4876ff;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.7;
    }


`;