import React from 'react';
import {Headers} from '@components/general/headers';
import {GlobalStyle} from '@components/general/global';
import {Grid} from "@components/home/grid";

export default () => (
    <>
        <GlobalStyle/>
        <Headers title="Portfolio optimization"/>
        <Grid/>
    </>
);