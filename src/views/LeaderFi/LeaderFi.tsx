import { useState } from "react";
import styled from "styled-components";

import RankBoard from "./components/RankBoard";
import LeaderFiCards from "./components/LeaderFiCards";
import Overlay from "components/Overlay";
import SectionTitle from "views/SectionTitle";
import { contentDescription, contentSubTitle, contentTitle } from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";

const LeaderFi = () => {

  const [myData, setMyData] = useState(null);
  
  return (
    <>
      <Overlay />
      <SectionTitle 
        title="LeaderBoard" 
        headtitle={contentSubTitle[Popup_Content.LEADERBOARD]} 
        dialogtitle={contentTitle[Popup_Content.LEADERBOARD]} 
        content={contentDescription[Popup_Content.LEADERBOARD]} 
      />
      <Wrapper>
        <LeaderFiCards myData={myData} />
        <RankBoard setMyData={setMyData} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  z-index: 1;
  position: relative;
`;

export default LeaderFi;
