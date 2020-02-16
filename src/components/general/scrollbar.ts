
export const scrollbar = `
{::-webkit-scrollbar {
    width: 10px;
    height: 2px;
}
::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
}

::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
}

::-webkit-scrollbar-thumb:hover {
    background: white;
}

::-webkit-scrollbar-thumb:active {
    background: white;
}

::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
    background: #666666;
}
::-webkit-scrollbar-track:active {
    background: #333333;
}
::-webkit-scrollbar-corner {
    background: transparent;
}
`;