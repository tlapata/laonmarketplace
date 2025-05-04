import React, { useContext, useMemo } from "react";
import styled, { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg" | "cs" | "ps" | "ts";
  text?: string;
  to?: string;
  variant?: "default" | "secondary" | "tertiary" | "normal";
  width?: string;
  height?: string;
  className?: string;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  href,
  onClick,
  size,
  text,
  to,
  variant,
  width,
  height,
  className,
  style,
}) => {
  const { colors, spacing } = useContext(ThemeContext);

  let buttonColor: string;
  switch (variant) {
    case "secondary":
      buttonColor = colors.secondary;
      break;
    case "normal":
      buttonColor = colors.white;
      break;
    case "default":
      buttonColor = colors.white;
      break;
  }

  let boxShadow: string;
  let buttonSize: number;
  let buttonPadding: number;
  let fontSize: number;
  switch (size) {
    case "sm":
      buttonPadding = spacing[3];
      buttonSize = 36;
      fontSize = 14;
      break;
    case "lg":
      buttonPadding = spacing[4];
      buttonSize = 72;
      fontSize = 16;
      break;
    case "cs":
      boxShadow = `8px 10px 15px 0 rgba(255, 148, 22, 0.7)`;
      buttonPadding = spacing[4];
      buttonSize = 40;
      fontSize = 11;
      break;
    case "ps":
      boxShadow = `none`;
      buttonPadding = spacing[4];
      buttonSize = 40;
      fontSize = 12;
      break;
    case "ts":
      boxShadow = `none`;
      buttonPadding = spacing[4];
      buttonSize = 40;
      fontSize = 11.8;
      break;
    case "md":
    default:
      buttonPadding = spacing[4];
      buttonSize = 56;
      fontSize = 16;
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>;
    } else if (href) {
      return (
        <StyledExternalLink className={className} href={href} target="__blank">
          {text}
        </StyledExternalLink>
      );
    } else {
      return text;
    }
  }, [href, text, to, className]);

  return (
    <StyledButton
      boxShadow={boxShadow}
      color={buttonColor}
      disabled={disabled}
      fontSize={fontSize}
      onClick={onClick}
      padding={buttonPadding}
      size={buttonSize}
      width={width}
      height={height}
      className={className}
      style={style}
    >
      {children}
      {ButtonChild}
    </StyledButton>
  );
};

interface StyledButtonProps {
  boxShadow: string;
  color: string;
  disabled?: boolean;
  fontSize: number;
  padding: number;
  size: number;
  width: string;
  height: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  align-items: center;
  background: linear-gradient(180deg, #b609f8 -1%, #315efb 99%);
  border-radius: 7px;
  border: 0;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 15px;
  font-weight: 700;
  height: ${(props) => props.size}px;
  justify-content: center;
  outline: none;
  padding-left: ${(props) =>
    props.fontSize === 11.8 ? "63" : props.padding}px;
  padding-right: ${(props) => props.padding}px;
  pointer-events: ${(props) => (!props.disabled ? undefined : "none")};
  width: ${(props) => (props.width ? props.width : "175px")};
  height: ${(props) => (props.height ? props.height : "50px")};
  &:hover {
    border: 1px solid #ffffff;
    border-radius: 4px;
  }
  &:disabled {
    opacity: 0.7;
  }
`;

const StyledLink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  flex: 1;
  height: 56px;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 15px;
  margin: 0 ${(props) => -props.theme.spacing[4]}px;
  padding: 0 ${(props) => props.theme.spacing[4]}px;
  text-decoration: none;
`;

export default Button;
