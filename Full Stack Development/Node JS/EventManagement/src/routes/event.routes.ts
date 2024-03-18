import express from "express";
import {
  createNewEventHandler,
  deleteEventByIdHandler,
  getAllEventsHandler,
  getEventByIdHandler,
  updateEventByIdHandler,
} from "../controllers";

import { authentication } from "../middlewares";

const router = express.Router();

// router.get("/", getAllEventsHandler);
// router.post("/", authentication, createNewEventHandler);

// router.route("/:id").get(getEventByIdHandler);
// router
//   .route("/:id", authentication)
//   .patch(updateEventByIdHandler)
//   .delete(deleteEventByIdHandler);

router.get("/", getAllEventsHandler);
router.get("/:id", getEventByIdHandler);

router.post("/", authentication, createNewEventHandler);
router.patch("/:id", authentication, updateEventByIdHandler);
router.delete("/:id", authentication, deleteEventByIdHandler);

export { router as eventRoute };
