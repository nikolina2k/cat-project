import React from 'react';
import TokenTable from '../../components/TokenTable';
import './TokenList.css';
import { useCategorizedData } from '../../contexts/GlobalData';

export default function TokenList() {

  // const {tokensRaw: token} = useCategorizedData()
  const { tokens } = useCategorizedData()
  console.log({tokens})

  return (
    <TokenTable data={tokens} />
  );
}