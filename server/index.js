import dotenv from 'dotenv'; // Load environment variables
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { TravelPackageModel } from './model/TravelPackageModel.js'; // Make sure to add '.js' for ESM import

dotenv.config(); // Initialize dotenv to load .env variables

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

app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`); // Log statement
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((err) => console.error("DB connection error:", err));
});
