import React from 'react';
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
  const positions: Position[] = [
    {
      account: '0x9999',
      pair: 'beep',
      value: 1050,
    },
    {
      account: '0x9998',
      pair: 'boop',
      value: 7000,
    },
    {
      account: '0x9997',
      pair: 'some name 3',
      value: 1100,
    },
    {
      account: '0x9996',
      pair: 'some name 4',
      value: 100,
    },
  ];
  const [address, setAddress] = React.useState<string>('');
  const [filteredPositions, setFilteredPositions] = React.useState<Position[]>(positions);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // filter positions based on the entered address
    const filtered = positions.filter(
      (position) => position.account === address
    );
    // update the positions state with the filtered positions
    setFilteredPositions(filtered);
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
        <form className="accounts-form" onSubmit={handleSearch}>
          <Input value={address} onChange={handleAddressChange} />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </form>
        <Table className="accounts-table" dataSource={filteredPositions} columns={positionsColumns} />
      </div>
    </>
  );
};

export default Accounts;
