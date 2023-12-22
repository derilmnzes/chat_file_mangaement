import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateToken = (userId: string,name:string): string => {
    const token = jwt.sign({ userId,name }, process.env.SECRET_TOKEN_KEY, {
      expiresIn: "1h",
    });
    return token;
  };




export const comparePasswords = async (enteredPassword: string, hashedPassword: string): Promise<boolean> => {
  try {
    const isValidPassword = await bcrypt.compare(enteredPassword, hashedPassword);
    return isValidPassword;
  } catch (error) {

    throw false; // You may want to handle or log the error appropriately based on your application's needs.
  }
};

