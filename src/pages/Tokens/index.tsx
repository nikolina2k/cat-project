import React from 'react'
import PairsTable, { Pair } from '../../components/PairsTabe'
import './TokenList.css';

export default function TokenList() {
  const pairs: Pair[] = [
    { name: 'ETH/BTC', symbol: 'ETHBTC', volume: 123456.789, liquidity: 987654.321 },
    { name: 'BTC/USDT', symbol: 'BTCUSDT', volume: 987654.321, liquidity: 123456.789 },
    // ...
  ];

  return (
    <div className="token-list-container">
      <PairsTable pairs={pairs} />
    </div>
  );
}