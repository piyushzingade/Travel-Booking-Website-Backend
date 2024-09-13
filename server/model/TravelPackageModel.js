
import mongoose from 'mongoose';
import { travelPackageSchema } from '../schemas/TravelPackageSchema.js'; // Import the schema

const TravelPackage = mongoose.model('TravelPackage', travelPackageSchema); // Create the model

export default TravelPackage; // Export the model as the default export
