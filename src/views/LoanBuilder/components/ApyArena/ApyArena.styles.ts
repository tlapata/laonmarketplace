import styled from "styled-components";
import YOU from "assets/images/loanbuilder/apy-you.svg";
import TLC from "assets/images/loanbuilder/corner-top-left.svg";
import BLC from "assets/images/loanbuilder/corner-bottom-left.svg";
import TRC from "assets/images/loanbuilder/corner-top-right.svg";
import BRC from "assets/images/loanbuilder/corner-bottom-right.svg";
import ALG from "assets/images/loanbuilder/arrow-left-green.svg";
import ARG from "assets/images/loanbuilder/arrow-right-green.svg";

import BR from "assets/images/loanbuilder/bottom-right-small.svg";
import Frame from "assets/images/loanbuilder/frame-small.png";
import Edit from "assets/images/loanbuilder/edit-icon.svg";

export const ApyContainer = styled.div`
  width: 980px;
  margin: 0 auto;
  padding: 14px 0 180px;
  display: flex;
  flex-direction: column;

  .pointer {
    cursor: pointer;
  }
  .show {
    opacity: 1;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
  }
`;

export const ApyArenaCard = styled.div`  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .sideinfo{
    width: 355px;
    order: 1;

    .svg-title {
      font-weight: 500;
      text-align: center;
      width: 230px;
      float: right;
      padding-bottom: 15px;
    }

    svg {
      float:right;
      clear:both;
    }

    .middle-svg {
      padding: 40px 0;
      clear: both;
      position: relative;

      svg {
        float: none;
      }

      &:before,
      &:after {
        content: '';
        display: block;
        width: 102px;
        height: 102px;
        position:absolute;
        top: -68px;
        left: 0;
        z-index: -1;
        background-image: url(${TLC});
        background-size: contain;

        ${({ theme }) => theme.mediaQueries.lg} {
          display:none;
        }
      }

      &:after {
        background-image: url(${BLC});
        top: auto;
        bottom: -74px;
      }
    }
 
    &.nft {
      order: 3;

      .svg-title {
        float: left;
      }

      svg {
        float:left;
      }
  
      .middle-svg {
        text-align: right;

        svg {
          float: none;
        }

        &:before {
          background-image: url(${TRC});
          left: auto;
          right: 0;
        }
        &:after {
          background-image: url(${BRC});
          left: auto;
          right: 0;
        }
      }  
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    .sideinfo{
      width: 50%;
      order: 2;
      padding: 0 10px 0 0;

      &.nft {
        padding: 0 0 0 10px;
      }

      .svg-title {
        width: 100%;
      }

      svg {
        width: 100%;
        float: none;
      }

      .middle-svg {
        padding: 0;
      }
    }
  }
`;

export const ApyArenaCenterBox = styled.div`
  width: 270px;
  order: 2;
  text-align: center;

  .dropdown-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.green};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 40px;

    &:before,
    &:after {
      content: '';
      display: block;
      height: 22px;
      width: 22px;
      background-image: url(${ALG});
      background-size: contain;
    }
    &:after {
      background-image: url(${ARG});
    }

    ${({ theme }) => theme.mediaQueries.md} {
      display: none;
    }
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.purple};
    margin: -14px 0 0;
    padding: 0;
  }

  .input-wrapper {
    height: 100%;
    align-content: center;

    .input-block {
      width: 230px;
      height: 232px;
      background-image: url(${YOU});
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
      padding: 63px 26px 30px;
      margin: -18% auto 0;

      .input-label {
        font-size: ${(props) => props.theme.fonts.xs}rem;
        font-weight: 600;
        padding: 10px;

        p{
          opacity: 0.7;
          margin-bottom: 8px;
        }
      }

      ${({ theme }) => theme.mediaQueries.md} {
        margin: 0 auto 30px;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    order: 1;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  order: 4;
  margin: 0;
  text-align: center;

  .label {
    font-weight: 800;
    text-transform: uppercase;
    text-align: center;
  }
`;





export const ApyHeader = styled.h2`
  display: inline-block;
  margin-top: 20px;
  margin-bottom: auto;
  font-weight: 800;
  text-align: center;

  background: linear-gradient(
    89.95deg,
    #ffd3d3 6.31%,
    #ff5252 24.07%,
    #ff5252 68.56%,
    #ffd3d3 92.23%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ApySubHeader = styled(ApyHeader)`
  margin-top: auto; // to push this to bottom
  margin-bottom: 5px;
  font-size: 17px;
  line-height: 32px;

  @media (min-width: 1330px) {
    font-size: 24px;
    margin-bottom: 10px;
  }

  @media (min-width: 1600px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const ApyInputLabel = styled(ApyHeader)`
  margin-bottom: 16px;
  margin-top: 0px;
  text-align: left;
  color: ${({ theme }) => theme.colors.textAccent};
`;

export const FormContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: center;
  gap: 30px;

  @media (min-width: 1600px) {
    gap: 40px;
    margin-bottom: 35px;
  }
`;

export const FancyField = styled.span`
  text-align: center;
  min-height: 42px;
  border: none;
  padding: 12px 10px;
  outline: 0;

  &.with-pen {
    padding: 0 12px;
    
    ${({ theme }) => theme.mediaQueries.md} {
      &.calculator-field {
        span {
          font-size:11px;
          top:50%;
          transform:translateY(-50%);
          right:30px;
          &.dollar-sign {
            font-size:18px;
          }
        }
      }
    }
  }

  &.terms {
    display: flex;
    align-items: center;
    padding 10px 0;
    background-color: rgba(255, 255, 255, 0.04);

    .term {
      text-align: right;
      background-color: transparent;
    }

    span {
      opacity: 0.4;
      font-size: ${(props) => props.theme.fonts.sm}rem;
      margin-left: 2px;
    }
  }

  &.with-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  // these are used throughtout the app
  .AllStar {
    background: linear-gradient(0deg, #90ffd2, #90ffd2),
      linear-gradient(90deg, #f1c6ff -3.79%, #e084ff 44.81%, #8da3ff 64.43%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Platinum {
    background: linear-gradient(
      90deg,
      rgb(234, 250, 253) 0%,
      rgb(88, 228, 220) 26.93%,
      rgb(208, 246, 255) 69.03%,
      rgb(88, 228, 220) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Silver {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255) 0%,
      rgb(153, 153, 153) 26.93%,
      rgb(255, 255, 255) 69.03%,
      rgb(126, 126, 126) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Bronze {
    background: linear-gradient(
      90deg,
      rgb(255, 236, 215) 0%,
      rgb(149, 108, 59) 26.93%,
      rgb(255, 240, 222) 69.03%,
      rgb(194, 144, 86) 99.41%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .Gold {
    background-image: linear-gradient(
      90deg,
      #ffefc6 0%,
      #ffce20 26.93%,
      #ffefc6 69.03%,
      #ffce20 99.41%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .tier-text {
    font-weight: 800;
    font-size: 13px;
    text-transform: uppercase;
    color: transparent;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    &.calculator-field {
      width:103px !important;
    }
  }
`;
