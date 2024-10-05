import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { router as placesRoutes } from "./routes/places-routes";
import { router as usersRoutes } from "./routes/users-routes";

import { HttpError } from "./models/http-error";

const MONGODB_ACCESS_STR = process.env["MONGODB"];

if (!MONGODB_ACCESS_STR) {
  console.error("Error: MONGODB_ACCESS_STR is not defined.");
  process.exit(1);
}

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(MONGODB_ACCESS_STR)
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
