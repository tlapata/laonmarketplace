import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 3px;
  margin: 0 auto;
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  flex-grow: 1;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
`;

// Exports
const RadialCheckbox = StyledCheckbox;
const RadialCheckboxIndicator = StyledIndicator;

export { RadialCheckbox, RadialCheckboxIndicator };
