import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { STATUS_CODE } from "../constants/status-code.constant";
import { Event } from "../entities/events.entity";
import { CustomError } from "../helpers/custom-error";
import { ERROR_MESSAGES } from "../constants";
import { eventValidation } from "../validation";

const {
  SUCCESS_STATUS_CODE,
  CREATED_STATUS_CODE,
  BAD_REQUEST_STATUS_CODE,
  NOT_FOUND_STATUS_CODE,
  INTERNAL_SERVER_ERROR_STATUS_CODE,
  UNAUTHORIZED_STATUS_CODE,
} = STATUS_CODE;

const { _NotFound, _Unauthorized } = ERROR_MESSAGES;

const getAllEventsHandler = async (req: Request, res: Response) => {
  try {
    const eventRepo = AppDataSource.getRepository(Event);
    const events = await eventRepo.find();

    res.status(200).json({
      Events: events,
    });
  } catch (err: any) {
    res.status(err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE).json({
      message: err.message,
    });
  }
};

const getEventByIdHandler = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;

  try {
    const eventRepo = AppDataSource.getRepository(Event);
    const event = await eventRepo.findOne({ where: { id: eventId } });
    if (!event) {
      throw new CustomError(_NotFound("Event"), NOT_FOUND_STATUS_CODE);
    }

    res.status(SUCCESS_STATUS_CODE).json({
      Event: event,
    });
  } catch (err: any) {
    res.status(err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE).json({
      message: err.message,
    });
  }
};

const updateEventByIdHandler = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;
  const { id: userId } = req.body.user;
  const { imageUrl, date, title, description } = req.body;

  try {
    const eventRepo = AppDataSource.getRepository(Event);
    let event = await eventRepo.findOne({ where: { id: eventId } });

    if (!event) {
      return res.status(404).send("Profile not found");
    }

    if (event.auth.id !== userId) {
      throw new CustomError(
        _Unauthorized("update the event"),
        UNAUTHORIZED_STATUS_CODE
      );
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.imageUrl = imageUrl || event.imageUrl;
    event.date = date || event.date;

    await eventRepo.save(event);

    res.status(SUCCESS_STATUS_CODE).json({
      message: "Event Updated Successfully...",
    });
  } catch (err: any) {
    res.status(err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE).json({
      message: err.message,
    });
  }
};

const deleteEventByIdHandler = async (req: Request, res: Response) => {
  const { id: eventId } = req.params;
  const { id: userId } = req.body.user;

  try {
    const eventRepo = AppDataSource.getRepository(Event);
    const event = await eventRepo.findOne({ where: { id: eventId } });

    if (!event) {
      throw new CustomError(_NotFound("Event"), NOT_FOUND_STATUS_CODE);
    }

    if (event.auth.id !== userId) {
      throw new CustomError(
        _Unauthorized("delete the event"),
        UNAUTHORIZED_STATUS_CODE
      );
    }

    await eventRepo.delete(event);

    res.status(CREATED_STATUS_CODE).json({
      message: "Event Deleted Successfully...",
    });
  } catch (err: any) {
    res.status(err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE).json({
      message: err.message,
    });
  }
};

const createNewEventHandler = async (req: Request, res: Response) => {
  const { imageUrl, date, title, description } = req.body;
  const { id: userId } = req.body.user;

  try {
    if (!userId) {
      throw new Error("User not found");
    }

    const isValidate = eventValidation.validate(req.body);

    if (isValidate.error) {
      throw new CustomError(isValidate.error.message, BAD_REQUEST_STATUS_CODE);
    }

    const eventRepo = AppDataSource.getRepository(Event);
    let newEvent: Event = new Event();

    newEvent.title = title;
    newEvent.description = description;
    newEvent.imageUrl = imageUrl;
    newEvent.date = date;
    newEvent.auth = userId;

    await eventRepo.save(newEvent);

    res.status(SUCCESS_STATUS_CODE).json({
      message: "New event was created...",
    });
  } catch (err: any) {
    res.status(err.statusCode || INTERNAL_SERVER_ERROR_STATUS_CODE).json({
      message: err.message,
    });
  }
};

export {
  getAllEventsHandler,
  getEventByIdHandler,
  updateEventByIdHandler,
  deleteEventByIdHandler,
  createNewEventHandler,
};
