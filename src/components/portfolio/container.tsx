import Styled from "styled-components";

export const Container = Styled.div`
    background-color: white;
    background-image: url('images/network.jpg');
    opacity: 0.85;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: calc(100% - 60px);
    height: calc(100% - 80px);
    padding: 30px;
    border: 5px solid black;
    border-radius: 10px;
    position: relative;
`;