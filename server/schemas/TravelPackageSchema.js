
import mongoose from 'mongoose';

// Define the schema
const travelPackageSchema = new mongoose.Schema({
  destination: String,
  price: Number,
  rating: Number,
  duration: String,
  description1: String,
  description2: String,
  imageUrl: String,
});

// Export the schema (named export)
export { travelPackageSchema };
