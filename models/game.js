const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const GameSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  genre: [{ type: Schema.Types.ObjectId, ref: "Genre", required: true }],
  console: { type: Schema.Types.ObjectId, ref: "Console", required: true },
  description: { type: String, maxLength: 2000, required: true },
  company: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true, min: 1, max: 100000000 },
  in_stock: { type: Number, required: true, min: 0, max: 100000000 },
  release_date: { type: Date },
  img: { type: String, maxLength: 400 },
  last_updated: { type: Date, default: Date.now() },
});

// Virtual for game's URL
GameSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/games/${this._id}`;
});

GameSchema.virtual("formatted_release_date").get(function () {
  return this.release_date
    ? DateTime.fromJSDate(this.release_date).toLocaleString(DateTime.DATE_MED)
    : "";
});

// Export model
module.exports = mongoose.model("Game", GameSchema);
