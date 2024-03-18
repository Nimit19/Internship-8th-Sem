import * as jwt from "jsonwebtoken";
import { Auth } from "../entities";

const { JWT_SECRET_KEY } = process.env;

export const generateJwtToken = (payload: Auth) => {
  return jwt.sign({ id: payload.id }, JWT_SECRET_KEY!, { expiresIn: "1d" });
};
