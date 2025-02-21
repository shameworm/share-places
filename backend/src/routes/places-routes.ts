import express from "express";
import { check } from "express-validator";

import {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} from "../controllers/places-controller";
import upload from "../middleware/file-upload";

export const router = express.Router();

router.get("/:pid", getPlaceById);

router.get("/user/:uid", getPlacesByUserId);

router.post(
  "/",
  upload.array("image", 5),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace,
);

router.patch(
  "/:pid",
  upload.array("image", 5),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").isLength({ min: 5 }),
  ],
  updatePlace,
);

router.delete("/:pid", deletePlace);
