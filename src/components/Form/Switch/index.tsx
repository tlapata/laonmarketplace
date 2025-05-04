import styled from "styled-components";
import * as SwitchPrimitive from "@radix-ui/react-switch";

type SwitchProps = {
  width?: number;
  height?: number;
};

const StyledSwitch = styled(SwitchPrimitive.Root)<SwitchProps>`
  all: unset;
  display: inline-flex;
  align-items: center;
  width: ${(props) => props.width || 44}px;
  height: ${(props) => props.height || 26}px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;

  &[data-state="checked"] {
    background: ${({ theme }) => theme.colors.textAccent};

    span {
      background: ${({ theme }) => theme.colors.bodyBackground};
    }
  }
`;

type SwitchThumbProps = {
  size?: number;
  translatex?: number;
};

const StyledThumb = styled(SwitchPrimitive.Thumb)<SwitchThumbProps>`
  display: inline-block;
  width: ${(props) => props.size || 18}px;
  height: ${(props) => props.size || 18}px;
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(4px);
  will-change: transform;
  &[data-state="checked"] {
    transform: translateX(${(props) => props.translatex || 22}px);
  }
`;

// Exports
const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

export { Switch, SwitchThumb };
