import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Auth } from "../entities/Auth";
import { Profile } from "../entities/Profile";

export const createProfileHandler = async (req: Request, res: Response) => {
  const { userId } = req.params;

  console.log(userId, "userId");
  try {
    const authRepo = AppDataSource.getRepository(Auth);
    const profileRepo = AppDataSource.getRepository(Profile);

    const authUser = await authRepo.findOne({
      where: { id: userId },
      //   relations: { profile: true }, // not required if i add eager: true
    });
    if (!authUser) {
      return res.status(404).send("Authentication user not found");
    }

    const { fullName, imageUrl, phoneNumber, address } = req.body;

    const newProfile = new Profile();
    newProfile.fullName = fullName;
    newProfile.imageUrl = imageUrl;
    newProfile.phoneNumber = phoneNumber;
    newProfile.address = address;
    const insertedProfile = await profileRepo.save(newProfile);

    authUser.profile = insertedProfile;
    await authRepo.save(authUser);

    res.status(200).send({
      message: "Profile created successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: (err as Error).message,
    });
  }
};

export const getProfileByIdHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const profileRepo = AppDataSource.getRepository(Profile);
    const profile = await profileRepo.findOne({ where: { id } });

    if (!profile) {
      return res.status(404).send("Profile not found");
    }

    res.status(200).send({
      profile,
    });
  } catch (err) {
    res.status(500).send({
      message: (err as Error).message,
    });
  }
};

export const updateProfileHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fullName, imageUrl, phoneNumber, address } = req.body;

  try {
    const profileRepo = AppDataSource.getRepository(Profile);
    let profile = await profileRepo.findOne({ where: { id } });

    if (!profile) {
      return res.status(404).send("Profile not found");
    }

    profile.fullName = fullName || profile.fullName;
    profile.imageUrl = imageUrl || profile.imageUrl;
    profile.phoneNumber = phoneNumber || profile.phoneNumber;
    profile.address = address || profile.address;

    await profileRepo.save(profile);

    res.status(200).send({
      message: "Profile updated successfully",
      profile,
    });
  } catch (err) {
    res.status(500).send({
      message: (err as Error).message,
    });
  }
};
