import { useParams } from "react-router-dom";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import ForwardedInput from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const Input = ForwardedInput;

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 5th Ave, New York, NY 10001",
    creatorId: "uid1",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 5th Ave, New York, NY 10001",
    creatorId: "uid2",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p5",
    title: "Central Park",
    description: "An iconic urban park in New York City.",
    image:
      "https://th.bing.com/th/id/OIP.ER5YTSx6wgQLzzt36BZCaAHaFb?w=250&h=184&c=7&r=0&o=5&pid=1.7",
    address: "New York, NY 10024",
    creatorId: "uid4",
    coordinates: {
      lat: 40.785091,
      lng: -73.968285,
    },
  },
  {
    id: "p6",
    title: "The Metropolitan Museum of Art",
    description: "The largest art museum in the United States.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/1920px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg",
    address: "1000 5th Ave, New York, NY 10028",
    creatorId: "uid3",
    coordinates: {
      lat: 40.779437,
      lng: -73.963244,
    },
  },
  {
    id: "p7",
    title: "Times Square",
    description: "A major commercial and entertainment hub.",
    image:
      "https://th.bing.com/th/id/OIP.OQzauY9OT27Y8yeEIhFZcgHaE9?w=284&h=190&c=7&r=0&o=5&pid=1.7",
    address: "Manhattan, NY 10036",
    creatorId: "uid2",
    coordinates: {
      lat: 40.758,
      lng: -73.9855,
    },
  },
  {
    id: "p8",
    title: "Brooklyn Bridge",
    description: "A hybrid cable-stayed/suspension bridge in New York City.",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/a/a4/Brooklyn_Bridge_NY.jpg",
    address: "New York, NY 10038",
    creatorId: "uid1",
    coordinates: {
      lat: 40.706086,
      lng: -73.996864,
    },
  },
  {
    id: "p9",
    title: "The Vessel",
    description: "A new landmark in Hudson Yards.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b8/5e/17/ground-view-from-the.jpg?w=1200&h=1200&s=1",
    address: "20 Hudson Yards, New York, NY 10001",
    creatorId: "uid2",
    coordinates: {
      lat: 40.7536,
      lng: -74.002,
    },
  },

  {
    id: "p11",
    title: "The High Line",
    description: "A linear park built on a historic freight rail line.",
    image:
      "https://cdn.getyourguide.com/img/location/53bffbae23678-m1398851031.jpg/88.jpg",
    address: "New York, NY 10011",
    creatorId: "uid4",
    coordinates: {
      lat: 40.747992,
      lng: -74.004765,
    },
  },
  {
    id: "p14",
    title: "Brooklyn Bridge",
    description: "A famous hybrid cable-stayed/suspension bridge.",
    image:
      "http://upload.wikimedia.org/wikipedia/commons/a/a4/Brooklyn_Bridge_NY.jpg",
    address: "New York, NY 10038",
    creatorId: "uid4",
    coordinates: {
      lat: 40.706086,
      lng: -73.996864,
    },
  },
];

const UpdatePlace: React.FC = () => {
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const titleRef = useRef<HTMLInputElement | null>();
  const descriptionRef = useRef<HTMLTextAreaElement | null>();
  const addressRef = useRef<HTMLInputElement | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const { ref: refTitle, ...restTitleProps } = register("title", {
    required: {
      value: true,
      message: "This field is required!",
    },
    minLength: {
      value: 5,
      message: "Title is to short!",
    },
  });

  const { ref: refDescription, ...restDescriptionProps } = register(
    "description",
    {
      required: {
        value: true,
        message: "This field is required!",
      },
      minLength: {
        value: 10,
        message:
          "Please describe the place in more detail, (10 characters minimum)",
      },
      maxLength: {
        value: 230,
        message:
          "The description is to large, please short it. (230 characters maximum)",
      },
    }
  );

  const { ref: refAddress, ...restAddressProps } = register("address", {
    required: {
      value: true,
      message: "This field is required!",
    },
  });

  return (
    <div className="w-full mx-auto max-w-[40rem]">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          label="Title"
          type="text"
          error={errors.title}
          ref={(e) => {
            refTitle(e);
            titleRef.current = e as HTMLInputElement;
          }}
          value={identifiedPlace?.title}
          {...restTitleProps}
        ></Input>
        <Input
          label="Description"
          isTextArea={true}
          error={errors.description}
          ref={(e) => {
            refDescription(e);
            descriptionRef.current = e as HTMLTextAreaElement;
          }}
          value={identifiedPlace?.description}
          {...restDescriptionProps}
        ></Input>
        <Input
          label="Address"
          type="text"
          error={errors.address}
          ref={(e) => {
            refAddress(e);
            addressRef.current = e as HTMLInputElement;
          }}
          value={identifiedPlace?.address}
          {...restAddressProps}
        ></Input>
        <Button inverse type="submit">
          Submit
        </Button>
        <Button to=".." type="button">
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default UpdatePlace;
