import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";
import DialogLargeBg from "assets/images/loanbuilder/dialog-bg.png";

const overlayShow = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const contentShow = keyframes`
  0% { opacity: 0; transform: scale(.96); }
  100% { opacity: 1; transform: scale(1); }
`;

const StyledOverlay = styled(DialogPrimitive.Overlay)`
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
  backdrop-filter: blur(5px);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

type StyledContentProps = {
  size: "small" | "large";
  backgroundImg?: string;
};

const StyledContent = styled(DialogPrimitive.Content)<StyledContentProps>`
  padding-top: 88px;
  background-size: 100% 100%;
  background-position: center;
  color: #fff;
  width: 949px;
  height: 544px;
  background: url(${DialogLargeBg});
  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

function Content({ children, size, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay>
        <StyledContent size={size} {...props}>
          {children}
        </StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title)`
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  text-transform: capitalize;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: white;
  box-sizing: border-box;
  margin-bottom: 28px;
`;

const DialogSubtitle = styled(DialogPrimitive.Title)`
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  text-transform: capitalize;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LinkBox = styled.div`
  width: 444px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
`;

const AddressHolder = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  span {
    margin-right: 8.46px;
  }
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
  DialogSubtitle,
  LinkBox,
  AddressHolder,
};
