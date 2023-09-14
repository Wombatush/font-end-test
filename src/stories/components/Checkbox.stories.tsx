// eslint-disable-next-line import/no-extraneous-dependencies
import { StoryObj, Meta } from "@storybook/react";
import Component, { CheckboxProps } from "src/components/Checkbox";
import { useState } from "react";

const Story: Meta<typeof Component> = {
  title: "components/Checkbox",
  component: Component,
  argTypes: {
  },
};

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [isChecked, toggleCheck] = useState(args.checked);
  const handleOnChange = (value: boolean) => {
    toggleCheck(value);
  };

  return <Component onChange={handleOnChange}
    state={args.state}
    supportingText={args.supportingText}
    text={args.text}
    checked={isChecked}
    intermediate={args.intermediate}
    size={args.size}
    className={""}
  />;
};
export const CheckboxDefault: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: false,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};
export const CheckboxHover: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: false,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "hover",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxFocus: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: false,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "focus",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxDisabled: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: false,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "disabled",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: true,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    checked: true,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    checked: true,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    checked: true,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedXL: StoryObj<typeof Component> = {
  args: {
    size: "xl",
    checked: true,
    intermediate: false,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxIntermediateXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: false,
    intermediate: true,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxIntermediateSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    checked: false,
    intermediate: true,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxIntermediateMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    checked: false,
    intermediate: true,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxIntermediateLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    checked: false,
    intermediate: true,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxIntermediateXL: StoryObj<typeof Component> = {
  args: {
    size: "xl",
    checked: false,
    intermediate: true,
    text: false,
    supportingText: false,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};


export const CheckboxCheckedWithTextXS: StoryObj<typeof Component> = {
  args: {
    size: "xs",
    checked: true,
    intermediate: false,
    text: true,
    supportingText: true,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedWithTextSM: StoryObj<typeof Component> = {
  args: {
    size: "sm",
    checked: true,
    intermediate: false,
    text: true,
    supportingText: true,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedWithTextMD: StoryObj<typeof Component> = {
  args: {
    size: "md",
    checked: true,
    intermediate: false,
    text: true,
    supportingText: true,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedWithTextLG: StoryObj<typeof Component> = {
  args: {
    size: "lg",
    checked: true,
    intermediate: false,
    text: true,
    supportingText: true,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};

export const CheckboxCheckedWithTextXL: StoryObj<typeof Component> = {
  args: {
    size: "xl",
    checked: true,
    intermediate: false,
    text: true,
    supportingText: true,
    state: "default",
    onChange: (): void => {},
  },
  render: (args) => <CheckboxWithHooks { ...args }/>,
};
export default Story;