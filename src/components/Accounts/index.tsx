import React, { useState } from 'react';
import { Input, Table, Button } from 'antd';
import './Accounts.css';

type Position = {
  account: string;
  pair: string;
  value: number;
};

type Transaction = {
  // define the fields of a transaction
};

type Props = {
  account: string | null;
};

const Accounts: React.FC<Props> = ({ account }) => {
  const [address, setAddress] = useState<string>('');
  const [positions, setPositions] = useState<Position[]>([
    {
      key: 1,
      account: '0x9999',
      pair: 'beep',
      value: 1050,
    },
    {
      key: 2,
      account: '0x9998',
      pair: 'boop',
      value: 7000,
    },
    {
      key: 3,
      account: '0x9997',
      pair: 'some name 3',
      value: 1100,
    },
    {
      key: 4,
      account: '0x9996',
      pair: 'some name 4',
      value: 100,
    },
  ]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSearch = async () => {
    // filter positions based on the entered address
    const filteredPositions = positions.filter(
      (position) => position.account === address
    );
    // update the positions state with the filtered positions
    setPositions(filteredPositions);
  };

  const positionsColumns = [
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Pair',
      dataIndex: 'pair',
      key: 'pair',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  const topLiquidityPositions = [
    // define an array of top liquidity positions
  ];

  const topLiquidityPositionsColumns = [
    {
      title: 'Account',
      dataIndex: 'account',
      key: 'account',
    },
    {
      title: 'Pair',
      dataIndex: 'pair',
      key: 'pair',
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
    },
  ];

  if (!account) {
    return (
      <Table
        dataSource={topLiquidityPositions}
        columns={topLiquidityPositionsColumns}
      />
    );
  }

  return (
    <>
      <div className="accounts-container">
        <div className="accounts-form">
          <Input value={address} onChange={handleAddressChange} />
          <Button type="primary" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <Table className="accounts-table" dataSource={positions} columns={positionsColumns} />
      </div>
    </>
  );
};

export default Accounts;
