const Accessory = require("../models/accessory");
const Console = require("../models/console");
const async = require("async");

// Display list of all Accessories.
exports.index = (req, res, next) => {
  async.parallel(
    {
      accessories(callback) {
        Accessory.find({})
          .populate("console")
          .sort({ last_updated: -1 })
          .exec(callback);
      },
      consoles(callback) {
        Console.find({}).sort({ name: 1 }).exec(callback);
      },
    },
    (error, { accessories, consoles }) => {
      if (error) {
        return next(error);
      }

      res.render("accessory_list", {
        list_accessories: accessories,
        list_consoles: consoles,
      });
    }
  );
};

// Display detail page for a specific Accessory.
exports.accessory_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Accessory detail: ${req.params.id}`);
};

// Display Accessory create form on GET.
exports.accessory_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory create GET");
};

// Handle Accessory create on POST.
exports.accessory_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory create POST");
};

// Display Accessory delete form on GET.
exports.accessory_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory delete GET");
};

// Handle Accessory delete on POST.
exports.accessory_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory delete POST");
};

// Display Accessory update form on GET.
exports.accessory_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory update GET");
};

// Handle Accessory update on POST.
exports.accessory_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Accessory update POST");
};
