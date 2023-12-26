const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Doctor",
    },

    schedule: {
      day: String,
      start: Date,
      end: Date,
    },

    duration: String,
    patient_name: String,
    booking_method: String,
    status: String,
  },
  { timestamps: true }
);

const appointmentModel = new mongoose.model("Appontment", appointmentSchema);

module.exports = appointmentModel;
