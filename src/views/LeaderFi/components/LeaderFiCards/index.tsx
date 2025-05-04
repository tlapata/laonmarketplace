import styled from "styled-components";
import { decimalValues } from "utils/conversion";
import LeaderFiCard from "./LeaderFiCard";
import { TierLevelEnum } from "config/constants/types";
const tierCardColor = {
  [TierLevelEnum.GOLD]: "gold",
  [TierLevelEnum.SILVER]: "silver",
  [TierLevelEnum.BRONZE]: "bronze",
  [TierLevelEnum.PLATINUM]: "platinum",
  [TierLevelEnum.RHODIUM]: "rhodium",
  [TierLevelEnum.NO_TIER]: "gold"
}
const LeaderFiCards = ({ myData }) => {
  return (
    <Container>
      <LeaderFiCard
        color={`${tierCardColor[myData?.myTier] || "gold"}`}
        title=" TIER"
        content={myData?.myTier.toUpperCase() || "NO TIER LEVEL"}
      />
      <LeaderFiCard
        color="red"
        title=" RANK"
        content={`#${myData?.myRank ? myData?.myRank : 0}`}
      />
      <LeaderFiCard
        color="purple"
        title=" GOV"
        content={myData?.myGov ? decimalValues(myData?.myGov) : "0"}
      />
      <LeaderFiCard
        color="green"
        title=" GOV VALUE"
        content={`$ ${myData?.govPrice && myData?.myGov
          ? decimalValues(myData?.govPrice * myData?.myGov)
          : 0
          }`}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 0 min(115px, 5%) 15px;
  display: grid;
  gap: 15px;
  grid-auto-rows: minmax(140px, auto);
  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0 20px 0 ;
    gap:10px;
   }
`;

export default LeaderFiCards;
