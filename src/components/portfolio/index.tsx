import React, {Component} from "react";
import Styled from "styled-components";
import {Container} from "./container";

const ButtonsContainer = Styled.div`
    width: 30%;
    height: 20px;
    position: absolute;
    bottom: 40px;
    left: 35%;
`;

const Button = Styled.div`
    height: calc(100% - 5px);
    width: 100%;
    background-color: white;
    opacity: 1;
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    border 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    
    :hover {
        color: white;
        background-color: grey;
    }
`;

interface State {
    options: number[]
}

export default class extends Component<{}, State> {
    public state: State = {options: []};

    private apple_show = async () => {
        const data = await fetch("http://skyr.internet-box.ch:8080/api/portfolio/company_info?symbol=AAPL", {
            mode: 'no-cors' // 'cors' by default
        });
        console.log(data);
    };

    public render() {
        return (
            <Container>
                <ButtonsContainer>
                    <Button onClick={this.apple_show}>Test</Button>
                </ButtonsContainer>
            </Container>
        );
    }
}