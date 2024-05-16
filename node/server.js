const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
const HomeRoute = require('./Routes/Home/HomeRoute');
const ListingRoute = require('./Routes/Listings/ListingRoute');
const ContactRoute = require('./Routes/Contact/ContactRoute')
const RegistrationRoute = require('./Routes/Registration/RegistrationRoute')
const InquiryRoute = require('./Routes/Inquiry/InquiryRoute')
const RazorpayRoute = require('./Routes/Payment/PaymentRoute')
const LocationRoute = require('./Routes/Admin/Location/LocationRoute')
const CategoryRoute = require('./Routes/Admin/Category/CategoryRoute')
const ProductRoute = require('./Routes/Admin/Listings/ListingSchema')
const ListingDetailRoute = require('./Routes/ListingDetailProperty/ListingDetailPropertyRoute')


const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' })); 
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true })); 


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
app.use(ContactRoute)
app.use(RegistrationRoute)
app.use(InquiryRoute)
app.use(RazorpayRoute)
app.use(LocationRoute)
app.use(CategoryRoute)
app.use(ProductRoute)
app.use(ListingDetailRoute)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
