import styled from "styled-components";
import TL from "assets/images/marketplace/top-left.svg";
import BR from "assets/images/marketplace/bottom-right.svg";

const MenuList = styled.button<{ active?: boolean; open?: boolean }>`
  font-family: "Geist", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 1px;
  background: ${(props) =>
    props.active
      ? `rgba(255, 255, 255, 0.03)`
      : "transparent"};
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.colors.textAccent
      : ({ theme }) => theme.colors.text };
  border-radius: 4px;
  padding: 16px 20px;
  border: none;
  outline: 0;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.colors.textAccent};

    svg {
      fill: ${({ theme }) => theme.colors.textAccent};
    }
  }

  &[data-state="active"] {
    background: rgba(255, 255, 255, 0.03);
    color: ${({ theme }) => theme.colors.textAccent};

    svg { fill: ${({ theme }) => theme.colors.textAccent}; }
  }

  svg {
    fill: ${(props) =>
      props.active
        ? ({ theme }) => theme.colors.textAccent
        : ({ theme }) => theme.colors.purple };
    height: 22px;
    width: 22px;
    margin-right: 15px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    display:block!important;
  }
`;

export default MenuList;
