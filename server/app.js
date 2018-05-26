import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import lusca from 'lusca';
import path from "path";

import bots from "./routes/bots";

dotenv.config();

const app = express();

/**
 *  MongoDB connection
 */
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL, { useMongoClient: true });
mongoose.connection.on("error", () => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    process.exit();
});

app.use(bodyParser.json());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

/**
 * Endpoints
 */
app.use("/api/bots", bots);

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;