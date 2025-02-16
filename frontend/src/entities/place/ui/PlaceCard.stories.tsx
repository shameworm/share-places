import type { Meta, StoryObj } from "@storybook/react";

import { PlaceCard } from "./PlaceCard";

const meta = {
  title: "entities/PlaceCard",
  component: PlaceCard,
  argTypes: {
    image: { control: "text" },
    title: { control: "text" },
    description: { control: "text" },
    address: { control: "text" },
    creatorId: { control: "text" },
    coordinates: {
      control: "object",
      defaultValue: { lat: 0, lng: 0 },
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PlaceCard>;

export default meta;
type Story = StoryObj<typeof PlaceCard>;

export const Basic: Story = {
  args: {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world! ",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creatorId: "u1",
  },
};
