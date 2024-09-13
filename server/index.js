import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import TravelPackage from './model/TravelPackageModel.js'; // Import the default export

dotenv.config(); // Initialize dotenv to load .env variables

const PORT = process.env.PORT || 3002;  // Use PORT from .env or fallback to 3002
const uri = process.env.MONGO_URL;      // Use MongoDB URI from .env

const app = express();
app.use(cors());

// API route to fetch all travel packages
app.get('/allPackages', async (req, res) => {
  try {
    const allPackages = await TravelPackage.find({});
    res.json(allPackages);
  } catch (error) {
    console.error("Error fetching packages:", error);
    res.status(500).send("Error fetching packages");
  }
});

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`); // Log statement
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error);
  });
