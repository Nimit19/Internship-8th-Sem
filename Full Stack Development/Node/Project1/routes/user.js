const express = require("express");
const {
  allUsersHandler,
  createNewUserHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
  deleteUserByIdHandler,
} = require("../controllers/user");

const router = express.Router();

router.route("/").get(allUsersHandler).post(createNewUserHandler);

router
  .route("/:id")
  .get(getUserByIdHandler)
  .patch(updateUserByIdHandler)
  .delete(deleteUserByIdHandler);

module.exports = router;
