// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryObj, Meta } from "@storybook/react";
import { Typography } from "src/components/Typography";
import Component from "src/components/ProgressCircle";

const Story: Meta<typeof Component> = {
  title: "components/ProgressCircle",
  component: Component,
  argTypes: {
    progress: {
      control: "range",
      min: 0,
      max: 100,
    },
  },
};

export const ProgressCircle: StoryObj<typeof Component> = {
  args: {
  },
};

export const PreciseXXS: StoryObj<typeof Component> = {
  args: {
    size: "xxs",
    progress: 40,
  },
};

export const PreciseXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    progress: 40,
  },
};

export const PreciseSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    progress: 40,
  },
};

export const PreciseMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    progress: 40,
  },
};

export const PreciseLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    progress: 40,
  },
};

export const PreciseWithLabelXXS: StoryObj<typeof Component> = {
  args: {
    size: "xxs",
    progress: 40,
    withLabel: true,
    label: "Loading",
  },
};

export const PreciseWithLabelXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    progress: 40,
    withLabel: true,
    label: "Loading",
  },
};

export const PreciseWithLabelSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    progress: 40,
    withLabel: true,
    label: "Loading",
  },
};

export const PreciseWithLabelMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    progress: 40,
    withLabel: true,
    label: "Loading",
  },
};

export const PreciseWithLabelLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    progress: 40,
    withLabel: true,
    label: "Loading",
  },
};

export const IndeterminateXXS: StoryObj<typeof Component> = {
  args: {
    size: "xxs",
    indeterminate: true,
  },
};

export const IndeterminateXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    indeterminate: true,
  },
};

export const IndeterminateSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    indeterminate: true,
  },
};

export const IndeterminateMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    indeterminate: true,
  },
};

export const IndeterminateLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    indeterminate: true,
  },
};

export const IndeterminateWithChild: StoryObj<typeof Component> = {
  args: {
    size: "xxs",
    indeterminate: true,
    children: (<Typography variant="text">Test</Typography>),
  },
};

export default Story;
