const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: { type: String, required: true },

    last_name: {
      type: String,
      required: true,
    },

    first_name: {
      type: String,
      required: true,
    },

    bio: String,
    phone_number: String,
    email: String,
    is_active: { type: Boolean, required: true },
    clinics: [
      {
        type: mongoose.Schema.Types.ObjectId,
        clinic_code: String,
        ref: "Clinic",
      },
    ],

    weekly_schedule: [
      {
        days: [{ type: Number, required: true }],
        start: { type: Date, required: true },
        end: { type: Date, required: true },
      },
    ],

    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        status: String,
        ref: "Appointment",
      },
    ],
  },
  { timestamps: true }
);

const Doctor = new mongoose.model("Doctos", doctorSchema);

module.exports = Doctor;
