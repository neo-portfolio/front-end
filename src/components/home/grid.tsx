import React from "react";
import Styled from "styled-components";
import Picker from "@components/picker";

const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 5% 45% 45% 5%;
    grid-template-rows: 100px 1fr;
    position: absolute;
    left: 0;
    top: 0;
`;

const PickerGridContainer = Styled.span`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
`;

export const Grid = () => (
    <Wrapper>
        <PickerGridContainer>
            <Picker/>
        </PickerGridContainer>
    </Wrapper>
);