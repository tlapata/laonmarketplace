import styled from "styled-components";
import CARD from "assets/images/loanbuilder/block.svg";
import CARDHV from "assets/images/loanbuilder/block-hover.svg";
import CARDCHN from "assets/images/loanbuilder/block-choosen.svg";

import rectangle from "assets/images/rectangle-white-upper.svg";
import rectangle1 from "assets/images/rectangle-white-lower.svg";
import Spinner from "components/Spinner";
import BgHover from "assets/images/loanbuilder/card-hover.png";
import LoanChecked from "assets/images/marketplace/loancard-checkmark.png";

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: nowrap;

  ${({ theme }) => theme.mediaQueries.md}{
    flex-wrap: wrap;
    gap: 0;
    margin-top: 30px;
  }
`;

export const Card = styled.div`
  display: block;
  cursor: pointer;
  width: 100%;
  max-width: 365px;
  height: 365px;
  //background: ${({ theme }) => theme.colors.blockBG};
  background-image: url(${CARD});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  transition: all 0.2s ease-in-out;

  .card {
    display: block;
    width: 100%;
    height: 100%;
    background: none;
    text-align: center;

    .card-number {
      position: relative;
      z-index: 1;
      font-size: 0.75rem;
      line-height: 1.4;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};

      &::before {
        content: ' ';
        display: block;
        position: absolute;
        left: calc(50% - 50px);
        top: -1px;
        transform: rotate(180deg);
        border-bottom: 26px solid ${({ theme }) => theme.colors.bodyBackground};
        border-left: 26px solid transparent;
        border-right: 26px solid transparent;
        height: 0;
        width: 100px;
        z-index: -1;
      }
    }

    .inner-card {
      height: 100%;
      align-content: center;

      .tick-img {
        height: 22px;
        margin: -40px 0 22px;
      }  

      .card-title {
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 500;

        &:after {
          content:' ';
          display: block;
          height: 3px; 
          width: 70%;
          margin: 20px auto 0;
          background: linear-gradient(to right, rgb(140, 235, 231), rgb(101, 103, 209));
          opacity: 0.2;
        }
      }
    }
  }

  &.choosen {
    color: ${({ theme }) => theme.colors.textAccent};
    background-image: url(${CARDCHN});

    &:hover {
      background-image: url(${CARDCHN});
      color: ${({ theme }) => theme.colors.textAccent};
    }

    .inner-card {
      .card-title {
        &:after {
          opacity: 1;
        }
      }
    }
  }

  &:hover {
    //background: linear-gradient(90deg, ${({ theme }) => theme.colors.purple} 0%, ${({ theme }) => theme.colors.textAccent} 100%);
    background-image: url(${CARDHV});
    color: ${({ theme }) => theme.colors.blockBG};
  }

  ${({ theme }) => theme.mediaQueries.md}{
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  text-align: center;
  background: url("${rectangle1}") right bottom no-repeat,
    url("${rectangle}") left top no-repeat;
  border: 0;
  margin-top: 15.78px;
  text-align: center;
  padding: 3px;
  background-color: transparent;
  background-clip: content-box;
  font-style: normal;
  font-weight: bold;
  font-size: 24.0186px;
  line-height: 140%;
  text-align: center;
  margin-bottom: 0;

  &.active {
    background: rgba(255, 255, 255, 0.25);
  }
  p {
    margin-bottom: 0;
  }
`;

export const CollateralsWrapper = styled.div`
  .tokens-wrapper {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .slick-slide > div {
    display: flex;
  }
  .slick-list {
    width: 100%;
  }
  .slick-slider {
    display: flex;
  }
  .left-arrow {
    top: calc(100% + 40px);
    transform: translateX(-50%);
    left: calc(50% - 15px);
    position: absolute;
  }
  .right-arrow {
    top: calc(100% + 40px);
    transform: translateX(-50%);
    left: calc(50% + 15px);
    position: absolute;
  }
  .left-arrow,
  .right-arrow {
    cursor: pointer;
    :hover {
      background: linear-gradient(
        90deg,
        #f1c6ff -16.66%,
        #bd0af8 24.05%,
        #365cfc 99.31%
      ) !important;
    }
  }

  .pagination {
    bottom: -30px;
    li {
      background: rgba(255, 255, 255, 0.25);
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .slick-active {
      background: linear-gradient(
        90deg,
        #f1c6ff -16.66%,
        #bd0af8 24.05%,
        #365cfc 99.31%
      );
    }
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledSpinner = styled(Spinner)`
  width: 25px;
  height: 25px;
  margin: 0 15% !important;
  display: flex;
  height: 50vh;
  width: 50px;

  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const NoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const NftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  margin: 13px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &.hoverContent {
    background: url("${(props) => BgHover}");
    position: absolute;
    padding: 12px 18px;
    top: 0;
    width: 209px;
    z-index: 9999;
    background-repeat: no-repeat;
    height: 251px;
  }
  :hover {
    transform: scale(1.1);
  }
`;

export const LoanCardChecked = styled.div`
  width: 104px;
  height: 104px;
  background-image: url(${LoanChecked});
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
