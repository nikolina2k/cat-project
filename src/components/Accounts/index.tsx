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
  const [positions, setPositions] = useState<Position[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSearch = async () => {
    // fetch positions and transactions based on the entered address
    // set the positions and transactions state accordingly
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
