import mongoose from 'mongoose';

const connectionString = 'mongodb://localhost:27017/restaurants';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
};

export default connectToDatabase;
