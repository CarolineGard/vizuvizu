const express = require("express");
const router = express.Router();

// Require the controllers
const product_controller = require("../controllers/product");

router.get("/test", product_controller.test); // test url to check that all of our files are communicating correctly.

router.get("/", product_controller.product_all);
router.get("/:id", product_controller.product_details);
router.get("/getNumber", product_controller.product_number);
router.post("/create", product_controller.product_create);
router.put("/:id/update", product_controller.product_update);
router.delete("/:id/delete", product_controller.product_delete);

module.exports = router;
