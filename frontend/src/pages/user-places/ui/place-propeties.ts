export type PlaceProperties = {
  id: string;
  images: string[];
  title: string;
  description: string;
  address: string;
  creator: string;
  location: {
    lat: number;
    lng: number;
  };
};
