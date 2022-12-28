import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%; 
    flex-wrap: wrap;
    display:flex;
    flex-direction: row;
    align-items: center;
    
    div{
        flex-direction: column;
        align-items: center;
        margin: 20px;
    }

    img.profile{
        height: 200px;
        width: 200px;
        border: 1px solid #FAFAFA;
        border-radius: 100%;
    }

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
`