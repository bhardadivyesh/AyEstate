const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const HomeRoute = require('./Routes/Home/HomeRoute');
const ListingRoute = require('./Routes/Listings/ListingRoute');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// MongoDB connection
const url = "mongodb://localhost:27017/AyEstate";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

// Routes
app.use(HomeRoute);
app.use(ListingRoute);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
