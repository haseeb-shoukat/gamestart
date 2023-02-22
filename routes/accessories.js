const express = require("express");
const router = express.Router();

// Require controller modules.
const accessory_controller = require("../controllers/accessoryController");

/// ACCESSORY ROUTES ///

// GET Accessory home page.
router.get("/", accessory_controller.index);

// GET request for creating a Accessory. NOTE This must come before routes that display Accessory (uses id).
router.get("/create", accessory_controller.accessory_create_get);

// POST request for creating Accessory.
router.post("/create", accessory_controller.accessory_create_post);

// GET request to delete Accessory.
router.get("/:id/delete", accessory_controller.accessory_delete_get);

// POST request to delete Accessory.
router.post("/:id/delete", accessory_controller.accessory_delete_post);

// GET request to update Accessory.
router.get("/:id/update", accessory_controller.accessory_update_get);

// POST request to update Accessory.
router.post("/:id/update", accessory_controller.accessory_update_post);

// GET request for one Accessory.
router.get("/:id", accessory_controller.accessory_detail);

module.exports = router;
