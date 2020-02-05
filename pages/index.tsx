import React from 'react';
import {Headers} from '@components/general/headers';
import {Banner} from '@components/home/banner';
import {GlobalStyle} from '@components/general/global';
import {PickerWrapper} from "@components/home/pickerWrapper";

export default () => (
    <>
        <GlobalStyle/>
        <Headers title="Portfolio optimization"/>
        <Banner/>
        <PickerWrapper/>
    </>
);