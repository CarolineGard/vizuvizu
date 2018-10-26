const Product = require("../models/product");

//Simple version, without validation or sanitation

exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

// Creates a new object using the data coming from a POST request and saves it to a database
exports.product_create = function(req, res) {
  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    //name: req.body.name,
    //description: req.body.description,
    //data: req.body.data,
  });

  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product Created successfully");
  });
};

// Reads an existing object from the object id being sent in the request
exports.product_details = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

// Updating an existing object by the object id to set new values
exports.product_update = function(req, res) {
  // Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
  Product.findByIdAndUpdate(req.params.id, { $set: req.name }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Chart updated.");
  });
};

// Delete object by object id
exports.product_delete = function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
