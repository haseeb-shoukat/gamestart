const express = require("express");
const router = express.Router();

// Require controller modules.
const console_controller = require("../controllers/consoleController");

/// CONSOLE ROUTES ///

// GET Console home page.
router.get("/", console_controller.index);

// GET request for creating a Console. NOTE This must come before routes that display Console (uses id).
router.get("/create", console_controller.console_create_get);

// POST request for creating Console.
router.post("/create", console_controller.console_create_post);

// GET request to delete Console.
router.get("/:id/delete", console_controller.console_delete_get);

// POST request to delete Console.
router.post("/:id/delete", console_controller.console_delete_post);

// GET request to update Console.
router.get("/:id/update", console_controller.console_update_get);

// POST request to update Console.
router.post("/:id/update", console_controller.console_update_post);

// GET request for one Console.
router.get("/:id", console_controller.console_detail);

module.exports = router;
