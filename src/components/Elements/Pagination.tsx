import chevron_left from "assets/images/loanbuilder/chevron-left.svg";
import chevron_right from "assets/images/loanbuilder/chevron-right.svg";
import styled from "styled-components";

const PaginationRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 11px;
`;

const PaginationButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0.39px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 7px 11.5px;
  font-weight: bold;
  font-size: 14.504px;
  line-height: 120%;
  color: #ffffff;
${({ theme }) => theme.mediaQueries.fold} {
  font-size: 9px;
  padding: 7px 6px;
}
  &:hover:not([disabled]) {
    background-color: rgba(255, 255, 255, 0.3);
  }

  &[disabled] {
    cursor: default;
  }

  &[data-state="active"] {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const PrevArrow = styled.button`
  background-image: url(${chevron_left});
  background-color: rgba(255, 255, 255, 0.2);
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  width: 20px;
  height: 31px;

  &:hover:not([disabled]) {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const NextArrow = styled.button`
  background-image: url(${chevron_right});
  background-color: rgba(255, 255, 255, 0.2);
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  outline: none;
  width: 20px;
  height: 31px;
`;

export { PaginationRoot, PaginationButton, PrevArrow, NextArrow };
