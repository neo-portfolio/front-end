import React from "react";
import Styled from "styled-components";
import Picker from "@components/picker";

const Wrapper = Styled.div`
    width: 800px;
    height: 800px;
    position: absolute;
    left: calc(20% - 250px);
    top: 100px;
`;

export const PickerWrapper = () => (
    <Wrapper>
        <Picker/>
    </Wrapper>
);