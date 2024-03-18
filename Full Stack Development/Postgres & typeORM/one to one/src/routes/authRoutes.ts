import {
  userLogInHandler,
  userSignUpHandler,
} from "../controllers/authControllers";

import express from "express";

const router = express.Router();

router.post("/login", userLogInHandler);
router.post("/signup", userSignUpHandler);

export { router };
