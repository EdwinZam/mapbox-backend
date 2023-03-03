const { Schema, model } = require("mongoose");

const OjectoSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  operatorId: {
    type: Number,
    required: true,
  },
});

module.exports = model("Objecto", ObjectoSchema);
