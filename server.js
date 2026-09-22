const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;
const { MongoClient } = require("mongodb");

const client = new MongoClient(uri);

app.get("/", async (req, res) => {
    try {
        await client.connect();

        res.json({
            message: "Successfully connected to the database!"
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({
            message: "Database connection failed"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
});