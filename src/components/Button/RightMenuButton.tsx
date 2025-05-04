import React, { useRef, useState } from "react";
import styled from "styled-components";
import Menu1 from "../Icons/Menu";
import useOutsideClick from "hooks/useOutsideClick";
import Menu from "@mui/material/Menu";

interface MenuButtonProps {
  style?: React.CSSProperties;
  onClick?: any;
  ref?: any;
}

const RightMenuButton: React.FC<
  MenuButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ style }) => {
  const [, setOpenButtonPopper] = useState(false);
  const popperMenuButtonRef = useRef(null);
  const popperMenuRef = useRef(null);
  useOutsideClick(
    [popperMenuRef, popperMenuButtonRef],
    () => setOpenButtonPopper(false),
    []
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (open) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <RightButton
        style={style}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Menu1 />
      </RightButton>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <PopperMenuContent>
          <HeaderMenu>Earned GOV</HeaderMenu>
          <HeaderContent>
            <Title>$17,467</Title>
            <Value>3,572 GOV</Value>
          </HeaderContent>
          <HeaderMenu>Earned APY Fees</HeaderMenu>
          <HeaderContent>
            <Title>$5,711</Title>
            <Value>
              USDT <span style={{ color: "#A8B0C5" }}>USDC DAI</span>
            </Value>
          </HeaderContent>
          <HeaderMenu>Completed Loans</HeaderMenu>
          <HeaderContent>
            <Title>$3,456</Title>
            <Value>
              <span style={{ color: "#A8B0C5" }}>Altcoin</span> Stablecoin
            </Value>
          </HeaderContent>
          <HeaderMenu>Liquidated Collateral</HeaderMenu>
          <HeaderContent>
            <Title>$1,756</Title>
            <Value>
              Altcoin <span style={{ color: "#A8B0C5" }}>Stablecoin</span>
            </Value>
          </HeaderContent>
        </PopperMenuContent>
      </Menu>
    </>
  );
};

const RightButton = styled.button`
  width: 40px;
  background: linear-gradient(180deg, #c330f3 0%, #365cfc 100%);
  border-radius: 7.0243px 0px 0px 7.0243px;
  padding: 13px 13px 15px 10px;
  position: absolute;
  right: 0;
  top: 22px;
  border: 0px;
`;
const PopperMenuContent = styled.div`
  width: 333px;
  height: 530px;
  overflow-y: scroll;
  background: ${(props) => (props.theme.isDark ? "#141E40" : "#FFFFFF")};
  border-radius: 25px 0px 0px 25px;
  box-shadow: ${(props) =>
    props.theme.isDark
      ? "0px 4px 40px rgba(255, 255, 255, 0.07)"
      : " 0px 4px 40px rgba(0, 0, 0, 0.07)"};
`;
const HeaderMenu = styled.p`
  font-weight: 600;
  font-size: 13.2132px;
  line-height: 150%;
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => (props.theme.isDark ? "#FFFFFF" : "#141E40")};
  padding: 10px 50px;
  background: ${(props) => (props.theme.isDark ? "#1C2954" : "#F5F6FA")};
  margin-bottom: 0px;
`;
const HeaderContent = styled.p`
  margin-bottom: 0px;
`;
const Title = styled.p`
  padding: 21px 0px;
  margin-bottom: 0px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  text-transform: capitalize;
  color: #6ad050;
`;
const Value = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 5px;
  text-transform: capitalize;
  color: #315efb;
`;

export default RightMenuButton;
