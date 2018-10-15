const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
