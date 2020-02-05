import Head from "next/head";
import React, {FunctionComponent} from "react";

interface Props {
    title: string
}

export const Headers: FunctionComponent<Props> = ({title}: Props) => (
    <Head>
        <title>{title}</title>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="alpha, pure, beta, portfolio"/>
        <meta name="author" content="Alexandre Senges, Benoit Fontannaz, Olivier Charrez"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Sigmar+One|Zhi+Mang+Xing&display=swap');
        </style>
    </Head>
);