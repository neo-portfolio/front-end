import Styled from "styled-components";

// taken from https://codepen.io/brissmyr/pen/egidw

export const CrossButton = Styled.div`
    width: 32px;
    height: 32px;
    opacity: 0.9;
    position: absolute;
    right: 5px;
    top: 9px;
    cursor: pointer;

    :hover {
        opacity: 0.3;
    }

    :before, :after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }

    :before {
        transform: rotate(45deg);
    }

    :after {
        transform: rotate(-45deg);
    }
`;