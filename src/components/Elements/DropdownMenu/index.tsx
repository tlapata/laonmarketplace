import styled, { css, keyframes } from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const slideUpAndFade = keyframes`
  0% { opacity: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: 'translateY(0); }
`;
const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: 'translateX(0); }
`;

const slideDownAndFade = keyframes`
  0% { opacity: 0; transform: translateY(-2px); }
  100% { opacity: 1; transform: 'translateY(0); }
`;
const slideLeftAndFade = keyframes`
  0% { opacity: 0; transform: translateX(2px); }
  100% { opacity: 1; transform: 'translateX(0); }
`;

const StyledTrigger = styled(DropdownMenuPrimitive.Trigger)`
  text-align: center;
  color: rgba(255, 255, 255, 0.35);
  border: none;
  padding: 4px 10px;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &[data-state="open"] {

    background: linear-gradient(
        90deg,
        rgba(241, 198, 255, 0.35) -16.66%,
        rgba(189, 10, 248, 0.35) 24.05%,
        rgba(54, 92, 252, 0.35) 99.31%
      ),
      linear-gradient(0deg, ${({ theme }) => theme.colors.apple}, ${({ theme }) => theme.colors.blockBG});
  }
  &.filter{
    ${({ theme }) => theme.mediaQueries.md}{
      width: 97%;
    }
  
  }
`;

const StyledContent = styled(DropdownMenuPrimitive.DropdownMenuContent)`
  background: linear-gradient(
      90deg,
      rgba(241, 198, 255, 0.35) -16.66%,
      rgba(189, 10, 248, 0.35) 24.05%,
      rgba(54, 92, 252, 0.35) 99.31%
    ),
    linear-gradient(0deg, ${({ theme }) => theme.colors.apple}, ${({ theme }) => theme.colors.blockBG});
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  &[data-state="open"] {
    &[data-side="top"] {
      animation-name: ${slideDownAndFade};
    }
    &[data-side="right"] {
      animation-name: ${slideLeftAndFade};
    }
    &[data-side="bottom"] {
      animation-name: ${slideUpAndFade};
    }
    &[data-side="left"] {
      animation-name: ${slideRightAndFade};
    }
  }
`;

const itemStyles = css`
  all: unset;
  font-size: 14px;
  user-select: none;
  height: 28px;
  padding: 1px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.textAccent};
  }

  &[data-disabled] {
    color: grey;
    pointer-events: none;
  }
  &[data-state="checked"] {
    color: ${({ theme }) => theme.colors.textAccent};
  }

  span.filter-label {
    margin-left: 5px;
    margin-right: 10px;
  }
  span.filter-value {
    margin-left: auto;
    text-align: right;
  }
`;

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  ${itemStyles}
`;
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem)`
  ${itemStyles}
`;
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem)`
  ${itemStyles}
`;
const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const StyledLabel = styled(DropdownMenuPrimitive.Label)``;
const StyledSeparator = styled(DropdownMenuPrimitive.Separator)``;
const StyledArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: white;
`;

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuTrigger = StyledTrigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;
