import { ApolloClient } from 'apollo-client'
import gql from 'graphql-tag'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { getConfigValue } from '@ijl/cli'

const newClient = (uri: string) => {
    return new ApolloClient({
        link: new HttpLink({
          uri,
        }),
        cache: new InMemoryCache(),
    })
}

export const netswapClient = newClient(getConfigValue('cat.apiPath'))

// Queries

export const TOP_PAIRS_QUERY = gql`
query topPairs {
    pairs (first: 20, orderBy: reserveUSD, orderDirection: desc){
      token0{
        id
        name
        symbol
        decimals
      }
      token1{
        id
        name
        symbol
        decimals
      }
      reserveUSD
    }
}
`

export const TOP_TOKENS_QUERY = gql`
query topTokens {
    tokens (first : 20, orderBy: derivedMETIS, orderDirection: desc){
      tradeVolumeUSD
      derivedMETIS
      name
      symbol
      decimals
    }
}
`

export const GLOBAL_INFO_QUERY = gql`
query globalInfo {
    netswapDayDatas(first: 1000){
      date
      id
      dailyVolumeUSD
      totalLiquidityUSD
      userCount
      txCount
    }
    
    tokens (first : 20, orderBy: tradeVolumeUSD, orderDirection: desc){
        id
        tradeVolumeUSD
        derivedMETIS
        totalLiquidity
        totalSupply
        name
        symbol
        decimals
    }
    
    pairs (first: 20, orderBy: reserveUSD, orderDirection: desc){
        id
        token0{
          id
          name
          symbol
          decimals
        }
        token1{
          id
          name
          symbol
          decimals
        }
        reserveUSD
        volumeUSD
    }

    netswapFactories(first: 10){
        id
        pairCount
        totalVolumeUSD
        totalLiquidityUSD
        userCount
        txCount
    }

    liquidityPositions(first: 1000, orderBy: liquidityTokenBalance, orderDirection: desc, where: {liquidityTokenBalance_gt: 0}){
        id
        user {
            id
        }
        pair {
          id
          token0{ symbol }
          token1{ symbol }
          reserveUSD
          totalSupply
        }
        liquidityTokenBalance
      }
}
`