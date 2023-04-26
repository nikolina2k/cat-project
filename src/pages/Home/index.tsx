import React from "react";
import { Typography } from "antd";
import Chart from "../../components/Chart";
import stub_data from "./stub_data.js";
import TokenTable from "../../components/TokenTable";
import PairsTable from "../../components/PairsTabe";
import "./Home.css";

import { Col, Row, Slider } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

import type { Pair } from "../../components/PairsTabe";
import type { TokenTableEntry } from "../../components/TokenTable";
const tokenTableData: TokenTableEntry[] = [
  {
    key: "1",
    tokenInfo: {
      name: "Wrapped Fuse",
      icon_url:
        "https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x0BE9e53fd7EDaC9F859882AfdDa116645287C629/logo.png",
    },
    volume24: 18052,
    liquidity: 666111,
    symbol: "WFUSE",
    totalSupply: 10000000,
  },
  {
    key: "2",
    tokenInfo: {
      name: "Coineus",
      icon_url:
        "https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x4e69Ae0CD024754655b4eF74F24A8DCB39Ba07e8/logo.png",
    },
    volume24: 18052,
    liquidity: 666111,
    symbol: "WFUSE",
    totalSupply: 10000000,
  },
  {
    key: "3",
    tokenInfo: {
      name: "Binance USD on Fuse",
      icon_url:
        "https://raw.githubusercontent.com/voltfinance/token-logos/main/logos/0x6a5F6A8121592BeCd6747a38d67451B310F7f156/logo.png",
    },
    volume24: 18052,
    liquidity: 666111,
    symbol: "WFUSE",
    totalSupply: 10000000,
  },
];

const pairsTableData: Pair[] = [
  {
    name: "ETH/BTC",
    symbol: "ETHBTC",
    volume: 123456.789,
    liquidity: 987654.321,
  },
  {
    name: "BTC/USDT",
    symbol: "BTCUSDT",
    volume: 987654.321,
    liquidity: 123456.789,
  },
  // ...
];

export default function Home() {
  // We need some placeholder variables that we plug in later once we get the values
  const firstChartData = stub_data;
  const secondChartData = stub_data;

  return (
    <div className="container">
      <Row>
        <Col span="12">
          <Chart title="Liquidity" data={firstChartData} />
        </Col>
        <Col span="12">
          <Chart title="Volume (24h)" data={secondChartData} histogram />
        </Col>
      </Row>
      <Row>
        <Typography>
          <Title>Tokens</Title>
        </Typography>
        <TokenTable data={tokenTableData} />
      </Row>
      <Row>
        <Typography>
          <Title>Pairs</Title>
        </Typography>
      </Row>
      <Row>
        <div style={{ width: "100%" }}>
          <PairsTable pairs={pairsTableData} />
        </div>
      </Row>
    </div>
  );
}
