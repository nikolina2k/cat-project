import React from 'react'
import { Typography } from 'antd'

const { Title, Paragraph, Text, Link } = Typography;

/*
- Have two charts one for volume and one for total value locked
        - Use tradingview or google charts
        - We need to show line charts or bar charts
        - Have two tables:
        1)- table for tokens which shows the 24h volume of a token, name, symbol, liquidity, totalsupply
        2)- table for pairs which shows the 24h volume, name of the tokens (2 tokens in a pair), symbols, liquidity 
*/
export default function Home () {
    // We need some placeholder variables that we plug in later once we get the values
    const tvl = 1e6
    return (
        <>
            <Typography>
                <Title>Home</Title>
                <Paragraph strong>Welcome to the analytics dashboard!</Paragraph>
                <Paragraph>{tvl}</Paragraph>

                <Paragraph>
                    <Title>TODO:</Title>
                    <ul>
                        <li> Have two charts one for volume and one for total value locked </li>
                        <li> Use tradingview or google charts </li>
                        <li> We need to show line charts or bar charts </li>
                        <li> Have two tables: 
                            <ul>
                                <li> table for tokens which shows the 24h volume of a token, name, symbol, liquidity, totalsupply</li>
                                <li> table for pairs which shows the 24h volume, name of the tokens (2 tokens in a pair), symbols, liquidity</li>
                            </ul>
                        </li>
                    </ul>
                </Paragraph>
            </Typography>
        </>
    );
}