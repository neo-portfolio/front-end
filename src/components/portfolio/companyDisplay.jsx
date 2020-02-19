import React from "react";
import Styled from "styled-components";

const CompanyStyle = Styled.section`
    background-color: "white";
    border-radius: 10px;
    border: 2px solid black;
`;


export const CompanyDisplay = (props) => {
    // Props are of type Company
    console.log(props.w);
    return (
        <CompanyStyle>
            <p>
                Symbol: {props.symbol}
            </p>
            <p>
                Expected returns: {props.expected_returns}
            </p>
            <p>
                Expected returns: {props.sd}
            </p>
            <p>
                Expected returns: {props.alpha}
            </p>
            <p>
                Expected returns: {props.beta}
            </p>
            <p>
                Weight : {JSON.stringify(props.w)}
            </p>
        </CompanyStyle>
    );
};