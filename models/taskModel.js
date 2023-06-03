const mongoose = require("mongoose");

const taskSachema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true,"kind of work should be provided"],
      maxlength:[20,'can not more then 20 character'],
      trim:true,
    },
    completed: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task",taskSachema)