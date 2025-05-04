import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import styled from "styled-components";

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  width: 22px;
  min-width: 22px;
  height: 22px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-right: 5px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.06);
  }
`;

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.textAccent};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.textAccent};

  svg {
    stroke: ${({ theme }) => theme.colors.blockBG};
  }
`;

// Exports
const Checkbox = StyledCheckbox;
const CheckboxIndicator = StyledIndicator;

export { Checkbox, CheckboxIndicator };
