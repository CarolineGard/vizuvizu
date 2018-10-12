var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var product = require("./routes/product"); // Imports routes for the products
var app = express();

// Set up mongoose connection
var mongoose = require("mongoose");
var dev_db_url = "mongodb://vizuvizu:abc123@ds119993.mlab.com:19993/vizuvizu";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", product);

const port = process.env.PORT || 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
