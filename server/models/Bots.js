import mongoose from "mongoose";

const schema = new mongoose.Schema({
    period: { type: Number, required: true },
    total_fund: { type: String, required: true },
    publicKey: { type: String, required: true },
    privateKey: { type: String, required: true },
    gas: { type: String, required: true }
});

export default mongoose.model("Bots", schema);