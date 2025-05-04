import styled from "styled-components";
import Overlay from "components/Overlay";
import SectionTitle from "views/SectionTitle";
import { contentDescription, contentSubTitle, contentTitle } from "views/SectionTitle/Content";
import { Popup_Content } from "config/constants/infoData";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";


const ComingSoon = () => {
  const history = useHistory();
  const title = history.location.pathname.replace("/", "") || "";

  return (
    <>
      <Overlay />
      <Container>
        {history.location.pathname === Routes.FAIRLAUNCH ?
          <SectionTitle
            title={title}
            headtitle={contentSubTitle[Popup_Content.FAIRLAUNCH]}
            dialogtitle={contentTitle[Popup_Content.FAIRLAUNCH]}
            content={contentDescription[Popup_Content.FAIRLAUNCH]}
          />
          :
          <SectionTitle
            title={title}
            headtitle={contentSubTitle[Popup_Content.GOVPAD]}
            dialogtitle={contentTitle[Popup_Content.GOVPAD]}
            content={contentDescription[Popup_Content.GOVPAD]}
          />
        }
        <TabsContainer>
          <Coming>
            <p className="text">Coming Soon</p>
          </Coming>
        </TabsContainer>
      </Container>
    </>
  );
};

const Coming = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 315px);
  font-size: 22px;
  .text{
    color: ${({ theme }) => theme.colors.textAccent};
    font-weight: 800;
    font-size: 70px;
  }
`;

const Container = styled.div`
 
  position: relative;
`;

const TabsContainer = styled.div`
  z-index: 10000;

  .title {
    margin-left: 35px;
    font-weight: 800;
  }
`;

export default ComingSoon;
