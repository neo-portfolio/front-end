import Head from "next/head";
import React, {FunctionComponent} from "react";

interface Props {
    title: string
}

export const Headers: FunctionComponent<Props> = ({title}: Props) => (
    <Head>
        <title>{title}</title>
        <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'" />
        <meta charSet="UTF-8"/>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="alpha, pure, beta, portfolio"/>
        <meta name="author" content="Alexandre Senges, Benoit Fontannaz, Olivier Charrez"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
            @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
        </style>
    </Head>
);