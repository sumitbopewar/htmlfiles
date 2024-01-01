const express = require("express");
const data = require("./data");
// const form = require('./form.html');

const app = express();
const PORT = 4000; // Choose your desired port number
const cors = require("cors"); // Import the cors module

// Use the cors middleware
app.use(cors());

// Endpoint to fetch users data
app.get("/users", (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
