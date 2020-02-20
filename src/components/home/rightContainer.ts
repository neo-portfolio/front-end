import Styled from "styled-components";
import {scrollbar} from "@components/general/scrollbar";

export const RightContainer = Styled.div`
    background-color: white;
    width: calc(100% - 60px);
    height: calc(100% - 80px);
    opacity: 0.7;
    padding: 30px;
    border: 5px solid black;
    border-radius: 10px;
    position: relative;
    overflow-y: auto;
    ${scrollbar}
`;