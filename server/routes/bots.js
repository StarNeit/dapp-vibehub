import express from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import Bots from "../models/Bots";
import { getWalletAddress } from '../blockchain/wallet';

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
    for (let i = 0; i < bot_number; i ++){
        const address = getWalletAddress();
        console.log("[addresses] ", address);

        /**
         * Save in DB
         */
        let bot = new Bots();
        bot.period = period;
        bot.total_fund = total_fund;
        bot.publicKey = address.publicKey;
        bot.privateKey = address.privateKey;
        bot.gas = gas_fee;

        bot.save().then(() => {
            console.log("[Bot has been deployed]");
        }).catch(err => {
            console.log("[MongoDB Save Failed] ", err);
        });
    }

    res.json({});
});


/**
 *  Bots Listing
 */
router.route('/get-bots-list').get( (req, res) => {
    console.log("[/get-bots-list]");

    Bots.find({}).then(botList => {
        return botList.map( bot => {
            return {
                _id: bot._id,
                publicKey: bot.publicKey,
                period: bot.period,
                total_fund: bot.total_fund,
                gas: bot.gas
            }
        })
            .then(bots => res.json({ bots }));
    })
        .catch(error => {
            console.log("get bot list error...........", error.message);
            return res.status(401).json({});
        });
});

export default router;