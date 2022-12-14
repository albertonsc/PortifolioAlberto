import React from 'react'
import Calculadora from '../../assets/Calculadora.png'
import styled from 'styled-components';

export default function ImageCalculadora ( ){

    const ImageCalculadora = styled.nav`
        transition: 0.5s;
        
        :hover{
            transform: scale(1.3);
             transition: 0.5s;
        }
        img{
            width: 450px;
            height:250px;
        }
    `;
    
    return(
        <ImageCalculadora>
        <a href="#">
            <img  src={Calculadora} alt="logo-dev"/>
        </a>  
        </ImageCalculadora>
           
    )
}