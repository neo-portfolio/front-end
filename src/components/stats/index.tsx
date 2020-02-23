import {ContextData, HomeContext} from "@components/home/context";
import React, {useContext} from "react";
import {RightContainer} from "@components/home/rightContainer";
import {Weight} from "@interfaces/neo4j";
import {WeightDisplay} from "./weightsDisplay";
import Styled from "styled-components";

const CompanyStyle = Styled.section`
    background-color: azure;
    opacity: 1;
    border-radius: 5px;
    border: 2px solid black;
    overflow-y: auto;
    margin-bottom: 5px;
`;

const TitleStyle = Styled.div`
    margin-bottom: 2px;
    text-align: center;
    font-style: italic;
    font-family: "Times New Roman", Times, serif;
    font-weight: bolder;
`;

export default () => {
	const {weights}: {weights: Weight[]} = useContext<ContextData>(HomeContext);

	return (
		<RightContainer>
			{weights && <CompanyStyle>
				{weights && <TitleStyle>Portfolio weights</TitleStyle>}
				{weights && weights.map((weight) => <WeightDisplay {...weight} />)}
			</CompanyStyle>}
		</RightContainer>
	);
}