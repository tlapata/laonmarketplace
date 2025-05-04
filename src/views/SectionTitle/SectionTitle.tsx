import { InfoIcon } from "components/Svg";
import IconRouteSwitcher from "components/IconRouteSwitcher";
import { HeadingExtra } from "views/Dashboard/Dashboard.styled";
import { HeaderRightContent } from "views/Marketplace/LoanMarketplace";
import { TitleContainer } from "views/MyStats/Components/MyStats.styled";
import InfoDataDialog from "./InfoDataDialog";
import { BackIcon } from "components/Svg";
import { useHistory } from "react-router-dom";
import { Routes } from "config/constants/routes";


const SectionTitle = ({ title, dialogtitle, headtitle, content, image, backbtn }: any ) => {
  const history = useHistory();

  return (
    <TitleContainer style={{ position: "relative", cursor: "pointer" }}>
      <h1 className="title info-tag">
        {title}
        <InfoDataDialog
          trigger={<InfoIcon className="info-icon" />}
          title={headtitle} content={content} image={image} dialogtitle={dialogtitle} />
      </h1>

      {backbtn ? (
        <a className="back-button" onClick={() => history.push(Routes.DASHBOARD)} ><BackIcon /></a>
      ) : ""}

      {/* Right columns of the icons */}
      <HeaderRightContent>
        <HeadingExtra>
          <IconRouteSwitcher />
        </HeadingExtra>
      </HeaderRightContent>
    </TitleContainer>
  );
};


export default SectionTitle;