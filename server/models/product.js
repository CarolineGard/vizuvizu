const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  //title: { type: String, required: true },
  //body: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  //data: { type: Number, required: true },
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
