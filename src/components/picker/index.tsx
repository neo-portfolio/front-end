import React, {Component} from "react";
import Styled from "styled-components";
import {Container} from "./container";
import {AddOne} from "./addOne";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";
import {ApiService} from "@services/api";
import {Query} from "@interfaces/neo4j";
import {Company} from "@interfaces/company";


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
    margin: 0 20px;
    padding: 10px;
    text-align: center;
    transition: 1s;
    border 1px solid black;
    cursor: pointer;
    display: inline-block;
    
    :hover {
        color: white;
        background-color: black;
    }
`;

interface State {
    options: number[]
}

export default class extends Component<{}, State> implements ChildListener<AddOneMessage> {
    private values: { [key: number]: string | null } = {};
    private lastIndex: number = 0;
    private options: number[] = [];
    private service: ApiService = new ApiService;

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
            const stocks: string[] = Object.entries(this.values).filter(pair => pair[0] !== "-1").map(pair => pair[1]);
            const data: Query<Company> = await this.service.stockData(stocks);
            console.log(data);
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