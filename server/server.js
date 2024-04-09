const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//DOTENV
dotenv.config();

// Use MONGO_URI in your application
const MONGO_URI = process.env.MONGO_URI;

//DATABASE CONNECTION
connectDB(MONGO_URI);

//REST OBJECT
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//ROUTES
app.get("", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running",
    });
} );

//PORT
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`Server Runnning ${PORT}`.bgGreen.white);
});
