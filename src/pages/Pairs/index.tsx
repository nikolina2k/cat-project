import React from 'react';
import PairsTable, { Pair } from '../../components/PairsTabe';
import './Pairs.css';
import { useCategorizedData } from '../../contexts/GlobalData';

export default function Pairs () {
    const { pairs } = useCategorizedData()
    return (
        <div className="pairs-container">
            <PairsTable pairs={pairs} />
        </div>
    );
}