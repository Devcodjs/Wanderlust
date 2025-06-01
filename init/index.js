
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});
  
  // Corrected data mapping with proper image structure
  const modifiedData = initData.data.map(obj => ({
    title: obj.title,
    description: obj.description,
    image: {
      url: obj.image.url,
      filename: obj.image.filename
    },
    price: obj.price,
    location: obj.location,
    country: obj.country,
    owner: "67fe65f4d9350883cb6f285a",
    geometry: obj.geometry || { // Add default geometry if missing in sample data
      type: "Point",
      coordinates: [0, 0]
    }
  }));

  await Listing.insertMany(modifiedData);
  console.log("Data initialized successfully");
};

initDB();