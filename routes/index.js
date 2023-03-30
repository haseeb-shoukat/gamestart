var express = require("express");
var router = express.Router();
const async = require("async");
const Accessory = require("../models/accessory");
const Console = require("../models/console");
const Game = require("../models/game");

/* GET home page. Main page of website */
router.get("/", function (req, res, next) {
  async.parallel(
    {
      recent_accessories(callback) {
        Accessory.find({})
          .populate("console")
          .sort({ last_updated: -1 })
          .limit(3)
          .exec(callback);
      },
      recent_consoles(callback) {
        Console.find({}).limit(2).sort({ last_updated: -1 }).exec(callback);
      },
      recent_games(callback) {
        Game.find({})
          .populate("genre")
          .populate("console")
          .sort({ last_updated: -1 })
          .limit(3)
          .exec(callback);
      },
      best_accessories(callback) {
        Accessory.find({}).limit(1).sort({ in_stock: 1 }).exec(callback);
      },
      best_consoles(callback) {
        Console.find({}).limit(2).sort({ in_stock: 1 }).exec(callback);
      },
      best_games(callback) {
        Game.find({}).limit(2).sort({ in_stock: 1 }).exec(callback);
      },
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.render("index", {
        recent_items: [
          ...result.recent_accessories,
          ...result.recent_games,
          ...result.recent_consoles,
        ].sort((a, b) => {
          a.last_updated > b.last_updated ? -1 : 1;
        }), // Sort array to get most recent items
        best_items: [
          ...result.best_accessories,
          ...result.best_games,
          ...result.best_consoles,
        ].sort((a, b) => {
          a.in_stock < b.in_stock ? -1 : 1;
        }), // Sort array to get items with lowest stock units,
      });
    }
  );
});

module.exports = router;
