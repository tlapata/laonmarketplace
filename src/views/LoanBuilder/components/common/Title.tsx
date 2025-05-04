import IconRouteSwitcher from "components/IconRouteSwitcher";
import { InfoIcon } from "components/Svg";
import { HeadingExtra } from "views/Dashboard/Dashboard.styled";
import { HeaderRightContent } from "views/Marketplace/LoanMarketplace";
import { TitleContainer } from "views/MyStats/Components/MyStats.styled";
import InfoDataDialog from "views/SectionTitle/InfoDataDialog";


const Title = ({ title, dialogtitle, headtitle, content, image }: any ) => {

  return (
    <TitleContainer className="loan-builder">
      <h1 className="title info-tag">
        {title}
        <InfoDataDialog
          trigger={<InfoIcon className="info-icon" />}
          title={headtitle} content={content} image={image} dialogtitle={dialogtitle} />
      </h1>
    </TitleContainer>
  );
};


export default Title;