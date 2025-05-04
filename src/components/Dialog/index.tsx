import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";
import ERROR from "assets/images/icons/error.svg";
import SUCCESS from "assets/images/icons/success.svg";
import { CloseIcon } from "components/Svg";

import DialogSmallBg from "assets/images/small-modal-bg.png";
//import InfoBackground from "assets/images/InfoBackground.png";
import dangerAlertBg from "assets/images/dangerAlertBg.png";
import SuccessAlertBg from "assets/images/successAlertBg.png";
import ModalBg from "assets/images/messageModal.png";
import DialogSmallBgResponsive from "assets/images/small-modal-bg-1.png";


type StyledOverlayProps = {
  type?: string;
};

type StyledContentProps = {
  size: "small" | "large";
  backgroundImg?: string;
  type?: string;
};

function Content({ children, size, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay {...props}>
        <a className="close"><CloseIcon /></a>
        <StyledContent size={size} {...props} >
          {children}
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
}


const overlayShow = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const contentShow = keyframes`
  0% { opacity: 0; transform: scale(.96); }
  100% { opacity: 1; transform: scale(1); }
`;

const StyledOverlay = styled(DialogPrimitive.Overlay)<StyledOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  // fight with the z-index of the sidebar :(
  z-index: 1000000000;
  background: linear-gradient(
      90deg,
      rgba(241, 198, 255, 0.2) -16.66%,
      rgba(189, 10, 248, 0.2) 24.05%,
      rgba(54, 92, 252, 0.2) 99.31%
    ),
    linear-gradient(0deg, rgba(18, 18, 18, 0.2), rgba(18, 18, 18, 0.2));

  .close {
    position: absolute;
    width: 54px;
    height: 54px;
    cursor: pointer;
    text-align: center;
    z-index: 1;
    ${({ type, theme }) =>
      `
      top: ${type === "alert" || type === "error" || type === "success" || type === "successToast" || type === "loanCreated" ? "0"
                      : "20px"};
      right: ${type === "alert" || type === "error" || type === "success" || type === "successToast" || type === "loanCreated" ? "0"
            : (type === "nftdetail") ? "746px" 
            : "530px"};
      background: ${type === "alert" || type === "error" || type === "success" || type === "successToast" || type === "loanCreated" ? "none"
                      : theme.colors.bodyBackground};
      line-height: ${type === "alert" || type === "error" || type === "success" || type === "successToast" || type === "loanCreated" ? "38px"
                      : "52px"};
    `}
    
    svg {
      width: 22px;
      height: 22px;
      ${({ type, theme }) =>
        `
          fill: ${type === "alert" || type === "error" || type === "success" || type === "successToast" || type === "loanCreated" ? "white"
                        : theme.colors.purple};
      `}
  

      &:hover {
        fill: ${({ theme }) => theme.colors.textAccent};
      }
    }

    ${({ theme }) => theme.mediaQueries.md} {
      right: auto;
      left: 0;
      top: 0;
    }
  }  

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

const StyledContent = styled(DialogPrimitive.Content) <StyledContentProps>`
  padding: 0;
  margin: 0;
  max-width: 500px;
  width: 500px;
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.blockBG};

  &.error-message {
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    width: 100%;
    margin: 0;
    max-width: 100%;
    border-radius: 0;
    text-align: center;
    color: white;
    //background-image: url(${ERROR});
    background-position: 20px center;
    background-repeat: no-repeat;
    ${({ size, backgroundImg, type, theme }) =>
      `
      background-color: ${type === "alert" || type === "error" ? "#E83232"
                      : (type === "success" || type === "successToast"|| type === "loanCreated") ? theme.colors.statusGreen 
                      : "#081129"};
      background-image: url(${type === "alert" || type === "error" ? ERROR
                      : (type === "success" || type === "successToast"|| type === "loanCreated") ? SUCCESS 
                      : ERROR});
    `}
  
    h2 {
      margin: 0;
      padding: 0;
      font-size: 1rem;
      font-weight: 500;
      line-height: 38px;
    }
  }

  &.nft-details {
    max-width: 716px;
    width: 716px;
    padding: 30px 34px;
  }
  
  &.term-modal{
    width: 80%;
  }
  
  ${({ size, backgroundImg, type }) =>
    size === "large" &&
    `
    color: ${type === "alert" && "white"};
    color: ${type === "error" && "white"};
    display: ${type === "alert"  && "flex"} ;
    align-items: ${type === "alert" && "center"} ;
    justify-content: ${type === "alert" && "center"} ;
    height: ${type === "alert" && "40px"} ;
    max-width: ${type === "alert" && "100%"} ;
    background-color: ${type === "alert" ? "#E83232"
                      : (type === "success" || type === "successToast"|| type === "loanCreated") ? "7FFF00" 
                      : type === "error" ? "#E83232" 
                      : "#081129"};


    &.payback-modal{
      display:block;
    }
  `}

  &:focus {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 100%;
    margin: 54px 0 0;
    height: calc(100vh - 54px);
    
    ${({ backgroundImg, type }) =>
    `
        /*background-image: url(${type === "alert" 
        ? ModalBg : (type === "success" || type === "successToast"|| type === "loanCreated") ? SuccessAlertBg : type === "error" ? dangerAlertBg : backgroundImg || DialogSmallBgResponsive  
      });*/
        position:fixed;

      &.collateral-content{
        margin-top:130px !important;
      }       
      `
  }
`;

const StyledTitle = styled(DialogPrimitive.Title)`
  font-size: 1.5rem;
  font-weight: 500;
`;

const StyledDescription = styled(DialogPrimitive.Description)``;

// Exports
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = Content;
const DialogTitle = StyledTitle;
const DialogDescription = StyledDescription;
const DialogClose = DialogPrimitive.Close;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
};
