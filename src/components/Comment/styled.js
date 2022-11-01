import styled from "styled-components";

export const Container = styled.div`
    background-color: #e8e8e8;
    display: flex;
    gap: 1rem;
    border-radius: 8px;
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: black;
    font-size:20px;

    button {
        background: transparent;
        border: 0;
        color: black;
        line-height: 0;
        border-radius: 2px;
    }

    :hover button {
        color: red;
    }

    div{
        border:8px;
        font-size: 20px;
    }

`;