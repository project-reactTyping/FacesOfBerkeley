const router = require("express").Router();
const userRoutes = require("./user");

// Book routes
router.use("/books", userRoutes);

module.exports = router;
