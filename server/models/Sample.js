import mongoose from "mongoose";

const schema = new mongoose.Schema({
    element: { type: String, required: true },
});

export default mongoose.model("Sample", schema);