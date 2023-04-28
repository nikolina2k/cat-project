import { createContext, useReducer, useEffect, useMemo } from "react";
import { GLOBAL_INFO_QUERY, netswapClient } from "../graphql";

interface State {
  loading: boolean;
  data: any;
  error: string;
}

const initialState: State = {
  loading: false,
  data: null,
  error: "",
};

interface Action {
  type: string;
  payload?: any;
}

function reducer (state: State, action: Action): State {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true, error: "" };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, data: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
};

async function fetchData  (dispatch: React.Dispatch<Action>) {
    dispatch({ type: "FETCH_START" });
    try {
    //   const response = await fetch(DEFILLAMA_NETSWAP_ENDPOINT);
      let result = await netswapClient.query({
        query: GLOBAL_INFO_QUERY,
        fetchPolicy: 'no-cache',
      })
      const data = result.data;
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
};

export function useCategorizedData() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData(dispatch);
    }, []);

    const metisPrice = 27
    return useMemo(() => {
        if (!state.data || state.error || state.loading) return {
            tokens: [],
            pairs: [],
            historicalLiquidity: [],
            historicalVolume: [],
            totalLiquidityUSD: 0,
            totalVolumeUSD: 0,
            metisPrice,
            positions: [],
            state
        }
        const data = state.data
        return {
            tokens: data.tokens.map((token) => {
                return {
                  key: token.id,
                  tokenName: token.name,
                  volume24: parseFloat(token.tradeVolumeUSD) + 0,
                  liquidity: parseFloat(token.totalLiquidity) + 0,
                  symbol: token.symbol,
                  totalSupply: parseFloat(token.totalSupply) + 0
                }
              }) ?? [],
              pairs: data.pairs.map((pair) => {
                return {
                    key: pair.id,
                    name: `${pair.token0.symbol}-${pair.token1.symbol} LP Token`,
                    symbol: `${pair.token0.symbol}-${pair.token1.symbol}-LP`,
                    volume: parseFloat(pair.volumeUSD) + 0,
                    liquidity: parseFloat(pair.reserveUSD) + 0, 
                }
              }) ?? [],
            historicalLiquidity: data.netswapDayDatas.map((dayData) => {
                return {
                    time: dayData.date,
                    value: parseFloat(dayData.totalLiquidityUSD) + 0,
                }
            }),
            historicalVolume: data.netswapDayDatas.map((dayData) => {
                return {
                    time: dayData.date,
                    value: parseFloat(dayData.dailyVolumeUSD) + 0,
                }
            }),
            totalLiquidityUSD: parseFloat(data.netswapFactories[0].totalLiquidityUSD) + 0,
            totalVolumeUSD: parseFloat(data.netswapFactories[0].totalVolumeUSD) + 0,
            metisPrice: metisPrice,
            positions: data.liquidityPositions.map((position) => {
                return {
                  key: `${position.user.id}-${position.pair.id}`,
                  account: position.user.id,
                  pair: `${position.pair.token0.symbol}-${position.pair.token1.symbol}`,
                  value: parseFloat(position.pair.reserveUSD) * parseFloat(position.liquidityTokenBalance) / parseFloat(position.pair.totalSupply) + 0
                }
              }).sort((a, b) => (b.value - a.value)),
            state
          }
    }, [state])
}