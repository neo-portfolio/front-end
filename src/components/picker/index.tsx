import React, {Component} from "react";
import {Container} from "./container";
import {AddOne} from "./addOne";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";

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
        if (value === "delete") {
            delete this.values[index];
            this.options[index] = -1;
            this.setState({options: this.options});
        } else this.values[index] = value;
    };

    private addOption = () => {
        this.options.push(this.lastIndex++);
        this.setState({options: this.options});
    };

    public render() {
        return (
            <Container>
                {this.state.options.map((index: number) => index !== -1 && <AddOne index={index} parent={this}/>)}
                <button onClick={this.addOption}>Add stock</button>
            </Container>
        );
    }
}