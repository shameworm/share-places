export interface Place {
  id: string
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
  };
  address: string;
  creator: string;
}
