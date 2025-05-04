import React from "react";
import { Card } from "react-bootstrap";
import nftDark from "assets/images/nftDark.svg";
import altCoinDark from "assets/images/altCoinDark.svg";
import nftWhite from "assets/images/nftWhite.svg";
import altCoinWhite from "assets/images/altCoinWhite.svg";

import styled from "styled-components";
import useTheme from "hooks/useTheme";

interface Iprops {
  goToAltCoin: () => void;
  goToNFT: () => void;
}

const ChooseCollateral: React.FC<Iprops> = ({ goToAltCoin, goToNFT }) => {
  const { isDark } = useTheme();

  return (
    <Main>
      <ChooseTokenHeading>Choose Collateral</ChooseTokenHeading>
      <div className="row pe-5 ps-0 ">
        <div className="col-md-5">
          <Card className="px-0 mb-3  first pointer" onClick={() => goToNFT()}>
            <Card.Img src={isDark ? nftDark : nftWhite} />
          </Card>
        </div>
        <div className="col-md-5">
          <Card className="px-0   second pointer" onClick={() => goToAltCoin()}>
            <Card.Img src={isDark ? altCoinDark : altCoinWhite} />
          </Card>
        </div>
      </div>
    </Main>
  );
};

const Main = styled.div`
  .card {
    background: ${(props) => props.theme.colors.background};
    border-radius: 5.78378px;
    border: 0.748597px solid #6ad050;
    box-shadow: 0px 2.31351px 2.31351px rgba(0, 0, 0, 0.25);
    ${({ theme }) => theme.mediaQueries.sm} {
      margin-left: 0px !important;
      margin-right: 0px !important;
      margin-bottom: 10px !important;
    }
  }
  .card.first {
    margin-right: 3rem;
    @media (max-width: 768px) {
      margin-right: 0px;
    }
  }
  .card.second {
    margin-left: 3rem;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
`;
const ChooseTokenHeading = styled.p`
  margin-left: 100px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24.38px;
  text-align: left;
  color: ${(props) => props.theme.colors.adminDashboadText};
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin: auto;
  }
`;

export default ChooseCollateral;
