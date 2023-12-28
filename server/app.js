const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const auth = require("./middlewares/auth");
const app = express();
const port = process.env.PORT || 8080;

// middlewares
app.use(express.json());
app.use(errorHandler);
app.use(morgan("tiny"));
app.use(require("cors")());
// connectDB();

// app.get("/login", (req, res) => {
//   res.send("this is log in");
// });
// routes
app.get("/protected", auth, (req, res) => {
  return res.status(200).json({ user: req.user }); // or it could be ({...req.use._doc})
});
app.use("/clinics", require("./routes/clinicRoutes"));
// app.use("/doctors", require("./routes/doctorRoutes"));
app.use("/", require("./routes/user"));

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on ${port} \n`);
});
