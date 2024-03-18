import Joi from "joi";

export const eventValidation = Joi.object({
  imageUrl: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .required()
    .messages({
      "string.uri": "Image URL must be a valid HTTP or HTTPS URL",
      "any.required": "Image URL is required",
    }),
  date: Joi.string().required().messages({
    "any.required": "Date is required",
  }),
  title: Joi.string().required().messages({
    "any.required": "Title is required",
  }),
  description: Joi.string().required().messages({
    "any.required": "Description is required",
  }),
  user: Joi.object().required().messages({
    "any.required": "user is required",
  }),
});
