const express = require("express");
const router = express.Router();

// Require controller modules.
const game_controller = require("../controllers/gameController");

/// GAME ROUTES ///

// GET Game home page.
router.get("/", game_controller.index);

// GET request for creating a Game. NOTE This must come before routes that display Game (uses id).
router.get("/create", game_controller.game_create_get);

// POST request for creating Game.
router.post("/create", game_controller.game_create_post);

// GET request to delete Game.
router.get("/:id/delete", game_controller.game_delete_get);

// POST request to delete Game.
router.post("/:id/delete", game_controller.game_delete_post);

// GET request to update Game.
router.get("/:id/update", game_controller.game_update_get);

// POST request to update Game.
router.post("/:id/update", game_controller.game_update_post);

// GET request for one Game.
router.get("/:id", game_controller.game_detail);

module.exports = router;
