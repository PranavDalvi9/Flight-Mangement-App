const { time } = require("console");
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    airlines: { type: String, required: true },
    from: {
      type: String,
      required: "true",
    },

    to: {
      type: String,
      required: "true",
    },

    cost: { type: Number, required: true },
    FromTime: { type: String, required: true },
    ToTime: { type: String, required: true },
    pnr: {
      type: Number,
      required: true,
    //   unique: true,
    //   minlength: 8,
    //   maxlength: 10,
    },
    capacity: { type: Number, required: true },
    // airportId: {
    // //   type: mongoose.Schema.Types.ObjectId,
    // //   ref: "airport",
    // //   required: true,

    // type: String, required: true 
    // },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("flight", flightSchema);


// {
//   "airlines": "",
//   "from": "",
//   "to": "",
//   "cost" : "",
//    "FromTime" : "",
//    "ToTime" : "",
//    "pnr" :"",
//    "capacity": ""
// }