import express from "express";
const router = express.Router();

var Web3 = require('web3');
var BotContract = require('../../build/contracts/BotContract.json');

const web3 = new Web3(new Web3.providers.WebsocketProvider("ws://18.216.49.67:9546"));
const contract = new web3.eth.Contract(BotContract.abi);
contract.setProvider(web3.currentProvider);

router.route('/deploy-bots').post( (req, res) => {
    console.log("[deploy-bots]");

    const data_obj = req.body.data_obj;
    console.log(data_obj);

    /**
     * Validation
     */
    const bot_number = data_obj.bot_number;
    const period = data_obj.period;
    const total_fund = data_obj.total_fund;
    const gas = data_obj.gas;


    /**
     * Deploy bots
     */
    web3.eth.getGasPrice()
        .then( gasPrice => {
            console.log(gasPrice);

            contract.deploy({
                    data: BotContract.bytecode,
                    arguments: [
                        "cointype",
                        "1000",
                        "0x123456789",
                        "21000"
                    ]
                })
                .estimateGas( (err, gas) => {
                    console.log(gas);

                    contract.deploy({
                        data: BotContract.bytecode,
                        arguments: [
                            "cointype",
                            "1000",
                            "0x123456789",
                            "15"
                        ]
                    }).send({
                        from: "0x2b9c5287ddb80c7284e635ce04d256a144232d9a",
                        gas: gas,
                        gasPrice
                    }).on('transactionHash', (transactionHash) => {
                        console.log("Hash....", transactionHash);
                    }).then((newContractInstance) => {
                        console.log("Address, ", newContractInstance.options.address);
                    }).catch(error => {
                        console.log(error.message);
                    });
                });
        });
});

export default router;