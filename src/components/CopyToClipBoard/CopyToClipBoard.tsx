import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Popper } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copyIcon from "assets/images/loanbuilder/copyiconnew.svg"
interface Iprop {
  textToCopy: string;
}

const CopyDataToClipBoard: React.FC<Iprop> = ({ textToCopy }) => {
  const [openCopiedPopper, setOpenCopiedPopper] = useState(false);
  const [anchorCopy, setAnchorCopy] = useState(null);
  const copiedContentRef = useRef(null);

  return (
    <>
      <CopyToClipboard text={textToCopy}>
        <CopyIcon
          onMouseLeave={() => setOpenCopiedPopper(false)}
          onClick={(e) => {
            setOpenCopiedPopper(true);
            setAnchorCopy(e.currentTarget);
          }}
          className="pointer"
        ><img src={copyIcon} alt="" /></CopyIcon>
      </CopyToClipboard>
      <Popper open={openCopiedPopper} anchorEl={anchorCopy} placement="top" style={{ zIndex: 1 }}>
        <CopiedPopperContent ref={copiedContentRef}>Copied</CopiedPopperContent>
      </Popper>
    </>
  );
};
const CopyIcon = styled.span`
max-width:20px;
`;
const CopiedPopperContent = styled.div`
  background: ${(props) => props.theme.colors.backgroundInvert} !important;
  box-shadow: ${(props) => props.theme.shadows.popperSecondary};
  border-radius: 4px;
  font-size: 1rem;
  width: max-content;
  height: 20px;
  padding: 2px;
  text-align: center;
  display:flex;
  align-items:center;
`;

export default CopyDataToClipBoard;
