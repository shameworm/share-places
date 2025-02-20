import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

import { router as placesRoutes } from "./routes/places-routes";
import { router as usersRoutes } from "./routes/users-routes";

import { HttpError } from "./models/http-error";

const MONGODB_ACCESS_STR = process.env["MONGODB_ACCESS_STR"];

if (!MONGODB_ACCESS_STR) {
  console.error("Error: MONGODB_ACCESS_STR is not defined.");
  process.exit(1);
}

const app = express();

app.use(bodyParser.json());

app.use("/api/uploads", express.static(path.resolve("uploads")));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization",
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (req.file) {
    fs.unlink(req.file.path, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.log("Error deleting file:", err);
      }
    });
  }

  if (res.headersSent) {
    return next(error);
  }

  const statusCode =
    error.code && error.code >= 100 && error.code < 600 ? error.code : 500;

  res
    .status(statusCode)
    .json({ message: error.message || "An unknown error occurred!" });
});

mongoose
  .connect(MONGODB_ACCESS_STR, {
    dbName: "share-places",
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => {
    console.log(error);
  });
