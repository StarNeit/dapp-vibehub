# VibeHub Dapp
VIBEHub Dapp with ethereum smart contract, Node.js ,React/Redux, MongoDB, and Geth

## Requirements

To run tests you need to install the following software:

- [Truffle v3.2.4](https://github.com/trufflesuite/truffle-core)
- [EthereumJS TestRPC v3.0.5](https://github.com/ethereumjs/testrpc)


## How to test

Open the terminal and run the following commands:

```sh
$ cd dapp_vibehub
$ truffle compile
$ npm run build
$ npm run server
```

NOTE: All tests must be run separately as specified.


## Deployment

To deploy smart contracts to live network do the following steps:
1. Go to the smart contract folder and run truffle console:
```sh
$ cd dapp_vibehub
$ truffle console
```
2. Inside truffle console, invoke "migrate" command to deploy contracts:
```sh
truffle> migrate
```
3. Deploy to ethereum test network
```sh
update truffle-config.js and migrate
```
