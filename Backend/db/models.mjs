import mongoose from "mongoose";

// Schema for the Episode
const episodeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true } // assuming imageURL is a string
}, {
  _id: false // Disabling _id for episodes
});

// Schema for the Market
const marketSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  token: {type: Number, required: true}
}, {
  _id: false
});

// Schema for the Events
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageURL: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  token: {type: Number, required: true}
}, {
  _id: false 
});

// Schema for the Card
const cardSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, // MongoDB ObjectId
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  date: { type: String, required: true }, // Can be changed to a Date type if necessary
  time: { type: String, required: true }, // Consider Date/Time if needed
  rating: { type: Number, required: true },
  episodes: [episodeSchema], // Array of episodes
  marketItems: [marketSchema], //Array of market-items
  eventItems: [eventSchema] 
}, {
  collection: 'cards'
});

export const Card = mongoose.model("Card", cardSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);
