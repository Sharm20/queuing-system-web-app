// Create

const addClinic = (req, res) => {
  console.log("The request body is", req.body);
  const { clinic_id, clinic_code, doctors, floor } = req.body;
  if (!clinic_id || !clinic_code || !doctors || !floor) {
    res.status(400);
    throw new Error("clinics should have complete info");
  }
  res.status(200).json({
    message: "Create clinic",
  });
};

// Read
const getClinic = (req, res) => {
  const { clinic_code } = req.body;
  res.status(200).json({
    message: "Get clinic",
  });
};

// Update

const updateClinic = (req, res) => {
  res.status(200).json({
    message: "Update clinic",
  });
};

// Delete

const deleteClinic = (req, res) => {
  res.status(200).json({
    message: "Delete clinic",
  });
};

module.exports = {
  addClinic,
  getClinic,
  updateClinic,
  deleteClinic,
};
