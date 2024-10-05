import { v4 as uuid } from "uuid";
import { validationResult } from "express-validator";

import { HttpError } from "../models/http-error";
import { getCoordsForAddress } from "../util/location";

import { Request, Response, NextFunction } from "express";
import { Place } from "../models/place.model";

let DUMMY_PLACES: Place[] = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    location: {
      lat: 40.748_447_4,
      lng: -73.987_151_6,
    },
    address: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

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

  const createdPlace: Place = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createdPlace);

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
    title: title || DUMMY_PLACES[placeIndex]!.title,
    description: description || DUMMY_PLACES[placeIndex]!.description,
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
