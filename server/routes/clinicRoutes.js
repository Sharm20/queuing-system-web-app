const express = require("express");
const router = express.Router();
const {
  addClinic,
  getClinic,
  updateClinic,
  deleteClinic,
} = require("../controllers/clinicController");

router.route("/").get(getClinic);
router.route("/").post(addClinic);
router.route("/:id").put(updateClinic);
router.route("/:id").delete(deleteClinic);

module.exports = router;
