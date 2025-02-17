import { ReactNode } from "react";

export type PlaceProperties = {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creatorId: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  viewMapBtn?: ReactNode;
};
