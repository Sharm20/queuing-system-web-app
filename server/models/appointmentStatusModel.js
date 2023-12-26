const mongoose = require("mongoose");

const appointmentStatus = mongoose.Schema(
  {
    appointment_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Appointment",
    },

    status: { type: String, required: true },
    old_date: Date,
    new_date: Date,
    requested_by: String,
    approved_by: String,
  },
  { timestamps: true }
);

const appointmentStatusModel = new mongoose.model(
  "AppointmentStatus",
  appointmentStatus
);

module.exports = appointmentStatusModel;
