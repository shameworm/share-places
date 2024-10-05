import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";

import { HttpError } from "../models/http-error";
import { getCoordsForAddress } from "../util/location";

import { Request, Response, NextFunction } from "express";
import Place from "../models/place.model";

export const getPlaceById = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError("Could not find a place for the provided id.", 404);
  }

  res.json({ place });
};

export const getPlacesByUserId = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const userId = req.params.uid;

  const places = DUMMY_PLACES.filter((p) => {
    return p.creator === userId;
  });

  if (!places || places.length === 0) {
    return next(
      new HttpError("Could not find places for the provided user id.", 404),
    );
  }

  res.json({ places });
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
      location: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    },
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/800px-Empire_State_Building_%28aerial_view%29.jpg",
    creator,
  });

  try {
    await createdPlace.save();
  } catch (err) {
    const error = new HttpError("Creating place failed, please try again", 500);
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

export const updatePlace = (
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

  const placeIndex = DUMMY_PLACES.findIndex((p) => p.id === placeId);
  if (placeIndex === -1) {
    return next(
      new HttpError("Could not find a place for the provided id.", 404),
    );
  }

  const updatedPlace: Place = {
    ...DUMMY_PLACES[placeIndex],
    title: title || DUMMY_PLACES![placeIndex!].title,
    description: description || DUMMY_PLACES[placeIndex].description,
  };

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

export const deletePlace = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const placeId = req.params["pid"];
  if (!DUMMY_PLACES.find((p) => p.id === placeId)) {
    throw new HttpError("Could not find a place for that id.", 404);
  }
  DUMMY_PLACES = DUMMY_PLACES.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Deleted place." });
};
