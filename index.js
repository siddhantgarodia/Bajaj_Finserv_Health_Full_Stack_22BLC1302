const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
const bfhlRoutes = require("./routes/bfhl");
app.use("/bfhl", bfhlRoutes);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Bajaj Finserv API is running");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
