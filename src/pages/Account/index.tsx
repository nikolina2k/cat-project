import React from 'react';
import { useParams } from 'react-router-dom';
import Accounts from '../../components/Accounts';
import './Account.css';

export default function Account() {
  const { address } = useParams();
  console.log({ address });

  return (
    <div className="account-container">
      <Accounts account={'some string'} />
    </div>
  );
}
