import React from 'react';
import { Space, Table, Tag } from 'antd';
import { Image } from 'antd';

const { Column } = Table;

interface TokenInfo {
  name: string,
  icon_url: string
}

interface TokenTableEntry {
  key: React.Key;
  tokenInfo: TokenInfo,
  volume24: number,
  symbol: string,
  liquidity: number,
  totalSupply: number
}

function TokenTable({data}) {
    return (
        <Table dataSource={data} style={{width: "100%", margin: 25}}>
          <Column title="Name" dataIndex="tokenInfo" key="tokenInfo" render={(tokenInfo: TokenInfo) => (
              <>
              <Image height={32} src={tokenInfo.icon_url} /> {tokenInfo.name}
              </>
            )}/>
          <Column title="Volume (24 h)" dataIndex="volume24" key="volume24" />
          <Column title="Symbol" dataIndex="symbol" key="symbol" />
          <Column title="Liquidity" dataIndex="liquidity" key="liquidity" />
          <Column title="Total supply" dataIndex="totalSupply" key="totalSupply" />
        </Table>
    );
 }

export default TokenTable;
export type { TokenTableEntry }