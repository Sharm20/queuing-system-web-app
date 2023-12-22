const mongoose = require("mongoose");

const clinicSchema = mongoose.Schema({
  clinic_id: {
    type: String,
    required: true,
  },
  clinic_code: {
    type: String,
    required: true,
  },
  doctors: {
    type: Array,
    required: true,
  },

  floor: {
    type: String,
    required: true,
  },
});

const Clinics = new mongoose.model("Clinic", clinicSchema);

module.export = Clinics;
