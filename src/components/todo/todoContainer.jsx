import React, {Component, useState} from 'react';

export class __Todo extends Component {
    constructor(props) {
        super(props);

        this.name = props.name;

        this.state = {
            age: props.age
        };
    }

    growOld = () => {
        this.setState({age: this.state.age + 1});
    };

    render() {
        return (<div onClick={this.growOld}>
            <p>Mon age est: {this.state.age}</p>
            <p>Mon nom est: {this.name}</p>
        </div>)
    }
}

export const Todo = props => {
    const [age, setAge] = useState(props.age);

    const growOld = () => {
        setAge(age +1);
    };
    
    return (
        <div onClick={growOld}>
            <p>Mon age est: {age}</p>
            <p>Mon nom est: {props.name}</p>
        </div>
    )
};