import express, { Request, Response } from "express";
import User from "../Modules/User";
import { validateUserInput } from "../Helpers/user_validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { comparePasswords, generateToken } from "../Helpers/JWT_token";
import { validateUserTokenMiddleware } from "../Middlewere/validateUserToken";
import { error } from "console";
import { sendResponse } from "../Helpers/handle_response";

const route = express.Router();

route.post("/signin", async (req: Request, res: Response) => {
  const { name, password }: { name: string; password: string } = req.body;

  const response = validateUserInput(name, password);
  if (!response.isValid) {
    return res.status(400).send(sendResponse("Error", response.errorMessage));
  }

  const user = await User.findOne({ name });

  if (!user) {
    return res.status(404).send(sendResponse("Error", "User Not found"));
  }

  const isValidPassword = await comparePasswords(password, user.password);

  if (!isValidPassword) {
    return res.status(404).send(sendResponse("Error", "Invalid Password"));
  }

  const token = generateToken(user._id,name);

  res.status(200).send({
    status: "Success",
    message: `Welcome Back ${user.name}`,
    token,
    name: user.name
  });
});

route.post("/signup", async (req: Request, res: Response) => {
  try {
    const { name, password }: { name: string; password: string } = req.body;

    const response = validateUserInput(name, password);

    if (!response.isValid) {
      return res.status(400).send(sendResponse("Error", response.errorMessage));
    }
    const user = await User.findOne({ name });

    if (user) {
      return res.status(404).send(sendResponse("Error", "User Already exist"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      name,
      password: hashedPassword,
    });

    await newuser.save();
    const token = generateToken(newuser._id,newuser.name);

    res.status(200).send({
      status: "Success",
      message: `Welcome ${newuser.name} Your account created Successfully`,
      token,
      name: newuser.name
    });
  } catch (err) {
    console.log(err);
    res
      .status(404)
      .send(sendResponse("Error", "Something went wrong, Please try again"));
  }
});

route.get(
  "/verify",
  validateUserTokenMiddleware,
  async (req: Request, res: Response) => {
    try {
       
      res.status(200).send({
        name: req.user.name,
        message: "Success",
      });
    } catch (err) {
      res.status(400).send(sendResponse("Error", "Something went wrong"));
    }
  }
);

export default route;
