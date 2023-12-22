const router = require("express").Router();
const { login, register, logout } = require("../controllers/userController");

router.route("/login").post(login);

router.route("/register").post(register);
router.route("/logout").get(logout);

module.exports = router;
