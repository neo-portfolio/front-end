import React from "react";
import {Todo} from "../src/components/todo/todoContainer";

const names = [{name: "alex", age: 23}, {name: "raph", age: 24}, {name: "bruno", age: 25}, {name: "benoit", age: 23}];

export default () => (
    <>
        {names.map((x) => <Todo name={x.name} age={x.age}/>)}
    </>
);