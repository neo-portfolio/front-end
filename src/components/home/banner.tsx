import React, {Component} from "react";
import Styled from "styled-components";

const Container = Styled.span`
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(images/wallstreet.png);
    background-repeat: no-repeat;
    background-size: 100%;
`;

const Video = Styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Title = Styled.h1`
      font-size: 100px;
      font-weight: bold;
      background: -webkit-linear-gradient(#959595, yellow, blue, #44234e, red, green, #dcebf6);
      -webkit-text-stroke-width: 4px;
      -webkit-text-stroke-color: orange;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: 'Zhi Mang Xing', cursive;
      position: absolute;
      top: 20px;
      right: 30px;
      display: inline;
      margin: 0;
      
      animation:spin 10s linear infinite;
      @keyframes spin { 
        0% { transform: rotate(0deg); top: 5%; right: 10px; }
        25% { transform: rotate(32deg); top: 80%; right: 10px; }
        50% { transform: rotate(0deg); top: 5%; right: 95%; }
        75% { transform: rotate(-32deg); top: 80%; right: 50%; }
        100% { transform: rotate(0deg); top: 5%; right: 10px; }
      }
`;


export const Banner = () => (
    <Container>
        <Video autoPlay={true} loop={true} muted={true}>gr
            <source src="/videos/batman.mp4"/>
        </Video>
        <Title>PORTFOLIO OPTIMIZATION</Title>
    </Container>
);