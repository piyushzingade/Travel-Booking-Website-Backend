require("dotenv").config();  // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { TravelPackageModel } = require('./model/TravelPackageModel');

const PORT = process.env.PORT || 3002;  // Use PORT from .env or fallback to 3002
const uri = process.env.MONGO_URL;      // Use MongoDB URI from .env

const app = express();
app.use(cors());

// API route to fetch all travel packages
app.get('/allPackages', async (req, res) => {
  try {
    let allPackages = await TravelPackageModel.find({});
    res.json(allPackages);
  } catch (err) {
    res.status(500).send("Error fetching packages");
  }
});

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);  // Corrected log statement
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
});
