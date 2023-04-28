import React from 'react';
import PairsTable, { Pair } from '../../components/PairsTabe';
import './Pairs.css';

export default function Pairs () {
    const pairs: Pair[] = [
        { key: 0, name: 'ETH/BTC', symbol: 'ETHBTC', volume: 123456.789, liquidity: 987654.321 },
        { key: 1, name: 'BTC/USDT', symbol: 'BTCUSDT', volume: 987654.321, liquidity: 123456.789 },
      ];
    return (
        <div className="pairs-container">
            <PairsTable pairs={pairs} />
        </div>
    );
}