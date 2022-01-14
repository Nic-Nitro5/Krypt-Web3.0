// https://eth-ropsten.alchemyapi.io/v2/6kmllaiZIbQ1GfDGTfFlMuhQLjLA65Bh

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/6kmllaiZIbQ1GfDGTfFlMuhQLjLA65Bh',
      accounts: [ 'a12eff6efe0bf36e73ccaab76f4ab9684c543254856f24b8a6db6421b8da1c15' ]
    }
  }
}