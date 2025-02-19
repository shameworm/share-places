import { validationResult } from "express-validator";

import { HttpError } from "../models/http-error";
import { getCoordsForAddress } from "../util/location";

import { Request, Response, NextFunction } from "express";
import { Place } from "../models/place.model";
import { User } from "../models/user.model";
import mongoose from "mongoose";

export const getPlaceById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place.",
      500,
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      "Could not find place for the provided id.",
      404,
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};

export const getPlacesByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.params.uid;

  let userWithPlaces;
  try {
    userWithPlaces = await User.findById(userId).populate("places");
  } catch (err) {
    const error = new HttpError(
      "Fetching places failed, please try again later.",
      500,
    );
    return next(error);
  }

  if (!userWithPlaces || userWithPlaces.places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404),
    );
  }

  res.json({ places: userWithPlaces.places.map((place) => place.toJSON()) });
};

export const createPlace = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422),
    );
  }

  const { title, description, address, creator } = req.body;

  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  const createdPlace = new Place({
    title,
    description,
    address,
    location: {
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
    image: "",
    creator,
  });

  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Creating place failed, please try again, could not find user",
      500,
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Could not find user for provided id", 404);
    return next(error);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await createdPlace.save({ session });
    user.places.push(createdPlace._id);
    await user.save({ session });

    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("Creating place failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

export const updatePlace = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422),
    );
  }

  const { title, description } = req.body;
  const placeId = req.params["pid"];
  let place;

  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not find a place",
      500,
    );
    return next(error);
  }

  if (place) {
    place.title = title;
    place.description = description;
  }

  try {
    await place?.save();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not update place",
      500,
    );
    return next(error);
  }

  res.json({ place: place!.toObject({ getters: true }) });
};

export const deletePlace = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId).populate("creator");
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not delete place.", 500),
    );
  }

  if (!place) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404),
    );
  }

  if (!place.creator || !(place.creator instanceof User)) {
    return next(new HttpError("Creator not found", 404));
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();

    await place.deleteOne({ session });

    await User.updateOne(
      { _id: place.creator._id },
      { $pull: { places: placeId } },
      { session },
    );

    await session.commitTransaction();
    session.endSession();
  } catch (err) {
    return next(
      new HttpError("Something went wrong, could not delete place.", 500),
    );
  }

  res.status(200).json({ message: "Deleted place." });
};
