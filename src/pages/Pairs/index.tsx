import React from 'react';
import PairsTable, { Pair } from '../../components/PairsTabe';
import { useCategorizedData } from '../../contexts/GlobalData';

export default function Pairs () {
    const { pairs } = useCategorizedData()
    return (
        <div>
            <PairsTable pairs={pairs} />
        </div>
    );
}