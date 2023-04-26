import React from 'react';
import TokenTable from '../../components/TokenTable';
import type {TokenTableEntry} from '../../components/TokenTable';
import './TokenList.css';

const tokenTableData: TokenTableEntry[] = [
  {
    key: '1',
    tokenInfo: {name: 'Wrapped Fuse', icon_url: 'https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/logo.png'},
    volume24: 18052,
    liquidity: 666111,
    symbol: 'WFUSE',
    totalSupply: 10000000
  },
  {
    key: '2',
    tokenInfo: {name: 'Coineus', icon_url: 'https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x4e69Ae0CD024754655b4eF74F24A8DCB39Ba07e8/logo.png'},
    volume24: 18052,
    liquidity: 666111,
    symbol: 'WFUSE',
    totalSupply: 10000000
  },
  {
    key: '3',
    tokenInfo: {name: 'Binance USD on Fuse', icon_url: 'https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x6a5F6A8121592BeCd6747a38d67451B310F7f156/logo.png'},
    volume24: 18052,
    liquidity: 666111,
    symbol: 'WFUSE',
    totalSupply: 10000000
  },
];

export default function TokenList() {

  return (
    <TokenTable data={tokenTableData} />
  );
}