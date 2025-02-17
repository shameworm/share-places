import type { Meta, StoryObj } from "@storybook/react";

import { Share2Icon } from "lucide-react";

import { Button } from "../button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

const meta = {
  title: "shared/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Tooltip Trigger</TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};

export const WithIconButtonAsTooltipTrigger: Story = {
  render: () => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button>
              <Share2Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tooltip Content</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  },
};
