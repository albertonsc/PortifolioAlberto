import styled from "styled-components";

export const PortifolioContainer = styled.section`
    background: #00008B;
    width:100%;
    height:100%;
    border-radius: 40px 40px 0px 0px;

    nav{
    
    display: flexbox;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    }

    div{
        margin-left:auto;
        margin-right:auto;
        padding:15px;
        background-color: transparent;
        width:auto;
        height:auto;
        margin-bottom:50px;
        text-align:center;
        border-radius:20px;
        background-color:#008B8B;
 }
   
    a{
    text-align: center;
    font-size: 18px;
    text-align: center;
    text-decoration:none;
    color: white;
    transition:0,5s;
        :hover{
            color: black;
            transition:0,5s;
        }
    
    };

        h4{
    text-align:center;
    padding:8px;
    color:white;
    font-size:20px;
        
    }
        h1{
    text-align:center;
    font-size: 45px;
    padding:20px;
    color:gold;
    
    }
`;   