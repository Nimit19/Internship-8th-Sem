import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { AppDataSource } from "../data-source";
import { Auth } from "../entities/Auth";

const userSignUpHandler = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "All Fields are required" });

  const authRepo = AppDataSource.getRepository(Auth);

  const foundUser = await authRepo.find({ where: { email: email } });

  if (foundUser.length > 0) {
    return res.status(409).json({ message: "Email already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser: Auth = new Auth();
    newUser.email = email;
    newUser.password = hashedPassword;
    // newUser.role = role || "user";
    await authRepo.save(newUser);

    res.status(200).send({
      message: "You are successfully signed up...",
    });
  } catch (err) {
    res.status(500).send({
      message: (err as Error).message,
    });
  }
};

const userLogInHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const authRepo = AppDataSource.getRepository(Auth);
  const foundUser = await authRepo.findOne({ where: { email: email } });

  if (!foundUser) {
    return res.status(401).send("Invalid credentials!");
  }

  const isSame = await bcrypt.compare(password, foundUser.password);

  if (isSame) {
    res.status(200).send({
      message: "You are Successfully logged in...",
    });
  } else {
    res.status(401).send({
      message: "Invalid Credentials!",
    });
  }
};

export { userLogInHandler, userSignUpHandler };
