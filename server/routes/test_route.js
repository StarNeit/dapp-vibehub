import express from "express";
import Sample from "../models/Sample";

const router = express.Router();

router.post('/', function(req, res, next) {
    console.log("[endpoint /]");
});

router.route('/get-data1').post( (req, res) => {
    console.log("[endpoint /get-data1]");
});

router.get('/get-data2', (req, res) => {
    console.log("[endpoint /get-data2]");

    var obj = new Sample();
    obj.element = "hello!";
    obj.save();

    const data = {
        child: "hello"
    }
    // console.log(data);
    res.json(data);
});

router.post("/get-data3", (req, res) => {
    console.log("[endpoint /get-data3]");
});

export default router;