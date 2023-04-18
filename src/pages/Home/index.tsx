import React from 'react'
// Home page
export default function Home () {
    // We need some placeholder variables that we plug in later once we get the values
    const tvl = 1e6
    return (
        <div>
        <h1>Home</h1>
        <p>Welcome to the analytics dashboard</p>
        <p>{tvl}</p>
        
        <p>TODO:</p>
        - Have two charts one for volume and one for total value locked
        - Use tradingview or google charts
        - We need to show line charts or bar charts
        - Have two tables:
        1)- table for tokens which shows the 24h volume of a token, name, symbol, liquidity, totalsupply
        2)- table for pairs which shows the 24h volume, name of the tokens (2 tokens in a pair), symbols, liquidity 
        </div>
    );
}