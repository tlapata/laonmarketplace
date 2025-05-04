import styled from "styled-components";
import GoldFancyBG from "assets/images/dashboard/GoldBg.png";
import BronzeFancyBG from "assets/images/fancy-field3.png";
import PanelBG from "assets/images/dashboard/tableBg.svg";


export const PanelHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;

  .my-stats {
    width: 235px;
    background: ${({ theme }) => theme.colors.blockBG};
    border-radius: 4px;
    padding: 30px;

    .summary {
      position: absolute;
      left: 0;
      bottom: -16px;
    }

    .lender-borrower {
      &:last-child {
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px dashed rgba(255, 255, 255, 0.06);
      }

      .stats {
        display: flex;
        padding: 10px 0 0;

        div {
          flex: 1 1 0px;

          span {
            font-weight: 600;

            &.green {
              color: ${({ theme }) => theme.colors.green};
            }

            &.red {
              color: ${({ theme }) => theme.colors.red};
            }
          }
        }
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    &.panelData {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .my-stats {
      width: 100%;
    }
  }
`;

export const DashboardPanel = styled.div`
  width: calc(50% - 137.5px);
  position: relative;
  background: ${({ theme }) => theme.colors.blockBG};
  border-radius: 4px;
  padding: 30px;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: unset;
    padding: 20px 0;
    width: 100%;
  }
`;

export const TitleHolder = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-between;
  padding-bottom: 28px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
  margin-bottom: 25px;
  font-weight: 500;
`;

export const PanelTitle = styled.span`
  font-size: 1.5rem;
  position: relative;

  ${({ theme }) => theme.mediaQueries.md} {
    font-size:1.25rem;
  }
`;

export const TokenVal = styled.span`
  font-size:1.25rem;
  line-height: 2;

  a {
    cursor: pointer;

    svg {
      fill: ${({ theme }) => theme.colors.textAccent};
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    font-size:1rem;
  }
`;

export const HeadingExtra = styled.div`
  display: flex;

  .back{
    display: flex;
    gap: 10px;
  }

  img {
    width: 22px;
    height: 22px;
    margin-left: 10px;
  }
`;






export const HeadingHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;



export const HeadingInfo = styled.span`
  font-weight: 800;
  font-size: 13.9355px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
  position: relative;
  bottom: -3px;
  cursor: pointer;
`;

export const SubTitle = styled.span`
  font-weight: 800;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;

export const HeadingBanner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 26px;
  &.qualified{
     margin-bottom:0px;
  ${({ theme }) => theme.mediaQueries.md}{
    flex-direction:column;
    gap:19.82px;
    align-items: flex-start;
    margin-top: 30px;
  }
}
`;

export const BannerBox = styled.div`
  display: flex;
  align-items: center;
  &:nth-child(1) {
    margin-right: 30px;
  }
`;

export const BlueFancyField = styled.div`
  width: 225px;
  height: 71px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const GoldFancyField = styled(BlueFancyField)`
  width: 88px;
  color: white;
  height: 31.13px;
  font-weight: 500;
  background-image: url(${GoldFancyBG});
`;

export const BronzeFancyField = styled(BlueFancyField)`
  background-image: url(${BronzeFancyBG});
  color: white;
`;

export const BlueTitle = styled.span`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  color: blue;
  width: max-content;
`;

export const GoldTitle = styled.span`
  font-weight: 800;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textAccent};
  margin-right: 10px;
  width: max-content;
`;

export const BronzeTitle = styled.span`
  font-weight: 800;
  font-size: 14px;
  line-height: 19px;
  background: linear-gradient(
      90deg,
      #e8ffd7 0%,
      #3b956a 26.93%,
      #deffeb 69.03%,
      #56c25a 99.41%
    ),
    #ffffff;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  width: max-content;
`;

export const PanelVisuals = styled.div`
  width: 100%;
  padding: 19px 0px 0px;
  .slick-prev {
    left: -21px;
    top: 170px;
    width: 17px !important;
  }
  .slick-next {
    top: 170px;
    right: -10px;
    width: 17px !important;
  }
  .slick-dots {
    bottom: -12px;
  }
  .slick-list {
    margin-right: 6px;
  }
`;

export const NFTHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  img {
    width: 92px;
    height: 81px;
  }
`;

export const NFTVal = styled(TokenVal)`
  color: #ea47d9;
`;

export const PanelData = styled.div`
  width: 100%;
  padding-top: 18px;
`;

export const StatsTable = styled.table`
  margin-left: 38px;
  margin-right: 38px;
  width: calc(100% - 76px);
  text-align: center;
  color: white;
  th {
    font-size: 11px;
    line-height: 15px;
    text-align: center;
  }
  td {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #ffffff;
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

export const StatsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const StatHeading = styled.span`
  color: white;
  text-align: center;
`;
