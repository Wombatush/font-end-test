import {
  PropsWithChildren,
} from "react";
import styled, { css } from "styled-components";
import clsx from "clsx";

export const TypographyCSS = {
  text: {
    xs: css`font-size: 12px; line-height: 18px;`,
    sm: css`font-size: 14px; line-height: 20px;`,
    md: css`font-size: 16px; line-height: 24px;`,
    lg: css`font-size: 18px; line-height: 24px;`,
    xl: css`font-size: 20px; line-height: 30px;`,
  },
  display: {
    xs: css`letter-spacing: -0.02em; font-size: 24px; line-height: 32px;`,
    sm: css`letter-spacing: -0.02em; font-size: 30px; line-height: 38px;`,
    md: css`letter-spacing: -0.02em; font-size: 36px; line-height: 44px;`,
    lg: css`letter-spacing: -0.02em; font-size: 48px; line-height: 60px;`,
    xl: css`letter-spacing: -0.02em; font-size: 60px; line-height: 72px;`,
    xxl: css`letter-spacing: -0.02em; font-size: 72px; line-height: 90px;`,
  },
  regular: css`font-weight: 400;`,
  medium: css`font-weight: 500;`,
  bold: css`font-weight: 700;`,
  black: css`font-weight: 900;`,
};

const Root = styled.p`
  font-family: Satoshi, sans-serif;

  &.variant-text {
    &.size-xs {
      ${TypographyCSS.text.xs}
    }

    &.size-sm {
      ${TypographyCSS.text.sm}
    }

    &.size-md {
      ${TypographyCSS.text.md}
    }

    &.size-lg {
      ${TypographyCSS.text.lg}
    }

    &.size-xl, &.size-xxl {
      ${TypographyCSS.text.xl}
    }
  }

  &.variant-display {
    &.size-xs {
      ${TypographyCSS.display.xs}
    }

    &.size-sm {
      ${TypographyCSS.display.sm}
    }

    &.size-md {
      ${TypographyCSS.display.md}
    }

    &.size-lg {
      ${TypographyCSS.display.lg}
    }

    &.size-xl {
      ${TypographyCSS.display.xl}
    }

    &.size-xxl {
      ${TypographyCSS.display.xxl}
    }
  }
  
  &.weight-regular {
    ${TypographyCSS.regular}
  }

  &.weight-medium {
    ${TypographyCSS.medium}
  }

  &.weight-bold {
    ${TypographyCSS.bold}
  }

  &.weight-black {
    ${TypographyCSS.black}
  }
`;

export type TypographyAs = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "header" | "footer" | "label";

export type TypographySize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type TypographyWeight = "regular" | "medium" | "bold" | "black";

export type TypographyVariant = "display" | "text";

export type TypographyProps = PropsWithChildren<{
  as?: TypographyAs;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  size?: TypographySize;
  className?: string;
}>;

export const Typography = (props: TypographyProps) => {
  const {
    as = "p",
    variant = "display",
    weight = "regular",
    size = "sm",
    className = "",
    children,
    ...rest
  } = props;

  const classNames = clsx(
    `variant-${variant}`,
    `weight-${weight}`,
    `size-${size}`,
    className,
  );

  return (
        <Root {...rest} className={classNames} as={as}>
            {children}
        </Root>
  );
};

export default Typography;
