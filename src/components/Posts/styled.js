import styled from "styled-components";

export const Container = styled.div`
    background-color: #63b8ff;
    border-radius: 8px;
    padding: 2.5rem;
    margin-bottom: 30px;
    gap: 1rem;

    header {
        display: flex;
        align-items: center;
        border:30px;

        strong {
            line-height: 1.6;
            color: #e1e1e6;
            font-size: 40px;
            
        }
    }
`;

export const Content = styled.div`
    margin-top: 1.5rem;
    line-height: 1.6;
    color: #c4c4cc;

`;

export const Form = styled.form`
    width: 100%;
    margin-top: 1.5rem;
    padding: 1.5rem 0;
    border-top: 1px solid #63b8ff;
    color: #63b8ff;
    background-color:#63b8ff;

    textarea {
        width: 90%;
        resize: none;
        background-color: #e8e8e8;
        border: 0;
        border-radius: 8px;
        height: 6rem;
        padding: 1rem;
        margin-top: 30px;
        color: black;
        line-height: 1.4;
        display: flex;
        gap:1rem;
        
    }

    button {
        padding: 15px;
        margin-top: 16px;
        border-radius: 8px;
        border: 0;
        background-color: #e0ffff;
        color: #008b8b;
        border-color:#e0ffff;
        transition: background-color 0.5s;
        width:90%;
    }

    button[type=submit]:not(:disabled):hover{
        background: white;
    }

`;

export const CommentList = styled.div`
    margin-top: 2rem;

`;