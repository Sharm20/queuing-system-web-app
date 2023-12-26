const mongoose = require("mongoose");

const clinicSchema = new mongoose.Schema(
  {
    clinic_code: {
      type: String,
      required: true,
    },
    floor_number: {
      type: Number,
      required: true,
    },
    doctors: [
      {
        doctor_code: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor",
        },
      },
    ],

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Clinics = new mongoose.model("Clinic", clinicSchema);

module.exports = Clinics;
