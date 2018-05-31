import mongoose from "mongoose";

const schema = new mongoose.Schema({
    tx: { type: String, required: true },
    period: { type: Number, required: true },
    total_fund: { type: String, required: true },
    remaining_fund: { type: String, required: true },
    verified: { type: Boolean, default: false }
});

export default mongoose.model("Bots", schema);