import express from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import Bots from "../models/Bots";
var BotContract = require('../../build/contracts/BotContract.json');

dotenv.config();

const router = express.Router();

const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.BLOCKCHAIN_NODE));
const contract = new web3.eth.Contract(BotContract.abi);
contract.setProvider(web3.currentProvider);

router.route('/deploy-bots').post( (req, res) => {
    console.log("[deploy-bots]");

    const data_obj = req.body.data_obj;
    console.log(data_obj);

    /**
     * Validation
     */
    const bot_number = parseInt(data_obj.bot_number);
    const period = parseInt(data_obj.period);
    const total_fund = data_obj.total_fund * 10 ** 18;
    const gas_fee = data_obj.gas;

    if (bot_number <= 0){
        return res.status(400).json({ errors: "'Number of bots' should be more than 0." });
    }
    if (total_fund <= 0){
        return res.status(400).json({ errors: "'Total fund' should be more than 0." });
    }
    if (period <= 0){
        return res.status(400).json({ errors: "'Period' should be more than 0." });
    }

    /**
     * Deploy bots
     */
    web3.eth.getGasPrice()
        .then( gasPrice => {
            console.log("[GasPrice] ", gasPrice);

            contract.deploy({
                data: BotContract.bytecode,
                arguments: [
                    total_fund,
                    period
                ]
            }).estimateGas( (err, gas) => {
                console.log("[Gas] ", gas);

                var intval_id, index = 0;
                intval_id = setInterval(function () {
                    contract.deploy({
                        data: BotContract.bytecode,
                        arguments: [
                            total_fund,
                            period
                        ]
                    }).send({
                        from: process.env.ADMIN_ADDRESS,
                        gas: gas,
                        gasPrice
                    }).on('transactionHash', (transactionHash) => {
                        console.log("Hash....", transactionHash);

                        /**
                         * Save in DB
                         */
                        let bot = new Bots();
                        bot.tx = transactionHash;
                        bot.period = period;
                        bot.total_fund = total_fund;
                        bot.remaining_fund = "0";
                        bot.verified = false;
                        bot.save().then(() => {
                            console.log("[A Bot has been deployed]");
                        }).catch(err => {
                            console.log("[MongoDB Save Failed] ", err);
                        });

                        index ++;
                        if (index >= bot_number){
                            clearInterval(intval_id);
                        }
                    }).then((newContractInstance) => {
                        console.log("Address, ", newContractInstance.options.address);
                    }).catch(error => {
                        console.log(error.message);
                    });
                }, 2000);
            });
        });

    res.json({});
});

export default router;

