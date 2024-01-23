import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        text-align: center;
    }

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
        color: #CCC;
    }
    button{
        margin-left: 5px;
        border: none;
        background: transparent;
        font-size: 1.08rem;
        cursor: pointer;
    }
    .Marcado{
        text-decoration: line-through;
    }
`
