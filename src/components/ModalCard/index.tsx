import styled from "styled-components";
import BgImage from "assets/images/loanbuilder/bgicon.png";
import NftModalBgMain from "assets/images/loanbuilder/nftmodalbgmain.png";
import NftModalBg from "assets/images/loanbuilder/nftmodalbgsingle.png";
import { TokenTypes } from "config/constants/loans";
import DialogSmallBgResponsive from "assets/images/small-modal-bg-1.png";

const ModalCard = (props) => {
  return <CustomModal {...props}>{props.children}</CustomModal>;
};
const CustomModal = styled.div<{ type: any }>`
  background-image: url(${(props) =>
    props.type === TokenTypes.SINGLE_NFT ||
      props.type === TokenTypes.SINGLE_TOKEN
      ? NftModalBg
      : props.type === TokenTypes.MULTI_TOKEN
        ? BgImage
        : NftModalBgMain});
        top:0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: absolute;
  display: flex;
  padding: ${(props) =>
    props.type === TokenTypes.SINGLE_NFT ||
      props.type === TokenTypes.SINGLE_TOKEN
      ? "65px"
      : "0"};
  align-items: center;
  justify-content: center;
  z-index: 99;
  width: ${(props) =>
    props.type === TokenTypes.SINGLE_NFT ||
      props.type === TokenTypes.SINGLE_TOKEN
      ? "fit-content"
      : "unset"};
  height: ${(props) =>
    props.type === "Single NFT" || props.type === "Single Token"
      ? "64vh"
      : "auto"};
  margin: auto;
  right: 30px;
  left: 0;
  ${({ theme }) => theme.mediaQueries.md}  {
    background-image: url(${DialogSmallBgResponsive}); 
    min-height:101vh;
    height:110vh;
    right:0;
    align-items:flex-start; 
    margin-top:-190px !important;
    z-index:999999;
  }
`;

export default ModalCard;
