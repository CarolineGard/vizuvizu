const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  //title: { type: String, required: true },
  //body: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  chartType: { type: String, required: true },

  data: [
    {
      _id: false,
      x: { type: Number, required: true },
      y: { type: Number, required: true },
      size: { type: Number },
      opacity: { type: Number },
    },
  ],
});

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
