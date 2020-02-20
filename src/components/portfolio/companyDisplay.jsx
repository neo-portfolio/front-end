import React from "react";
import Styled from "styled-components";

const CompanyStyle = Styled.section`
    background-color: "white";
    border-radius: 10px;
    border: 2px solid black;
    overflow-y: auto;
`;

const SymbolStyle = Styled.section`
    display: inline-block;
   color: white;
`;


export const CompanyDisplay = (props) => {
    // Props are of type Company
    return (
        <CompanyStyle>
            <SymbolStyle>
                Symbol : {props.symbol}
            </SymbolStyle>
            <p>
                Expected returns : {props.expected_returns}
            </p>
            <p>
                Volatility : {props.sd}
            </p>
            <p>
                Alpha : {props.alpha}
            </p>
            <p>
                Beta : {props.beta}
            </p>
        </CompanyStyle>
    );
};