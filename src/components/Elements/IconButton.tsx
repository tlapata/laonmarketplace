import styled from "styled-components";

const IconButton = styled("button")`
  all: unset;
  font-family: inherit;
  color: inherit;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 10px;

  svg {
    fill: ${({ theme }) => theme.colors.purple}
  }

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.textAccent}
    }
  }
`;

export default IconButton;
