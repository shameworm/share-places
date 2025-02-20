import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { SignupForm } from "./SignupForm";

const meta = {
  title: "features/SignupForm",
  component: SignupForm,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
    queryClient: true,
    toaster: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="w-[40rem]">
        <SignupForm />
      </div>
    );
  },
};
