import styled from "styled-components";
import Edit from "assets/images/loanbuilder/edit.svg";

import fancyBg from "assets/images/purple-cell.png";


const StyledInput = styled.input`
  &:focus {
    border: none;
    box-shadow: none;
  }

  @media (max-width: 1280px) {
    width: 117px;
    height: 31px;
    padding: 10px 50px 10px 0px;
  }
`;

export const ApyStyledInput = styled.input`
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${(props) => props.theme.fonts.md}rem;
  text-align: center;
  border: none;
  padding: 10px 23px;
  outline: 0;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.colors.textAccent};
  text-align: left;
  /*background-image: url(${Edit});
  background-repeat: no-repeat, no-repeat;
  background-size: inherit;
  background-position: 142px 3px, center;*/
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textAccent};
    opacity: 0.3; /* Firefox */
  }
  
  &::-ms-input-placeholder { /* Edge 12 -18 */
  color: ${({ theme }) => theme.colors.textAccent};
  }

  &.with-pen {
    ${({ theme }) => theme.mediaQueries.md} {
      &.calculator-field {
        background-image:url(${Edit}), url(${fancyBg});
        background-position: 77px 12px, center;
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

  &.with-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

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
      background-image: url(${fancyBg});
    }
  }
`;

export default StyledInput;