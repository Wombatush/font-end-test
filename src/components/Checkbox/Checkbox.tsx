import styled from "styled-components";
import clsx from "clsx";
import { TypographyCSS } from "../Typography";
import { useId } from "react";

const CheckboxSizeToPixels: Record<CheckboxSize, number> = {
  xs: 18,
  sm: 20,
  md: 24,
  lg: 24,
  xl: 30,
};

const CheckboxEmptyStateToStroke: Record<CheckboxState, string> = {
  default: "#D0D5DD",
  hover: "#7F56D9",
  focus: "#D6BBFB",
  disabled: "#EAECF0",
};

const CheckboxCheckedStateToStroke: Record<CheckboxState, string> = {
  default: "#7F56D9",
  hover: "#7F56D9",
  focus: "#7F56D9",
  disabled: "#EAECF0",
};

const CheckboxEmptyStateToFill: Record<CheckboxState, string> = {
  default: "#FFFFFF",
  hover: "#F9F5FF",
  focus: "#FFFFFF",
  disabled: "#F2F4F7",
};

const CheckboxCheckedStateToFill: Record<CheckboxState, string> = {
  default: "#F9F5FF",
  hover: "#F9F5FF",
  focus: "#F9F5FF",
  disabled: "#F2F4F7",
};

const Root = styled.div`
  font-family: Satoshi, sans-serif;
  display: flex;
  margin-left: 100px;
  margin-top: 50px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 8px;
    
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
    
    &.size-xl {
      ${TypographyCSS.text.xl}
    }

    &.disabled-true {
      input {
        cursor: default;
      }
    }
  }

  .checkbox-container {
    position: relative;
    border-radius: 25%;

    label {
      display: grid;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      opacity: 1;

      &.state-focus::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 25%;
        z-index: -1;
        opacity: 0.1;
        background-color: #7F56D9;
        transform: scale(1.3, 1.3);
        animation: ripple 1s ease-out;
      }
    }

    @keyframes ripple {
      0% {
        transform: scale(0, 0);
        z-index: 1;
      }
      20% {
        transform: scale(0.5, 0.5);
        z-index: 1;
      }
      100% {
        transform: scale(1.3, 1.3);
        z-index: 1;
      }

    }
  }
  
  input[type=checkbox] {
    -webkit-appearance: none;
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    position: absolute;
  }

  &.checked-true {
    svg {
      .svg-checkmark {
        display: inline-block;
      }
    }
  }

  span {
    display: inline-block;
  }
  
  .text {
    color: #344054;
    ${TypographyCSS.medium}
    
    &.disabled-true {
      color: #D0D5DD;
    }
  }
  
  .supporting-text {
    color: #667085;
    ${TypographyCSS.regular}
  }
`;

export type CheckboxSize = "xs" | "sm" | "md" | "lg" | "xl";

export type CheckboxState = "default" | "hover" | "focus" | "disabled";

export type CheckboxProps = {
  size?: CheckboxSize;
  className?: string;
  checked?: boolean;
  intermediate?: boolean;
  state?: CheckboxState;
  text?: boolean;
  supportingText?: boolean;
  onChange: (e: boolean) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const {
    size = "xs",
    className = "",
    checked = false,
    intermediate = false,
    state = "default",
    text = false,
    supportingText = false,
    onChange,
  } = props;

  const width = CheckboxSizeToPixels[size];
  const height = CheckboxSizeToPixels[size];
  const fill = (checked || intermediate) ? CheckboxCheckedStateToFill[state] : CheckboxEmptyStateToFill[state];
  const stroke = (checked || intermediate) ? CheckboxCheckedStateToStroke[state] : CheckboxEmptyStateToStroke[state];
  const uid = useId();

  const classNames = clsx(
    `size-${size}`,
    `disabled-${state === "disabled"}`,
    "container",
    className,
  );

  const textClassNames = clsx(
    `disabled-${state === "disabled" && !supportingText}`,
    "text",
  );

  return (
    <Root>
      <div className={classNames}>
        <div className={"checkbox-container"} style={{ borderColor: stroke, backgroundColor: fill, width, height }}>
          <label htmlFor={uid} className={state === "focus" ? "state-focus" : ""}>
          <input type={"checkbox"}
                 disabled={state === "disabled"}
                 checked={checked}
                 id={uid}
                 onChange={(e) => onChange(e.target.checked)}
          />
            <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" fill={fill}/>
              {checked && !intermediate && <>
                <path className={"svg-checkmark"} d="M12 5L6.5 10.5L4 8" stroke={stroke} strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/>
              </>}

              {intermediate && <>
                <path className={"svg-minus"} d="M4.5 8H11.5" stroke={stroke} strokeWidth="1.66666" strokeLinecap="round" strokeLinejoin="round"/>
              </>}
              <rect x="0.5" y="0.5" width="15" height="15" rx="3.5" stroke={stroke}/>
            </svg>
          </label>
        </div>
        { (text || supportingText) && <>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>

            {text && <>
            <span className={textClassNames}>Remember me</span>
            </>}

            {text && supportingText && <>
              <span className={"supporting-text"}>Save my login details for next time</span>
            </>
            }
          </div>
        </> }
      </div>
    </Root>
  );
};

export default Checkbox;
