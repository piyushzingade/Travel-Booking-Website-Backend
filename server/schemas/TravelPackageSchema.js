import mongoose from 'mongoose';

const travelPackageSchema = new mongoose.Schema({
  destination: String,
  price: Number,
  rating: Number,
  duration: String,
  description1: String,
  description2: String,
  imageUrl: String,
});

const TravelPackage = mongoose.model('TravelPackage', travelPackageSchema);

export default TravelPackage;
