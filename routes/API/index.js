const router = require("express").Router();
const userRoutes = require("./user");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
