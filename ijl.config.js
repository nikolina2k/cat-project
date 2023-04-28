const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  navigations: {
    'cat.root': 'cat',
    'cat.main': '/cat',
    'cat.about': '/cat/about',
    'cat.accounts': '/cat/accounts',
    'cat.accounts.address': '/cat/accounts/:address',
    'cat.tokens': '/cat/tokens',
    'cat.pairs': '/cat/pairs'
  },
  features: {
    'cat': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'apiPath': 'https://andromeda.thegraph.metis.io/subgraphs/name/netswap/exchange'
  }
}
