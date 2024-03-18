import {
  userLogInHandler,
  userSignUpHandler,
} from "../controllers/auth.controller";

import express from "express";

const router = express.Router();

router.post("/login", userLogInHandler);
router.post("/signup", userSignUpHandler);

export { router as authRoute };
