import styled from "styled-components";
import DropDownIconSmall from "assets/images/loanbuilder/arrow.svg";
import CALC from "assets/images/loanbuilder/calc.svg";
import CALCRED from "assets/images/loanbuilder/calc_red.svg";
import CALCGREEN from "assets/images/loanbuilder/calc_green.svg";
import CALCBLUE from "assets/images/loanbuilder/calc_blue.svg";
import CALCAQUA from "assets/images/loanbuilder/calc_aqua.svg";
import CALCGOLD from "assets/images/loanbuilder/calc_gold.svg";
import Edit from "assets/images/loanbuilder/edit.svg";

import rectangle_purple from "assets/images/loanbuilder/rectangle-purple.svg";
import rectangle from "assets/images/rectangle-white-upper.svg";
import rectangle1 from "assets/images/rectangle-white-lower.svg";
import Spinner from "components/Spinner";
import { ErrorProps } from "config/constants/errors";
import TL from "assets/images/marketplace/top-left.svg";
import BR from "assets/images/marketplace/bottom-right.svg";
import DropDownIcon from "assets/images/loanbuilder/drop-down.svg";


export const CurrencyBtn = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background-color: ${({ theme }) => theme.colors.blockBG};
  box-shadow: 0px 22px 60px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 47px;
  line-height: 46px;
  margin: 23px auto 0;
  padding: 0 17px;
  text-align: left;
  cursor: pointer;
  display:block;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2;
  position: relative;
  background-image: url(${DropDownIconSmall});
  background-repeat: no-repeat, no-repeat;
  background-size: inherit;
  background-position: 92% 22px, center;
  letter-spacing: -0.05rem;

  &.stablecoin {
    margin: 0;
    background-size: 6px 6px;
    background-position: 130px center;
    text-align: center;
    border: none;
  }

  &:hover {
    border: none;
  }

  span {
    display: block;
  }

  &[data-state="active"] {
    background: linear-gradient(
        90deg,
        #f1c6ff -16.66%,
        #bd0af8 24.05%,
        #365cfc 99.31%
      ),
      linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.25),
        rgba(255, 255, 255, 0.25)
      );
  }
`;

export const CustomDropDown = styled.div<{ sidebarOpen?: Boolean }>`
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background-color: ${({ theme }) => theme.colors.blockBG};
  box-shadow: 0px 22px 60px 0px rgba(0, 0, 0, 0.15);
  width: 178px;
  cursor: pointer;
  font-weight: 500;
  margin: -1px auto 0;
  z-index: 1;
  position: absolute;
  left: calc(50% - 89px);

  &.stablecoins {
    top: 98px;
    width: 100%;
    left: 0;

    .dropdownitems {
      text-align: center;
    }
  }

  .dropdownitems {
    margin: 5px;
    border-radius: 4px;
    padding: 12px;
    text-align: left;

    &.disabled {
      opacity: 0.5;
    }
  }

  .dropdownitems:hover,
  .dropdownitems:focus,
  .dropdownitems:active {
    background: rgba(217, 217, 217, 0.04);
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    overflow-x: auto;
    scrollbar-color: rgb(101, 103, 209) rgb(8, 17, 41);
    scrollbar-width: none;  
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 210px;
  height: 128px;
  background-image: url(${CALC});
  background-repeat: no-repeat, no-repeat;
  background-size: 100% 100%;

  &.redbg {
    background-image: url(${CALCRED});
  }

  &.greebg {
    background-image: url(${CALCGREEN});
  }

  &.bluebg {
    background-image: url(${CALCBLUE});
  }

  &.aquabg {
    background-image: url(${CALCAQUA});
  }

  &.goldbg {
    background-image: url(${CALCGOLD});
  }

  .label {
    font-size: ${(props) => props.theme.fonts.sm}rem;
    text-align: center;
    font-weight: 700;
    opacity: 0.35;
  }


  .dollar {
    position: absolute;
    right: 36px;
    font-size: 17px;
    font-weight: 600;
    top: 26px;
    @media (max-width: 1280px) {
      top: 26px;
    }
    @media (min-width: 1281px) {
      top: 36px;
    }
  }
  .days {
    position: absolute;
    right: 33px;
    top: 26px;
    @media (max-width: 1280px) {
      top: 26px;
    }
    @media (min-width: 1281px) {
      top: 36px;
    }
  }
  .fancyInputWrapper {
    position: relative;
    .inputField {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background: none;
      border: none;
      width: 70%;
      outline: 0;
      text-align: center;
      caret-color: white;
      word-wrap: break-word;
      font-weight: bold;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    .label {
      margin-left:0 !important;
    }
  }
`;

export const FancyInput = styled.input`
  /*background-image: url(${Edit});
  background-repeat: no-repeat, no-repeat;
  background-size: inherit;
  background-position: 140px 17px, center;*/
  background-color: rgba(255, 255, 255, 0.04);
  border-radius: 4px;
  border: none;
  outline: 0;
  padding: 12px 0;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.3; /* Firefox */
  }
  
  &::-ms-input-placeholder { /* Edge 12 -18 */
  color: ${({ theme }) => theme.colors.text};
  }

  &:focus {
    border: none;
    box-shadow: none;
  }
`;




export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items-center;
`;

export const StyledSpinner = styled(Spinner)`
  width: 25px;
  height: 100px;
  margin: 0 15% !important;
  display: flex;
  width: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const Card = styled.div`
  cursor:pointer;
  .card-title{
    justify-content:center;
    text-align: center;
  }
  .card-img-overlay{
    .svg-container {
      width:96%;
      margin: 35px auto 0 auto;
      display:flex;
      flex-direction:column;
      gap:35px;
    }
  }
`;

export const Tab = styled.div<{
  active?: Boolean;
  errors: ErrorProps;
  netCashOut;
  isClicked;
}>`
  min-width: 175px;
  text-align: center;

  background: url("${(props) => (props.active ? "" : rectangle1)}")
      right bottom no-repeat,
    url("${(props) => (props.active ? rectangle_purple : rectangle)}") left top
      no-repeat;
  border-radius: 0.38889px;
  cursor: pointer;
  margin-top: 20px;
  pointer-events: ${(props) => (props.isClicked ? "none" : "unset")};
  // pointer-events: ${(props) =>
    !props.errors.borrowAmount &&
      !props.errors.borrowAmount &&
      !props.errors.borrowAmount
      ? ""
      : "none"};

  p {
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
    props.active
      ? `background: linear-gradient(90deg, #F1C6FF -16.66%, #BD0AF8 24.05%, #365CFC 99.31%), rgba(255, 255, 255, 0.25);background-clip:content-box;`
      : `background-color: rgba(255, 255, 255, 0.25);`}
  }

  p.summary {
    width: 118px;
    height: 27px;
  }
  &.button {
    background: none !important;
  }
`;