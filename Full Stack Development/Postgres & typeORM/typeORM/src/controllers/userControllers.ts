import { Request, Response } from "express";
import { AppDataSource } from "..";
import { User } from "../entities/User";

const allUsersHandler = async (req: Request, res: Response) => {
  try {
    const userRepo = AppDataSource.getRepository(User);

    if (!userRepo) {
      throw new Error("Failed to ftech users");
    }

    const allUsers = await userRepo.find();

    res.json({
      Users: allUsers,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

const getUserByIdHandler = async (req: Request, res: Response) => {
  const userId: string = req.params.id as string;
  try {
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.find({ where: { id: userId } });
    return res.status(200).json({
      User: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: (error as Error).message,
    });
  }
};

const updateUserByIdHandler = async (req: Request, res: Response) => {
  const userId: string = req.params.id as string;

  try {
    const userRepo = AppDataSource.getRepository(User);
    const userUpdated = await userRepo.update(userId, { ...req.body });

    if (userUpdated.affected === 0) {
      return res.status(400).json({
        message: `User Not Found...`,
      });
    }

    res.status(200).json({
      message: "User Updated Successfully...",
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

const deleteUserByIdHandler = async (req: Request, res: Response) => {
  const userId: string = req.params.id as string;

  try {
    const userRepo = AppDataSource.getRepository(User);
    const userDeleted = await userRepo.delete(userId);

    if (userDeleted.affected === 0) {
      return res.status(400).json({
        message: `User Not Found...`,
      });
    }

    res.status(200).json({
      message: `User Deleted Successfully....`,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

const createNewUserHandler = async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: "All Fields are required",
    });
  }

  try {
    let newUser: User = new User();
    newUser.email = email;
    newUser.name = name;

    const userRepo = AppDataSource.getRepository(User);
    const userInserted = await userRepo.save(newUser);

    res.status(201).json({
      message: "User Inserted Successfully...",
      insertedUser: userInserted,
    });
  } catch (error) {
    res.status(500).json({
      message: (error as Error).message,
    });
  }
};

export {
  allUsersHandler,
  getUserByIdHandler,
  updateUserByIdHandler,
  deleteUserByIdHandler,
  createNewUserHandler,
};
