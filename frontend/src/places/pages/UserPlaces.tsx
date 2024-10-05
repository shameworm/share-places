import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '350 5th Ave, New York, NY 10001',
    creatorId: 'uid1',
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the most famous skyscrapers in the world.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '350 5th Ave, New York, NY 10001',
    creatorId: 'uid2',
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: 'p5',
    title: 'Central Park',
    description: 'An iconic urban park in New York City.',
    image:
      'https://th.bing.com/th/id/OIP.ER5YTSx6wgQLzzt36BZCaAHaFb?w=250&h=184&c=7&r=0&o=5&pid=1.7',
    address: 'New York, NY 10024',
    creatorId: 'uid4',
    coordinates: {
      lat: 40.785091,
      lng: -73.968285,
    },
  },
  {
    id: 'p6',
    title: 'The Metropolitan Museum of Art',
    description: 'The largest art museum in the United States.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1920px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg',
    address: '1000 5th Ave, New York, NY 10028',
    creatorId: 'uid3',
    coordinates: {
      lat: 40.779437,
      lng: -73.963244,
    },
  },
  {
    id: 'p7',
    title: 'Times Square',
    description: 'A major commercial and entertainment hub.',
    image:
      'https://th.bing.com/th/id/OIP.OQzauY9OT27Y8yeEIhFZcgHaE9?w=284&h=190&c=7&r=0&o=5&pid=1.7',
    address: 'Manhattan, NY 10036',
    creatorId: 'uid2',
    coordinates: {
      lat: 40.758,
      lng: -73.9855,
    },
  },
  {
    id: 'p8',
    title: 'Brooklyn Bridge',
    description: 'A hybrid cable-stayed/suspension bridge in New York City.',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/a/a4/Brooklyn_Bridge_NY.jpg',
    address: 'New York, NY 10038',
    creatorId: 'uid1',
    coordinates: {
      lat: 40.706086,
      lng: -73.996864,
    },
  },
  {
    id: 'p9',
    title: 'The Vessel',
    description: 'A new landmark in Hudson Yards.',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b8/5e/17/ground-view-from-the.jpg?w=1200&h=1200&s=1',
    address: '20 Hudson Yards, New York, NY 10001',
    creatorId: 'uid2',
    coordinates: {
      lat: 40.7536,
      lng: -74.002,
    },
  },

  {
    id: 'p11',
    title: 'The High Line',
    description: 'A linear park built on a historic freight rail line.',
    image:
      'https://cdn.getyourguide.com/img/location/53bffbae23678-m1398851031.jpg/88.jpg',
    address: 'New York, NY 10011',
    creatorId: 'uid4',
    coordinates: {
      lat: 40.747992,
      lng: -74.004765,
    },
  },
  {
    id: 'p14',
    title: 'Brooklyn Bridge',
    description: 'A famous hybrid cable-stayed/suspension bridge.',
    image:
      'http://upload.wikimedia.org/wikipedia/commons/a/a4/Brooklyn_Bridge_NY.jpg',
    address: 'New York, NY 10038',
    creatorId: 'uid4',
    coordinates: {
      lat: 40.706086,
      lng: -73.996864,
    },
  },
];

const UserPlaces: React.FC = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId,
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
