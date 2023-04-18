import React from 'react'
import { useParams } from 'react-router-dom';

// About page
export default function About () {
    const {address} = useParams()
    console.log({address})
    return (
        <div>
        <h1>About</h1>
        <p>TODO: have an input form where we can enter the address and filter transactions, show positions</p>
        TODO: if account is null, just show a table of top liquidity positions with columns (account - pair - value)
        TODO: else show button that takes you to explorer, positions table for the account, and then (maybe) transactions table
        <p>Test: {address}</p>

        </div>
    );
}