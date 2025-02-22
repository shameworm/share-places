import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { HttpError } from "../models/http-error";

interface CustomRequest extends Request {
  userData?: { userId: string };
}

const checkAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Authentication failed!");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY!);

    if (typeof decodedToken === "object" && "userId" in decodedToken) {
      req.userData = {
        userId: (decodedToken as jwt.JwtPayload).userId as string,
      };
    } else {
      throw new Error("Authentication failed!");
    }

    return next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 401);
    return next(error);
  }
};

export default checkAuth;
