const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  navigations: {
    'cat-project.root': 'cat-project',
    'cat-project.main': '/cat-project',
    'cat-project.about': '/cat-project/about',
    'cat-project.accounts': '/cat-project/accounts',
    'cat-project.accounts.address': '/cat-project/accounts/:address',
    'cat-project.tokens': '/cat-project/tokens',
    'cat-project.pairs': '/cat-project/pairs'
  },
  features: {
    'cat-project': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value'
  }
}
