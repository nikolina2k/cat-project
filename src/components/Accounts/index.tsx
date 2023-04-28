import React, { useMemo } from 'react';
import { Input, Table, Button } from 'antd';
import './Accounts.css';
import { useCategorizedData } from '../../contexts/GlobalData';

type Position = {
  key: string;
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
  const { positions, state } = useCategorizedData()
  const [address, setAddress] = React.useState<string>('');
  const [submit, setSubmit] = React.useState<Boolean>(false);
  // const [filteredPositions, setFilteredPositions] = React.useState<Position[]>(positions);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const filteredPositions = useMemo(() => {
    return positions.filter((position) => position.account.startsWith(address) || position.account.endsWith(address))
  }, [submit, positions])

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
      {(!state.loading && !state.error && state.data) &&<div className="accounts-container">
        <form className="accounts-form" onSubmit={(event) => {setSubmit(!submit); event.preventDefault();}}>
          <Input value={address} onChange={handleAddressChange} />
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </form>
        <Table className="accounts-table" dataSource={filteredPositions} columns={positionsColumns} />
      </div>}
      {(state.loading) && <div>This page is loading</div>}
      {(state.error) && <div>An error encountered while loading the data: {state.error}</div>}
    </>
  );
};

export default Accounts;
