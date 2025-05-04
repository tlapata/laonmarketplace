import React from "react";
import styled from "styled-components";

interface InputProps {
  sizeVariant?: "xs" | "sm" | "md" | "rg";
  gradientBorder?: boolean;
  containerClassName?: string;
  rightIcon?: React.ReactNode;
  border?: "gradient" | "filter" | "fade";
  inputbg?: boolean;
}
const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  sizeVariant = "rg",
  className,
  gradientBorder = false,
  containerClassName,
  rightIcon = null,
  border = null,
  inputbg,
  ...rest
}) => {
  return (
    <InputWrapper
      inputbg={inputbg}
      border={border}
      className={containerClassName}
    >
      <StyledInput sizeVariant={sizeVariant} className={className} {...rest} />
      {rightIcon && rightIcon}
    </InputWrapper>
  );
};

const heights = {
  rg: "64px",
  md: "44px",
  sm: "39px",
  xs: "25px",
};
const paddings = {
  rg: "20px",
  md: "12px",
  sm: "12px",
  xs: "10px",
};
const fontSizes = {
  rg: "14px",
  md: "14px",
  sm: "14px",
  xs: "9px",
};
const lineHeights = {
  rg: "17px",
  md: "17px",
  sm: "17px",
  xs: "11px",
};
const borders = {
  gradient: "linear-gradient(180deg, #8F24F9 0%, #315EFB 100%)",
  fade: "linear-gradient(90deg, #8F24F9 20%, #315EFB 40%, transparent 100%)",
  filter: "#A8B0C5",
};

const InputWrapper = styled.div<InputProps>`
  padding: ${(props) => (props.border ? "1" : "0")}px;
  background: ${(props) =>
    props.border
      ? borders[props.border]
      : props.inputbg
      ? "none"
      : props.theme.colors.protocolsMarqueeBackground};
  border-radius: 5.48164px;
  position: relative;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
const StyledInput = styled.input<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>`
  font-size: ${(props) => fontSizes[props.sizeVariant]};
  line-height: ${(props) => lineHeights[props.sizeVariant]};
  letter-spacing: 0.02em;
  width: 100%;
  height: ${(props) => heights[props.sizeVariant]};
  color: #a8b0c5;
  background: ${(props) => props.theme.colors.protocolsMarqueeBackground};
  padding: ${(props) => paddings[props.sizeVariant]};
  outline: none;
  border: 1px;
  border-radius: 5.48164px;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default Input;
