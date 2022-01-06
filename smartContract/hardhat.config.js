require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

const url = process.env.URL;
const accounts = process.env.ACCOUNTS;

module.exports ={
  solidity: '0.8.0',
  networks : {
    ropsten: {
      url: url,
      accounts: [accounts],
    }
  }
}
