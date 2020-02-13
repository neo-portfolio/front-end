import React, {Component} from "react";
import {Container} from "./container";


interface State {
    options: string[]
}
export default class extends Component {
    public state: State = {options: []};

    public render() {
        return (
            <Container>
            </Container>
        );
    }
}