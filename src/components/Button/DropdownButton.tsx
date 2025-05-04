import React, { forwardRef } from "react";
import styled from "styled-components";
import ArrowDownCircledIcon from "components/Icons/ArrowDownCircled";

interface ButtonProps {
  containerClassName?: string;
  border?: "gradient" | "filter";
  children?: React.ReactNode;
  height?: string;
  backgroundColor: "primary" | "secondary";
  ref?: any;
  iconSize?: "sm" | "xs";
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = forwardRef(
  (
    {
      className,
      containerClassName,
      border = null,
      children,
      height,
      backgroundColor,
      iconSize,
      ...rest
    },
    ref
  ) => (
    <DropDownButton
      className={containerClassName}
      ref={ref}
      {...rest}
      height={height}
      backgroundColor={backgroundColor}
    >
      {children}
      <ArrowDownCircledIcon
        iconSize={iconSize}
        color="#A8B0C5"
        className="ms-3"
      />
    </DropDownButton>
  )
);

const backgroundColors = {
  primary: "drawerBackground",
  secondary: "protocolsMarqueeBackground",
};

const DropDownButton = styled.button<{
  height: string;
  backgroundColor: string;
}>`
  padding: 1px;
  cursor: pointer;
  border: 0.452136px solid #a8b0c5;
  border-radius: 2.71281px;
  display: flex;
  justify-content: space-between;
  padding: 5px 8px;
  align-items: center;
  height: ${(props) => props.height}!important;
  background: ${(props) =>
    props.theme.colors[backgroundColors[props.backgroundColor]]};
  color: ${(props) => props.theme.colors.backgroundInvert};
`;
export default Button;
