import express from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import Bots from "../models/Bots";
import { getWalletAddress } from '../blockchain/wallet';
import HDWalletProvider from "../blockchain/truffle-hdwallet-provider-seed";

dotenv.config();

const router = express.Router();

/**
 *  Bot Deployment
 */
router.route('/deploy-bots').post( (req, res) => {
    console.log("[/deploy-bots]");

    const data_obj = req.body.data_obj;
    /**
     * Validation
     */
    const bot_number = parseInt(data_obj.bot_number);
    const period = parseInt(data_obj.period);
    const total_fund = data_obj.total_fund * 10 ** 18;
    const gas_fee = parseFloat(data_obj.gas);

    if (bot_number <= 0){
        return res.status(400).json({ errors: "'Number of bots' should be more than 0." });
    }
    if (total_fund <= 0){
        return res.status(400).json({ errors: "'Total fund' should be more than 0." });
    }
    if (period <= 0){
        return res.status(400).json({ errors: "'Period' should be more than 0." });
    }
    if (gas_fee <= 0){
        return res.status(400).json({ errors: "'Gas' should be more than 0." });
    }

    /**
     * Create X amount of bots(ETH wallet addresses)
     */
    // const hdWalletProvider = new HDWalletProvider(process.env.MNE, "https://mainnet.infura.io/VaxMZqBPDeLCJNBAsNN1");
    const hdWalletProvider = new HDWalletProvider(process.env.MNE, "https://ropsten.infura.io/VaxMZqBPDeLCJNBAsNN1");
    const address = hdWalletProvider.address;
    const web3 = new Web3(hdWalletProvider);

    web3.eth.getBalance(address)
        .then(value => {
            const balance =  web3.utils.fromWei(value.toString(10), "ether");
            console.log("[Main wallet eth balance] : ", balance);
            if (balance >= (parseFloat(data_obj.total_fund) * bot_number)){
                var index = 0, intval;
                intval = setInterval(function(){
                    const botETHAddress = getWalletAddress();
                    console.log("[botETHAddress] ", botETHAddress);

                    /**
                     * Send ETH to wallet address
                     */
                    web3.eth.sendTransaction({
                        from: address,
                        to: botETHAddress.publicKey,
                        value: total_fund
                    })
                        .on('transactionHash', function(hash){
                            console.log("[hash]", hash);
                        })
                        .on('receipt', function(receipt){
                            console.log("[receipt]", receipt);

                            /**
                             * Save in DB
                             */
                            let bot = new Bots();
                            bot.period = period;
                            bot.total_fund = total_fund;
                            bot.publicKey = botETHAddress.publicKey;
                            bot.privateKey = botETHAddress.privateKey;
                            bot.gas = gas_fee;

                            bot.save().then(() => {
                                console.log("[Bot has been deployed]");
                            }).catch(err => {
                                console.log("[MongoDB Save Failed] ", err);
                            });
                        })
                        .on('error', console.error);

                    index ++;
                    if (index > bot_number){
                        clearInterval(intval);
                        return res.json({});
                    }
                }, 3000);
            }else{
                console.log("[Insufficient balance in main wallet]");
                return res.status(400).json({ errors: "There is not enough ethers in main wallet to create bots." });
            }
        }).catch( error => {
            console.log("here is the error...........", error.message);
            return res.status(400).json({ errors: "Bot wallets creation error." });
        });
});


/**
 *  Bots Listing
 */
router.route('/get-bots-list').get( (req, res) => {
    console.log("[/get-bots-list]");

    Bots.find({}).then(bots => {
        return bots.map( bot => {
            return {
                _id: bot._id,
                publicKey: bot.publicKey,
                period: bot.period,
                total_fund: bot.total_fund,
                gas: bot.gas
            }
        })
    })
        .then(bots => res.json(bots))
        .catch(error => {
            console.log("get bot list error...........", error.message);
            return res.status(401).json({});
        });
});

export default router;