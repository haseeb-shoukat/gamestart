const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const AccessorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  console: { type: Schema.Types.ObjectId, ref: "Console", required: true },
  description: { type: String, maxLength: 2000, required: true },
  company: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true, min: 1, max: 100000000 },
  in_stock: { type: Number, required: true, min: 0, max: 100000000 },
  release_date: { type: Date },
});

// Virtual for game's URL
AccessorySchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/accessories/${this._id}`;
});

AccessorySchema.virtual("formatted_release_date").get(function () {
  return this.release_date
    ? DateTime.fromJSDate(this.release_date).toLocaleString(DateTime.DATE_MED)
    : "";
});

// Export model
module.exports = mongoose.model("Accessory", AccessorySchema);
