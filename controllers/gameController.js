const Game = require("../models/game");

// Display list of all Games.
exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: Game list");
};

// Display detail page for a specific Game.
exports.game_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Game detail: ${req.params.id}`);
};

// Display Game create form on GET.
exports.game_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Game create GET");
};

// Handle Game create on POST.
exports.game_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Game create POST");
};

// Display Game delete form on GET.
exports.game_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Game delete GET");
};

// Handle Game delete on POST.
exports.game_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Game delete POST");
};

// Display Game update form on GET.
exports.game_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Game update GET");
};

// Handle Game update on POST.
exports.game_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Game update POST");
};
