import React, {useContext} from "react";
import {HomeContext} from "@components/home/context";
import Styled from "styled-components";

const Container = Styled.div`
    background-color: white;
    width: calc(100% - 60px);
    height: calc(100% - 80px);
    opacity: 0.85;
    padding: 30px;
    border: 5px solid black;
    border-radius: 10px;
    position: relative;
`;

export default () => {
	const {companies} = useContext(HomeContext);
	// Using react hooks https://reactjs.org/docs/hooks-reference.html#usecontext
	// With context https://reactjs.org/docs/context.html

	return (
		<Container>
			{JSON.stringify(companies)}
		</Container>
	);
}