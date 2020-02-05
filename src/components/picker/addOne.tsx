import React, {Component} from "react";
import Styled from "styled-components";
import SYMBOLS from "@data/symbols.json";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";


const Container = Styled.span`
    width: 100%;
    border: 1px solid black;
    display: inline-block;
    height: 50px;
    position: relative;
    padding: 10px
`;


const OptionContainer = Styled.div`
    width: 100%;
    height: 100px;
    overflow: auto;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    background-color: white;
`;

const Option = Styled.div`
    width: 100%;
    height: auto;
`;

interface Props {
    index: number,
    parent: ChildListener<AddOneMessage>
}

interface State {
    current: string,
    shown: string[]
}

export class AddOne extends Component<Props, State> {
    public state: State = {current: "", shown: []};
    private value: string | null;
    private parent: ChildListener<AddOneMessage>;
    private readonly index: number;

    constructor(props: Props) {
        super(props);

        this.parent = props.parent;
        this.index = props.index;
    }

    private getSymbols = (newCurrent: string): string[] => {
        if (newCurrent.length === 0) return [];
        const re = new RegExp(`^${newCurrent.toUpperCase()}`);
        const output: string[] = [];
        let foundFirst = false;
        for (const symbol of SYMBOLS) {
            if (re.test(symbol)) {
                foundFirst = true;
                output.push(symbol);
            } else if (foundFirst) break;
        }
        return output;
    };

    private updateValue = (value: string): void => {
        const newList: string[] = this.getSymbols(value);
        if (newList.length !== 0 || value.length === 0) {
            this.setState({current: value, shown: newList});
            this.value = newList.indexOf(value) === -1 ? null : value;
            this.parent.sendMessage({index: this.index, value: this.value});
        }
    };

    private onType = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = e.target;
        this.updateValue(value);
    };

    public render(): React.ReactElement {
        const {current, shown} = this.state;

        return (
            <Container>
                <input type={"text"} onChange={this.onType} value={current}/>
                {!!shown.length && <OptionContainer>{
                    shown.map((symbol: string) => <Option onClick={() => this.updateValue(symbol)}
                                                          value={symbol}>{symbol}</Option>)}
                </OptionContainer>}
            </Container>
        );
    }


}