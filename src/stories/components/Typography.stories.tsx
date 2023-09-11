// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryObj, Meta } from "@storybook/react";
import Component from "src/components/Typography";

const Story: Meta<typeof Component> = {
  title: "components/Typography",
  component: Component,
  argTypes: {
    as: {
      control: "select",
    },
    variant: {
      control: "select",
    },
    weight: {
      control: "select",
    },
    size: {
      control: "select",
    },
  },
};

export const Typography: StoryObj<typeof Component> = {
  args: {
    as: "span",
    variant: "display",
    weight: "regular",
    size: "sm",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt lectus lacus, et lacinia ex dictum id. Curabitur sem nulla, elementum eu dictum non, sollicitudin sed quam. Mauris id velit in nibh feugiat pellentesque. Sed tincidunt efficitur euismod. Sed convallis, enim et fringilla luctus, neque nulla congue ipsum, a molestie purus risus vel ipsum. Aliquam nec volutpat enim. Nulla non viverra sapien. Vivamus sit amet elit mollis, vulputate sem in, rhoncus ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam pharetra ut turpis ut vulputate. Quisque non augue urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor commodo elementum. Maecenas id enim mollis purus viverra eleifend. Suspendisse vel ultricies nulla. Phasellus fermentum mi molestie lectus fermentum, gravida bibendum libero rhoncus.",
  },
};

export default Story;
