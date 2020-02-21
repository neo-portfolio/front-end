import React, {useState} from "react";
import Styled from "styled-components";
import Picker from "@components/picker";
import Portfolio from "@components/portfolio";
import Stats from "@components/stats";
import {HomeContext} from "@components/home/context";
import {Query, Weight} from "@interfaces/neo4j";
import {Company} from "@interfaces/company";

const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 5% 42.5% 5% 42.5% 5%;
    grid-template-rows: 5% 42.5% 5% 42.5% 5%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: "back";
    
    @media only screen and (max-width: 850px) {
		grid-template-columns: 2.5% 44.5% 5% 44.5% 3.5%;
		grid-template-rows: 2.5% 45.5% 3% 45.5% 3.5%;
    }

`;

const PickerGridContainer = Styled.span`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 5;
`;

const PortfolioContainer = Styled.span`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 3;
`;

const PerfContainer = Styled.span`
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
`;

export const Grid = () => {
	const [companies, setCompanies] = useState<Query<Company>[]>([]);
	const [weights, setWeights] = useState<Weight[]>();

	return (<Wrapper>
			<HomeContext.Provider value={{companies, weights, setCompanies, setWeights}}>
				<PickerGridContainer>
					<Picker/>
				</PickerGridContainer>
				<PortfolioContainer>
					<Portfolio/>
				</PortfolioContainer>
				<PerfContainer>
					<Stats/>
				</PerfContainer>
			</HomeContext.Provider>
		</Wrapper>
	);
};