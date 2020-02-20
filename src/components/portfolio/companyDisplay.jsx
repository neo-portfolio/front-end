import React from "react";
import Styled from "styled-components";

const CompanyStyle = Styled.section`
    background-color: azure;
    opacity: 1;
    border-radius: 5px;
    border: 2px solid black;
    overflow-y: auto;
    margin-bottom: 5px;
`;

const SymbolStyle = Styled.section`
    width: calc(100% - 4px);
    height: calc(33% - 15px);
    text-align: center;
    position: relative;
    font-family: "Times New Roman", Times, serif;
    font-weight: bolder;
    margin-bottom: 5px;
`;

const Stat = Styled.div`
    width: 50%;
    height: calc(33% - 15px);
    text-align: center;
    position: relative;
    font-family: "Times New Roman", Times, serif;
    margin-bottom: 5px;
    display: inline-block;
`;

const TextStat = Styled.div`
    font-family: "Times New Roman", Times, serif;
    font-style: italic;
    display: inline;
`;

const Row = Styled.div`
    width: 100%;
    height: calc(33% - 15px);
    margin-bottom: 5px;
    position: relative;
    font-family: "Times New Roman", Times, serif;
    margin-bottom: 5px;
`;


export const CompanyDisplay = (props) => {
    // Props are of type Company
    return (
        <CompanyStyle>
            <SymbolStyle>
                Symbol: {props.symbol}
            </SymbolStyle>
            <Row>
                <Stat><TextStat>Expected returns:</TextStat> {props.expected_returns}</Stat>
                <Stat><TextStat>Volatility:</TextStat> {props.sd}</Stat>
            </Row>
            <Row>
                <Stat><TextStat>Alpha:</TextStat> {props.alpha}</Stat>
                <Stat><TextStat>Beta:</TextStat> {props.beta}</Stat>
            </Row>
        </CompanyStyle>
    );
};