import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import { BikeRouter } from './routes/bikes.route.js';




const app = express();
const port = 4000;

// MongoDB configuration
const mongoDBURI = "mongodb+srv://kaveesha:kaveesha123@cluster0.hq7qfae.mongodb.net/?retryWrites=true&w=majority"; // Replace with your MongoDB connection URI

mongoose.connect(mongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routers
app.use ( "/bikes" ,BikeRouter );



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
