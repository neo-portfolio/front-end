import React, {Component} from "react";
import Styled from "styled-components";
import {Container} from "./container";
import {AddOne} from "./addOne";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";


const ButtonsContainer = Styled.div`
    width: 500px;
    height: 20px;
    position: absolute;
    bottom: 40px;
    left: calc(50% - 250px);
`;

const Button = Styled.div`
    height: calc(100% - 5px);
    width: calc(50% - 62px);
    background-color: white;
    opacity: 1;
    margin: 0 20px;
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

export default class extends Component<{}, State> implements ChildListener<AddOneMessage> {
    private values: Map<number, string | null> = new Map<number, string | null>();
    private lastIndex: number = 0;
    private options: number[] = [];

    public state: State = {options: []};

    public sendMessage = (message: AddOneMessage): void => {
        const {index, value} = message;
        if (value === "remove") {
            delete this.values[index];
            this.options[index] = -1;
            this.setState({options: this.options});
        } else this.values[index] = value;
    };

    private addOption = () => {
        this.options.push(this.lastIndex++);
        this.setState({options: this.options});
    };

    private compute = async () => {
        try {
            const response = await window.fetch("http://skyr.internet-box.ch:8080/api/portfolio/company_info?symbol=TSLA",);
            console.log(await response.json());
        } catch (err) {
            console.error(err);
        }
    };

    public render() {
        return (
            <Container>
                {this.state.options.map((index: number) => index !== -1 && <AddOne index={index} parent={this}/>)}
                <ButtonsContainer>
                    <Button onClick={this.addOption}>ADD STOCK</Button>
                    <Button onClick={this.compute}>COMPUTE</Button>
                </ButtonsContainer>
            </Container>
        );
    }
}