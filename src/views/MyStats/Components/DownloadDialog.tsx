import * as DialogPrimitive from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";

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
  background: linear-gradient(
      90deg,
      rgba(241, 198, 255, 0.2) -16.66%,
      rgba(189, 10, 248, 0.2) 24.05%,
      rgba(54, 92, 252, 0.2) 99.31%
    ),
    linear-gradient(0deg, rgba(18, 18, 18, 0.2), rgba(18, 18, 18, 0.2));

  @media (prefers-reduced-motion: no-preference) {
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

type StyledContentProps = {
  backgroundImg?: string;
};

const StyledContent = styled(DialogPrimitive.Content)<StyledContentProps>`
  padding: 55px 25px 55px 40px;
  min-width: 370.8px;
  width: 740px;
  height: 148px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  text-align: center;
`;

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay>
        <StyledContent {...props}>{children}</StyledContent>
      </StyledOverlay>
    </DialogPrimitive.Portal>
  );
}

const StyledTitle = styled(DialogPrimitive.Title)`
  font-family: "Organetto Ultra Bold", sans-serif;
  font-size: 19px;
  font-weight: 800;
  line-height: 25px;
  color: #fff;
  margin-bottom: 20px;
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
