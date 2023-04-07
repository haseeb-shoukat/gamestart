const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  img: { type: String, maxLength: 400 },
  last_updated: { type: Date, default: Date.now() },
});

// Virtual for game's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/genres/${this._id}`;
});

GenreSchema.virtual("formatted_price").get(function () {
  return Number.parseFloat(this.price).toFixed(2);
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);
