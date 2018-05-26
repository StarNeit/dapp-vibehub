import express from "express";
const router = express.Router();

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
    // geth or infura.io integration
});

export default router;