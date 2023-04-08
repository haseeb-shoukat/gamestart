const Console = require("../models/console");
const Game = require("../models/game");
const Accessory = require("../models/accessory");
const async = require("async");

// Display list of all Consoles.
exports.index = (req, res, next) => {
  Console.find({})
    .sort({ last_updated: -1 })
    .exec((error, list_consoles) => {
      if (error) {
        return next(error);
      }

      res.render("console_list", {
        list_consoles: list_consoles,
      });
    });
};

// Display detail page for a specific Console.
exports.console_detail = (req, res, next) => {
  async.parallel(
    {
      consoleInfo(callback) {
        Console.findById(req.params.id).exec(callback);
      },
      gameInfo(callback) {
        Game.find({ console: req.params.id }).limit(5).exec(callback);
      },
      accessoryInfo(callback) {
        Accessory.find({ console: req.params.id }).limit(5).exec(callback);
      },
    },
    (error, { consoleInfo, gameInfo, accessoryInfo }) => {
      if (error) {
        return next(error);
      }
      if (!consoleInfo) {
        const err = new Error("Console not found.");
        err.status = 404;
        return next(err);
      }
      res.render("item_detail", {
        itemInfo: consoleInfo,
        gameInfo: gameInfo,
        accessoryInfo: accessoryInfo,
      });
    }
  );
};

// Display Console create form on GET.
exports.console_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Console create GET");
};

// Handle Console create on POST.
exports.console_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Console create POST");
};

// Display Console delete form on GET.
exports.console_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Console delete GET");
};

// Handle Console delete on POST.
exports.console_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Console delete POST");
};

// Display Console update form on GET.
exports.console_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Console update GET");
};

// Handle Console update on POST.
exports.console_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Console update POST");
};
