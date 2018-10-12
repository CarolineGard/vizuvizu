var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//var ProductSchema = new Schema({
let ProductSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

// Export the model
//module.exports = mongoose.model("Product", ProductSchema);
module.exports = mongoose.model("products", ProductSchema);
