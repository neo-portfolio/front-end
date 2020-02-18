import React, {useContext} from "react";
import {HomeContext} from "@components/home/context";
import {RightContainer} from "@components/home/rightContainer";

export default () => {
	const {companies} = useContext(HomeContext);
	// Using react hooks https://reactjs.org/docs/hooks-reference.html#usecontext
	// With context https://reactjs.org/docs/context.html

	return (
		<RightContainer>
			{JSON.stringify(companies)}
		</RightContainer>
	);
}