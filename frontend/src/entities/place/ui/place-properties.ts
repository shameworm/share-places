import { ReactNode } from "react";

export type PlaceProperties = {
  id: string;
  images: string[];
  title: string;
  description: string;
  address: string;
  creator: string;
  viewMapBtn?: ReactNode;
  deleteBtn?: ReactNode;
  editBtn?: ReactNode;
};
