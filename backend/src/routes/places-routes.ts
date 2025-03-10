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
import checkAuth from "../middleware/check-auth";

export const router = express.Router();

router.get("/:pid", getPlaceById);

router.get("/user/:uid", getPlacesByUserId);

router.use(checkAuth);

router.post(
  "/",
  upload.array("images[]", 5),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace,
);

router.patch(
  "/:pid",
  upload.array("images[]", 5),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").isLength({ min: 5 }),
  ],
  updatePlace,
);

router.delete("/:pid", deletePlace);
