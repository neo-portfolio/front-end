import React, {Component} from "react";
import Styled from "styled-components";
import SYMBOLS from "@data/symbols.json";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";
import {CrossButton} from "./crossButton";
import {scrollbar} from "@components/general/scrollbar";


const Container = Styled.span`
    width: 100%;
    background-color: white;
    border: 2px solid lightgray;
    opacity: 1;
    border-radius: 10px;
    display: inline-block;
    height: 33px;
    position: relative;
    padding: 10px;
    margin-bottom: 20px;
`;

// Scrollbar generated on http://webkit-scroll-gen.sourceforge.net/
const OptionContainer = Styled.div`
    width: 100%;
    height: 150px;
    overflow: auto;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 1000;
    background-color: white;
    opacity: 1;
    border: 2px solid #e1e1e1;
    border-radius: 5px;
    ${scrollbar}
`;

const Option = Styled.div`
    width: calc(100% - 20px);
    height: auto;
    padding: 10px;
    cursor: pointer;
    transition: .4s;
    
    :hover{
        background-color: grey;
        color: white;
    }
`;

const Input = Styled.input`
    width: calc(100% - 100px);
    padding: 5px;
    border: 2px solid lightgrey;
    border-radius: 5px;
    display: block;
    
    :focus {
        outline-color: black;
    }
`;

interface Props {
    index: number;
    parent: ChildListener<AddOneMessage>;
}

interface State {
    current: string;
    shown: string[];
}

export class AddOne extends Component<Props, State> {
    public state: State = {current: '', shown: []};
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

    private hide = (): void => {
        this.setState({shown: []});
    };

    private remove = (): void => {
        this.parent.sendMessage({index: this.index, value: "remove"});
    };

    public render(): React.ReactElement {
        const {current, shown} = this.state;

        return (
            <Container>
                <Input type={'text'} onChange={this.onType} value={current}/>
                {!!shown.length && (
                    <OptionContainer>
                        {shown.map((symbol: string) => (
                            <Option
                                key={symbol}
                                onClick={() => {
                                    this.updateValue(symbol);
                                    this.hide();
                                }}>
                                {symbol}
                            </Option>
                        ))}
                    </OptionContainer>
                )}
                <CrossButton onClick={this.remove}/>
            </Container>
        );
    }
}
