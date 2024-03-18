import {
  allUsersHandler,
  createNewUserHandler,
  deleteUserByIdHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
} from "../controllers/userControllers";

const express = require("express");

const router = express.Router();

router.route("/").get(allUsersHandler).post(createNewUserHandler);

router
  .route("/:id")
  .get(getUserByIdHandler)
  .patch(updateUserByIdHandler)
  .delete(deleteUserByIdHandler);

export { router };
