import React from 'react';
import { Table } from 'antd';

type Pair = {
  key: React.Key;
  name: string;
  symbol: string;
  volume: number;
  liquidity: number;
};

type PairsTableProps = {
  pairs: Pair[];
};

const PairsTable: React.FC<PairsTableProps> = ({ pairs }) => {
  const columns = [
    {
      title: 'Pair',
      dataIndex: 'pair',
      key: 'pair',
      render: (text: string, record: Pair) => (
        <span>
          {record.name} ({record.symbol})
        </span>
      ),
    },
    {
      title: 'Volume',
      dataIndex: 'volume',
      key: 'volume',
    },
    {
      title: 'Liquidity',
      dataIndex: 'liquidity',
      key: 'liquidity',
    },
  ];

  return <Table dataSource={pairs} columns={columns} data-testid="pairs-table"/>;
};

export default PairsTable;
export type { Pair }