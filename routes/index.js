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
      accessories(callback) {
        Accessory.find({}).populate("console").limit(3).exec(callback);
      },
      consoles(callback) {
        Console.find({}).limit(2).exec(callback);
      },
      games(callback) {
        Game.find({})
          .populate("genre")
          .populate("console")
          .limit(3)
          .exec(callback);
      },
    },
    (err, { games, accessories, consoles }) => {
      if (err) {
        return next(err);
      }
      res.render("index", {
        result: [...accessories, ...games, ...consoles].sort((a, b) => {
          a.last_updated > b.last_updated ? -1 : 1;
        }), // Sort array to get most recent items
      });
    }
  );
});

module.exports = router;
