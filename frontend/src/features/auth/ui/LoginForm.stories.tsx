import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { LoginForm } from "./LoginForm";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
    queryClient: true,
    toaster: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Basic: Story = {
  render: () => {
    return (
      <div className="w-[40rem]">
        <LoginForm />
      </div>
    );
  },
};
