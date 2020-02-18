import {HomeContext} from "@components/home/context";
import React, {useContext} from "react";
import {RightContainer} from "@components/home/rightContainer";

export default () => {
	const {weights} = useContext(HomeContext);

	return (
		<RightContainer>
            {JSON.stringify(weights)}
		</RightContainer>
	);
}