import React from "react";
import Styled from "styled-components";

const CompanyStyle = Styled.section`
    background-color: "white";
    border-radius: 10px;
    border: 2px solid black;
`;


export const CompanyDisplay = (props) => {
    // Props are of type Company
    return (
        <CompanyStyle>
            <p>
                Symbol: {props.symbol}
            </p>
            <p>
                Expected returns: {props.expected_returns}
            </p>
        </CompanyStyle>
    );
};