import React from "react";
import Styled from "styled-components";

const Row = Styled.div`
    width: calc(100% - 20px);
    height: 20px;
    margin-bottom: 5px;
    position: relative;
    font-family: "Times New Roman", Times, serif;
    margin-bottom: 5px;
    margin-left: 20px;
`;

export const WeightDisplay = (props) => {
    // Props are of type Company
    return (
        <Row>
            {props.symbol}: {props.weight.toFixed(4)*100}%
        </Row>
    );
};