import styled from "styled-components";
import defaultNFT from "assets/images/nft.jpg";

import Arrow from "assets/icons/drop-arrow.svg";
import Button from "components/Elements/Button";
import { HeadingInfo } from "../../Dashboard/Dashboard.styled";
import BgHover from "assets/images/stats/nft-hover-bg.svg";
import LoanChecked from "assets/images/marketplace/loancard-checkmark.png";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div<{ isHeight?: boolean }>`
  width: 100%;
  display: flex;

  ${({ theme }) => theme.mediaQueries.tab} {
    flex-direction: column;
      &.content-container{
        align-items: center;
      }
    }
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2.25rem;
  margin-bottom:0;

  .title-note {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.purple};
    margin: 0 0 0 10px;
    position: relative;
    vertical-align: top;
  }
`;

export const CardBox = styled.div<{ showScroll?: boolean }>`

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &.stats-card-box {
      overflow-x: hidden;
    }
  }
`;

export const DetailCard = styled.div`
  hr {
    opacity:0.06;
  }
  
  .slick-list {
    width: 100%;
  }
`;

export const TabsBtn = styled(Button)``;

export const ControlBtn = styled(TabsBtn)`
  display: flex;
  position: relative;
  padding: 16px 20px;
  border: none;
  outline: none;
  z-index: 1;
  border-radius: 4px;
  background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.darkGreen});
  cursor: pointer;
  width: 230px;
  height: 54px;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;
  justify-content: center;

  &.disabled {
    opacity: 0.35;
    cursor: default;
    background: white;
  }

  &::before {
    content: "";
    position: absolute;
    left: 2px;
    right: 2px;
    top: 2px;
    bottom: 2px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.blockBG};
    z-index: -1;
    transition: 200ms
  }

  &::after {
    content: attr(data);
    background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.textAccent});
    -webkit-background-clip: text;
    color: transparent;
    transition: 200ms
  }

  svg{
    fill: ${({ theme }) => theme.colors.purple};
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }

  &:hover {
    color: white;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.textAccent});
  
    &::before {
      opacity: 0%;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    &::after{
      color: white;
    }

    svg{
      fill: white;
    }
  }

  &[data-state="active"] {
    color: white;

    svg{
      fill: white;
    }
  }
`;

export const TransactionCard = styled.div<{ width: string }>`
  margin-top: 20px;

  .tx-card{
    div{
      font-size: ${(props) => props.theme.fonts.sm}rem;
      color: rgba(134, 135, 188, 0.6);

      a{
        color: ${({ theme }) => theme.colors.text};
        font-size: 0.875rem;

        &:hover{
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  

  .slick-list {
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    .tx-card{
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    &.transaction {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
    }
  }
`;

export const CollateralListHolder = styled.div``;

export const CollateralList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Collateral = styled.div`
  width:calc(50% - 10px);
  align-items: center;

  .token-details-block {
    background: rgba(255, 255, 255, 0.03);
    padding: 12px 20px;
    border-radius: 4px;

    .logo-name {
      display: flex;
      align-items: center;

      img {
        margin-right: 14px;
      }

      h3 {
        font-size: 1rem;
        font-weight: 600;
        margin: 0;
        padding: 0;

        span {
          color: ${(props) => props.theme.colors.purple};
          font-size: 0.75rem;
          position: relative;
          vertical-align: top;
          margin-left: 5px;
        }  
      }
    }

    .token-quantity {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      font-weight: 600;
      padding-left: 50px;

      .qty {
        width: 30%;

        &:last-child {
          width: 40%;
        }

        h4{
          font-size: 0.75rem;
          color: rgba(134, 135, 188, 0.4);
          margin: 0;
          padding: 0;
        }

        div {
          opacity: 0.7;
        }
      }

      &.addresses {
        font-weight: 400;
        font-size: ${(props) => props.theme.fonts.xs}rem;
  
        .qty {
          div {
            text-decoration: underline;
            cursor:pointer;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }  
    }
  }

  .nft-details-block {
    display: flex;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.03);

    .nft-image {
      width: 194px;
      //height: 194px;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
      background-image: url(${defaultNFT});
      background-size: cover;
  
      img {
        object-fit: cover;
        width: 194px;
        height: 100%;
      }
    }
  
    .nft-detail-card {
      overflow: hidden;
      max-width: calc(100% - 194px);
      padding: 20px;
      width: 100%;
  
      .top-info {
        display: flex;
        width: 100%;
        justify-content: space-between;
  
        .check-details {
          display: block;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.03);
          height: 38px;
          width: 38px;
          line-height: 36px;
          text-align: center;
          cursor: pointer;
  
          svg {
            fill: ${(props) => props.theme.colors.purple};
          }
  
          &:hover {
            background-color: rgba(255, 255, 255, 0.06);
            svg {
              fill: ${(props) => props.theme.colors.textAccent};
            }
          }
        }
      }
    }

    .switch {
      display:none;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg}{
    width: 100%;
  }
`;

export const TypeRow = styled.div`
  width: 100%;
`;






export const CollateralBtn = styled(ControlBtn)`
  margin-bottom: 0px;
  background: url(${Arrow}),
    rgba(255, 255, 255, 0.25);
  background-repeat: no-repeat, no-repeat;
  background-position: 150px center, center;
  :hover {
    background: url(${Arrow}),
      rgba(255, 255, 255, 0.25);
    background-repeat: no-repeat, no-repeat;
    background-position: 150px center, center;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  ${({ theme }) => theme.mediaQueries.md} {
    gap: 12px;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export const MyHeadingInfo = styled(HeadingInfo)`
  color: ${({ theme }) => theme.colors.textAccent};
`;

export const AboveOverlay = styled.div`
  position: relative;
`;



export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: relative;
  padding: 40px 0;

  .back-button {
    display: block;
    background: rgba(255, 255, 255, 0.03);
    width: 54px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-radius: 4px;

    svg {
      fill: ${({ theme }) => theme.colors.textAccent};
    }

    &:hover{
      background: rgba(255, 255, 255, 0.1);
      svg {
        fill: ${({ theme }) => theme.colors.textAccent};
      }
    }
  }

  &.loan-builder{
    width: 330px;
    position: relative;
    letter-spacing: -0.05rem;

    ${({ theme }) => theme.mediaQueries.md} { 
      width: 100%;
    }
  }

  h1 {
    margin: 0;

    .info-icon{
      fill: ${({ theme }) => theme.colors.purple};
      margin-top: -18px;

      &:hover{
        fill: ${({ theme }) => theme.colors.textAccent};
      }
    }
  }

  .info-tag{
    display:flex;
    gap:10px;
  }

  .title {
    font-weight: 500;
    font-size: 2.25rem;
    align-items: center;
  }

  ${({ theme }) => theme.mediaQueries.md} { 
    padding: 20px 0;

    .loandetail{
      margin-left: 0;
      padding:0 !important;
    }
    &.stats {
      margin-bottom:0;
    }
  }  

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;

    .title{
      font-size: 1.5rem;
    }
  }

  ${({ theme }) => theme.mediaQueries.fold} {
    .title{
      font-size: 13px;
    }
  }

  p{
    margin-bottom: 0 !important;
    font-size: 14.5px;
  }
  
  ${({ theme }) => theme.mediaQueries.xs} {
    align-items: center;

    &.leaderboard{
      padding: 20px 10px 0 3px;
    }

    p{
      margin-bottom: 0 !important;
    }
  }
`;

export const Amount = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  margin-left: 7px;

  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    width: 100%;
  }
`;

export const SubHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 12px;
  }

  ${({ theme }) => theme.mediaQueries.fold} {
    margin-bottom: 47px;
    flex-flow: column;
  }
`;

export const SubHeading = styled.h2`
  font-weight: 400;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.textAccent};
  margin-bottom: 0px;
  margin-left: 25px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12px;
    margin-left: 0;
  }
`;

export const MyContent = styled.div<{ isHeight?: boolean }>`
  width: 100%;
`;

export const ControlBox = styled.div`
  display: block;
  padding-top: 60px;
  width: 182px;
  margin-right: 30px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    padding-top: 30px;
    .tx-history-wrapper {
      width: 100%;
    }
  }
`;

interface ChartHolderProps {
  image?: boolean;
  type?: boolean;
  nobg?: boolean;
}

export const ChartHolder = styled.div<ChartHolderProps>`
  margin-top: 38px;
  margin-right: 30px;
  height: ${(props) => (props.type ? "unset" : "calc(100vh - 388px)")};
 &.stats-chart-holder {
  height: ${(props) => (props.type ? "unset" : "calc(100vh - 455px)")};
  width:100%;
  max-width:100%;

 }
  width: 100%;
  padding: ${({ image, type }) => image ? "25px" : type ? "25px 27px 43px 39px" : "0px 50px 70px 49px"};

  ${({ theme }) => theme.mediaQueries.md} {
    height: 100%;
    max-height : ${(props) => (props.type ? "unset" : "346px")};
    max-width: 287px;
    width: 100%;
    margin-bottom: 70px !important;
  }
  
  @media (max-width: 1200px) {
    height: 500px;
    margin-bottom: 20px;
  }

  &.chart {
    ${({ theme }) => theme.mediaQueries.md} {
      order: 1;
      height : ${(props) => (props.type ? "unset" : "346px")};
      padding: 8px 9px 5px 16px;
      max-width: 287px;
      width: 100%;
      margin-right: 30px;
    }
  }
`;

export const ControlHolder = styled.div`
  display flex;
  @media (max-width: 1200px){
    width: 100%;
    justify-content: space-between;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: column;
  }
`;

export const ChartHeading = styled.h3`
  font-family: "Organetto Ultra Bold";
  font-style: normal;
  font-weight: 400;
  font-size: 10.4678px;
  line-height: 14px;
  color: #ffffff;
  margin-bottom: 20px;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 20px;
  }
`;

export const CardHolder = styled.div`
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const NftWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  width: auto;
  height: 80%;
  align-items: center;
  .hoverContent {
    position: relative;
    background: url("${(props) => BgHover}");
    background-size: contain;
    position: absolute;
    padding: 12px 18px;
    top: 0;
    height: 100%;
    z-index: 9999;
    background-repeat: no-repeat;
  }
`;

export const NftContainer = styled(NftWrapper)`
  height: calc(100vh - 360px) !important;
  min-height: 400px !important;
  max-height: 700px !important;
  margin-top: -15px;

  ${({ theme }) => theme.mediaQueries.tab}{
    height: 346px !important;
    margin-top: 0px !important;
  }
 
    ${({ theme }) => theme.mediaQueries.md}{
      height: 0 !important;
  margin-top: 0px !important;
      .nft-image{
      width:287.89px;
      height: 346px;
    }
   
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
