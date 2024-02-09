import type { Meta, StoryObj } from "@storybook/react";

import { Button, sizeValues, variantValues } from ".";

const meta = {
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    size: {
      control: { type: "radio" },
      default: "standard",
      options: sizeValues,
    },
    variant: {
      control: { type: "radio" },
      options: variantValues,
    },
  },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    disabled: false,
    loading: false,
    size: "standard",
    variant: "default",
  },
};
