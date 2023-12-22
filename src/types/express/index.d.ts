
import { User } from "../custom";
import { Multer } from "multer";

export {};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
      file: Multer.File; // Assuming you are using Multer for file uploads
    }
  }
}