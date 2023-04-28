import React from "react";
import { Table } from "antd";

const { Column } = Table;

interface TokenTableEntry {
  key: React.Key;
  tokenName: string;
  volume24: number;
  symbol: string;
  liquidity: number;
  totalSupply: number;
}

function TokenTable({ data }) {
  return (
    <Table dataSource={data} data-testid="token-table">
      <Column title="Name" dataIndex="tokenName" key="tokenName"/>
      <Column title="Volume (24 h)" dataIndex="volume24" key="volume24" />
      <Column title="Symbol" dataIndex="symbol" key="symbol" />
      <Column title="Liquidity" dataIndex="liquidity" key="liquidity" />
      <Column title="Total supply" dataIndex="totalSupply" key="totalSupply" />
    </Table>
  );
}

export default TokenTable;
export type { TokenTableEntry };
