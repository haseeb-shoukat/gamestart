const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const ConsoleSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  company: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true, min: 1, max: 100000000 },
  release_date: { type: Date },
});

// Virtual for console's URL
ConsoleSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/consoles/${this._id}`;
});

ConsoleSchema.virtual("release_date").get(function () {
  return this.release_date
    ? DateTime.fromJSDate(this.release_date).toLocaleString(DateTime.DATE_MED)
    : "";
});

// Export model
module.exports = mongoose.model("Console", ConsoleSchema);
