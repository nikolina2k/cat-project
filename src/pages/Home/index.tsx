import React from "react";
import { Typography } from "antd";
import Chart from "../../components/Chart";
import TokenTable from "../../components/TokenTable";
import PairsTable from "../../components/PairsTabe";
import "./Home.css";

import { Col, Row } from "antd";
const { Title } = Typography;

import { useCategorizedData } from "../../contexts/GlobalData";

export default function Home() {
  // We need some placeholder variables that we plug in later once we get the values

  const {state, tokens, pairs, historicalVolume, historicalLiquidity, totalLiquidityUSD, totalVolumeUSD, metisPrice, } = useCategorizedData()
  console.log({state, historicalVolume, historicalLiquidity, pairs})


  return (
    <>
    {(state.data && !state.loading && !state.error) && <div className="container">
      <Row>
        <Col span="12">
          <Chart title="Liquidity" data={historicalLiquidity} />
        </Col>
        <Col span="12">
          <Chart title="Volume (24h)" data={historicalVolume} histogram />
        </Col>
      </Row>
      <Row>
        <Typography>
          <Title>Tokens</Title>
        </Typography>
      </Row>
      <Row>
        <Col span="24">
          <TokenTable data={tokens} />
        </Col>
      </Row>
      <Row>
        <Typography>
          <Title>Pairs</Title>
        </Typography>
      </Row>
      <Row>
        <Col span="24">
          <PairsTable pairs={pairs} />
        </Col>
      </Row>
    </div>}
    {state.loading && <div>
      This page is loading
      </div>}
    {state.error && <div>error encountered during loading the data: {state.error}</div>}
    </>
  );
}
