import { ReactNode } from "react";

export type PlaceProperties = {
  id: string;
  image: string;
  title: string;
  description: string;
  address: string;
  creator: string;
  viewMapBtn?: ReactNode;
  deleteBtn?: ReactNode;
  editBtn?: ReactNode;
};
