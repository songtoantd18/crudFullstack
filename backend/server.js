// backend/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 5000;

// Kết nối MongoDB
mongoose
  .connect("mongodb://localhost:27017/crudFullstack11", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB is connected!");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
