var express = require("express");
var router = express.Router();
const Accessory = require("../models/accessory");
const Console = require("../models/console");
const Game = require("../models/game");

/* GET home page. */
router.get("/", function (req, res, next) {
  async.parallel(
    {
      accessories(callback) {
        Accessory.find().populate("console").limit(3).exec(callback);
      },
      consoles(callback) {
        Console.find().limit(3).exec(callback);
      },
      games(callback) {
        Game.find()
          .populate("genre")
          .populate("console")
          .limit(3)
          .exec(callback);
      },
    },
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.render("index", {
        recent_accessories: result.accessories,
        recent_games: result.games,
        recent_consoles: result.consoles,
      });
    }
  );
});

module.exports = router;
