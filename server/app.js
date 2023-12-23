const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const auth = require("./middlewares/auth");
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan("tiny"));

// middlewares
app.use(express.json());
app.use(errorHandler);
// app.use(require("cors")());
// connectDB();

// routes
app.get("/protected", auth, (req, res) => {
  return res.status(200).json({ user: req.user }); // or it could be ({...req.use._doc})
});
app.use("/clinics", require("./routes/clinicRoutes"));
// app.use("/user", require("./routes/user"));
app.use("/", require("./routes/user"));

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on ${port} \n`);
});
