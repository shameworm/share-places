import express from "express";
import { check } from "express-validator";

import { getUsers, login, signup } from "../controllers/users-controller";

export const router = express.Router();

router.get("/", getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
    check("confirmPassword")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match."),
  ],
  signup,
);

router.post("/login", login);
