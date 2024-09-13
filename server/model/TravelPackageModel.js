import { model } from 'mongoose';
import { TravelPackageSchema } from '../schemas/TravelPackageSchema.js';

const TravelPackageModel = model('TravelPackage', TravelPackageSchema);

export { TravelPackageModel };
