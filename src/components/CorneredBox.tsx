import styled from "styled-components";
import TL from "assets/images/marketplace/top-left.svg";
import BR from "assets/images/marketplace/bottom-right.svg";

const StyledBox = styled.div`
  background-image: url(${TL}), url(${BR});
  background-color: transparent;
  background-position: top left, bottom right;
  background-repeat: no-repeat, no-repeat;
  background-size: auto, auto;
  padding: 4px;
  & > *:first-child {
    background-color: rgba(255, 255, 255, 0.25);
    transition: background 0.3s ease;
  }
`;

export default StyledBox;
