const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const axios = require("axios");



// Matches with "/API/user"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

//  Matches with "/API/user/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router.route('/find');

module.exports = router;
