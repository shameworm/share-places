import express from "express";
import { check } from "express-validator";

import { getUsers, login, signup } from "../controllers/users-controller";
import upload from "../middleware/file-upload";

export const router = express.Router();

router.get("/", getUsers);

router.post(
  "/signup",
  upload.single("image"),
  [
    check("name")
      .not()
      .isEmpty()
      .matches(/^[A-Z][a-z]+\s[A-Z][a-z]+$/),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("confirmPassword")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match."),
  ],
  signup,
);

router.post("/login", login);
