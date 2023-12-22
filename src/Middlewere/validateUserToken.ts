import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Modules/User";
import { sendResponse } from "../Helpers/handle_response";

export const validateUserTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json(sendResponse("Error", "Invalid Token Format"));
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json(sendResponse("Error", "Invalid Token"));
  }

  try {
    const decodedToken: {
      userId: string;
      iat: number;
      exp: number;
    } = jwt.verify(token, process.env.SECRET_TOKEN_KEY);

    // Check if the token is expired
    if (Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json(sendResponse("Error", "Token has expired"));
    }

    const user = await User.findOne({ _id: decodedToken.userId });
   
    if (!user) {
      return res.status(401).json(sendResponse("Error", "Invalid Token"));
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json(sendResponse("Error", "Invalid token"));
  }
};
