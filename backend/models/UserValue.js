// models/UserValue.js

const mongoose = require("mongoose");

/**
 * UserValue schema cho MongoDB
 */
const userValueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("UserValue", userValueSchema);
