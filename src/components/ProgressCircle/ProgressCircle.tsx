import { ReactNode } from "react";
import styled from "styled-components";
import clsx from "clsx";
import { TypographyCSS } from "src/components/Typography";

export type ProgressCircleSize = "xxs" | "xs" | "sm" | "md" | "lg";

const ProgressCircleSizeToPixels: Record<ProgressCircleSize, number> = {
  xxs: 64,
  xs: 160,
  sm: 200,
  md: 240,
  lg: 280,
};

const ProgressCircleSizeToStroke: Record<ProgressCircleSize, number> = {
  xxs: 6,
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
};

const Root = styled.div`
  justify-self: center;
  align-self: center;
  flex-shrink: 0;
  
  display: grid;
  gap: 6px;
  
  & > * {
    grid-column: 1;
    grid-row: 1;
    justify-self: center;
    align-self: center;
  }
  
  header {
    color: ${props => props.theme.palette.grays[600].hex};
  }

  main {
    color: ${props => props.theme.palette.grays[700].hex};
  }
  
  &.size-xxs {
    width: ${() => `${ProgressCircleSizeToPixels.xxs}px`};
    height: ${() => `${ProgressCircleSizeToPixels.xxs}px`};
    main {
      
      ${TypographyCSS.text.sm}
      ${TypographyCSS.medium}
    }
    footer {
      ${TypographyCSS.text.xs}
      ${TypographyCSS.medium}
      grid-row: 2;
    }
  }

  &.size-xs {
    width: ${() => `${ProgressCircleSizeToPixels.xs}px`};
    height: ${() => `${ProgressCircleSizeToPixels.xs}px`};
    header {
      ${TypographyCSS.text.xs}
      ${TypographyCSS.medium}
    }
    main {
      ${TypographyCSS.display.xs}
      ${TypographyCSS.medium}
    }
  }
  
  &.size-sm {
    width: ${() => `${ProgressCircleSizeToPixels.sm}px`};
    height: ${() => `${ProgressCircleSizeToPixels.sm}px`};
    header {
      ${TypographyCSS.text.xs}
      ${TypographyCSS.medium}
    }
    main {
      ${TypographyCSS.display.sm}
      ${TypographyCSS.medium}
    }
  }
  
  &.size-md {
    width: ${() => `${ProgressCircleSizeToPixels.md}px`};
    height: ${() => `${ProgressCircleSizeToPixels.md}px`};
    header {
      ${TypographyCSS.text.sm}
      ${TypographyCSS.medium}
    }
    main {
      ${TypographyCSS.display.md}
      ${TypographyCSS.medium}
    }
  }
  
  &.size-lg {
    width: ${() => `${ProgressCircleSizeToPixels.lg}px`};
    height: ${() => `${ProgressCircleSizeToPixels.lg}px`};
    header {
      ${TypographyCSS.text.sm}
      ${TypographyCSS.medium}
    }
    main {
      ${TypographyCSS.display.lg}
      ${TypographyCSS.medium}
    }
  }
  
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .fixed {
    stroke: ${props => props.theme.palette.grays[200].hex};
  }
  
  .dynamic {
    stroke: ${props => props.theme.palette.primary[600].hex};
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  
  &.indeterminate {
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    
    .dynamic {
      transition: all 0.5s ease-in;
      animation-name: rotate;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
`;

export type ProgressCircleShape = "full" /* | "half" */;

type ProgressCircleProps = {
  shape?: ProgressCircleShape;
  size?: ProgressCircleSize;
  className?: string;
} & ({
  indeterminate: true;
  children?: ReactNode;
} | {
  indeterminate?: false;
  progress: number;
  withLabel?: boolean;
  label?: string;
  children?: never;
});

export const ProgressCircle = (props: ProgressCircleProps) => {
  const {
    shape = "full",
    size = "xs",
    className,
  } = props;

  const classNames = clsx(
    `shape-${shape}`,
    `size-${size}`, {
      "indeterminate": props.indeterminate,
    },
    className,
  );

  const px = ProgressCircleSizeToPixels[size];
  const stroke = ProgressCircleSizeToStroke[size];
  const half = px / 2;
  const radius = half - stroke / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = props.indeterminate
    ? 2 * circumference / 3
    : circumference - props.progress * circumference / 100;

  return (
      <Root className={classNames}>
        <svg width={px} height={px}>
          <circle
              r={radius}
              cx={half}
              cy={half}
              strokeWidth={stroke}
              fill="transparent"
              className="fixed"
          />
          <circle
              r={radius}
              cx={half}
              cy={half}
              strokeWidth={stroke}
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={`${offset}`}
              strokeLinecap="round"
              fill="transparent"
              className="dynamic"
          />
        </svg>
        {!props.indeterminate && props.withLabel && props.size !== "xxs" && (
            <article>
              {props.label && <header>{props.label}</header>}
              {<main>{`${props.progress}%`}</main>}
            </article>
        )}
        {!props.indeterminate && props.withLabel && props.size === "xxs" && (
            <>
              {<main>{`${props.progress}%`}</main>}
              {props.label && <footer>{props.label}</footer>}
            </>
        )}
        {props.indeterminate && props.children}
      </Root>
  );
};

export default ProgressCircle;
