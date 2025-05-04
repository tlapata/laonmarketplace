import React from "react";
import styled from "styled-components";

interface LabelProps {
  sizeVariant?: string;
  bold?: boolean;
  leftContent?: any;
  children: React.ReactNode;
  className?: string;
}
const fontSizes = {
  rg: "16px",
  md: "18px",
  sm: "14px",
};
const lineHeights = {
  rg: "20px",
  md: "22px",
  sm: "17px",
};

const Label: React.FC<
  LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ sizeVariant = "rg", className, children, ...rest }) => (
  <StyledLabel {...rest} className={className} sizeVariant={sizeVariant}>
    {children}
  </StyledLabel>
);

const StyledLabel = styled.label<
  LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>
>`
  font-weight: ${(props) => (props.bold ? "600" : "normal")};
  font-size: ${(props) => fontSizes[props.sizeVariant]};
  line-height: ${(props) => lineHeights[props.sizeVariant]};
  color: ${(props) => props.theme.colors.backgroundInvert};
`;

export default Label;