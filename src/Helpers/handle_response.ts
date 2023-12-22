import { Response } from 'express';

interface ResponseObj {
  status: string;
  message: string;
}

// Reusable function to send error responses
export const sendResponse = (status:string, errorMessage: string) => {
  const response: ResponseObj = {
    status: status,
    message: errorMessage,
  };
  return response
};
