import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

import { HttpError } from "../models/http-error";
import { User } from "../models/user.model";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError("Could get users. Try again later.", 500);
    return next(error);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please check your data.",
      422,
    );
    return next(error);
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Singup failded. Try again later", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "The user already exists, please login instead.",
      422,
    );
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500,
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    image: req.file ? req.file.path : null,
    password: hashedPassword,
  });

  try {
    await createdUser?.save();
  } catch (err) {
    const error = new HttpError("Something went wrong, signup failed.", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("Logging in failded. Try again later", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      422,
    );
    return next(error);
  }

  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check you credentials and try again.",
      500,
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, could not log you in.",
      422,
    );
    return next(error);
  }

  let token;

  try {
    token = jwt.sign(
      { userId: existingUser.id },
      process.env.JWT_PRIVATE_KEY!,
      {
        expiresIn: "1h",
      },
    );
  } catch (err) {
    const error = new HttpError(
      "Could not log you in, please check you credentials and try again.",
      500,
    );
    return next(error);
  }

  res.json({
    token,
    userId: existingUser.id,
    name: existingUser.name,
  });
};
