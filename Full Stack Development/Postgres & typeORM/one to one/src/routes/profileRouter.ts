import express from "express";
import {
  createProfileHandler,
  getProfileByIdHandler,
  updateProfileHandler,
} from "../controllers/profileControllers";

const router = express.Router();

router.post("/:userId", createProfileHandler);

router.get("/:id", getProfileByIdHandler);

router.patch("/:id", updateProfileHandler);

export { router };
