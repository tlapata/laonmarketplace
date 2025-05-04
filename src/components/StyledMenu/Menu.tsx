import React, { useState } from "react";
import styled from "styled-components";

import Dropdown from "react-bootstrap/Dropdown";
import useAuth from "hooks/useAuth";
import { useAppSelector } from "state";
import { useLoanData, useSetLoanState } from "state/hooks";
import { TierLevelEnum, TierTypeEnum } from "config/constants/types";
import { useWeb3React } from "@web3-react/core";

interface DropDownProps {
  children?: any;
  image?: any;
  imageAct?: any;
  text?: String;
  lan?: string;
  isChainDropdown?: boolean;
}
interface IDropDownItems {
  id: number;
  name: string;
  img: string;
  active: boolean;
  isGrayed: boolean;
  redirectLink: string;
}
const StyledMenu: React.FC<DropDownProps> = ({
  children,
  image,
  text,
  isChainDropdown,
}) => {
  const [dropDownItems] = React.useState<IDropDownItems[]>(children);
  const [showDropDown, setShowDropdown] = useState(false);

  const { logout } = useAuth();
  
  return (
    <StyledDropDown>
      <Dropdown
        onMouseLeave={() => setShowDropdown(false)}
        onMouseOver={() => setShowDropdown(true)}
        show={showDropDown}
      >
        {/* inline style are to fix the size and alignment with other elements in follow us card */}
        <Dropdown.Toggle id="dropdown-basic" style={{ marginTop: 0 }}>
          {image && (
            <>
              {isChainDropdown ? (
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_884_2700)">
                      <path d="M15.2387 13.5514L17.7292 16.0433L10.989 22.7894L4.24967 16.0442L6.74025 13.5514L10.9899 17.8268L15.2387 13.5514ZM19.4893 9.29804L22 11.7899L19.5112 14.2817L17.0207 11.7899L19.4893 9.29804ZM10.9899 9.29804L13.4796 11.7679L10.989 14.2606L8.49933 11.7899L10.989 9.29896L10.9899 9.29804ZM2.48967 9.29804L4.95917 11.7899L2.4915 14.2597L0 11.7899L2.48967 9.29804ZM10.9908 0.789429L17.7302 7.51448L15.2396 10.0054L10.9899 5.75202L6.74117 10.0274L4.25058 7.53558L10.9899 0.790346L10.9908 0.789429Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_884_2700">
                        <rect width="22" height="21.4211" fill="white" transform="translate(0 0.789429)"/>
                      </clipPath>
                    </defs>
                  </svg>
              ) : (
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9164 10.56L10.0346 11.4185C9.98846 11.4635 9.98846 11.5364 10.0346 11.5813L10.9164 12.4399C10.9626 12.4849 11.0374 12.4849 11.0836 12.4399L11.9654 11.5813C12.0115 11.5364 12.0115 11.4635 11.9654 11.4185L11.0836 10.56C11.0374 10.515 10.9626 10.515 10.9164 10.56Z" fill="#6567D1"/>
                  <path d="M10.9979 2.73682C6.02947 2.73585 2.00098 6.68464 2 11.5567C1.99937 14.7392 3.74685 17.6754 6.57294 19.2402C6.65928 19.289 6.76206 19.3015 6.85794 19.2748C6.95316 19.2487 7.03399 19.1869 7.08297 19.1027L9.8579 14.2936C9.95964 14.1169 9.89623 13.8927 9.71612 13.7927C8.45214 13.0966 8.00299 11.5274 8.71299 10.2879C9.42294 9.04846 11.0231 8.60801 12.2871 9.30421C13.5511 10.0004 14.0003 11.5695 13.2903 12.809C13.0543 13.2211 12.7072 13.5614 12.2871 13.7927C12.107 13.8927 12.0436 14.1169 12.1453 14.2936L14.9128 19.1027C14.9616 19.1872 15.0425 19.2493 15.1378 19.2755C15.1705 19.2848 15.2043 19.2895 15.2383 19.2894C15.303 19.2894 15.3665 19.2729 15.4228 19.2417C19.75 16.8476 21.2788 11.467 18.8374 7.22367C17.2417 4.45014 14.2454 2.73523 10.9979 2.73682Z"/>
                </svg>
              )}
            </>
          )}
          {text && <p className="tier-level">{text}</p>}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {dropDownItems.map((child, index) => (
            <Dropdown.Item
              onClick={(e) => {
                e.preventDefault();
                if (child.redirectLink) {
                  window.open(child.redirectLink);
                } else {
                  if (index === 2) {
                    logout();
                  }
                }
              }}
              key={child.id}
              className={child.isGrayed ? "grayed" : ""}
              disabled={child.isGrayed ? true : false}
            >
              {child.img && (
                <div>
                  <img
                    style={{ width: 22, height: 22, marginRight: "10px" }}
                    src={require(`./Icons/${child.img}`).default}
                    alt="logo"
                  />
                </div>
              )}
              <div style={{ color: "#8687BC" }}>{child.name}</div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </StyledDropDown>
  );
};

export const TierDropdown = () => {
  const { account } = useWeb3React()
  const [showDropDown, setShowDropdown] = useState(false);
  const tiers = useAppSelector((state) => state.loanBuilder.tiers) ?? [];
  const { setLoanBuilderState } = useSetLoanState();
  const { loanState } = useLoanData();
  
  const tierText =
    loanState?.tier?.tierLevel === TierLevelEnum.NO_TIER
      ? "No Level"
      : loanState?.tier?.tierLevel;

  return (
    <StyledDropDown>
      <Dropdown
        onMouseLeave={() => setShowDropdown(false)}
        onMouseOver={() => setShowDropdown(true)}
        show={showDropDown}
      >
        <Dropdown.Toggle id="dropdown-basic" style={{ marginTop: 0 }}>
          <div className={`tier-level level ${loanState?.tier?.tierLevel}`}>
            <div className="leftPaneText">Tier Member</div>
            <div className="tier-member">{tierText === TierTypeEnum.NO_TIER ? TierTypeEnum.NA : tierText}</div>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {account &&
            tiers?.map((child, ind: number) => (
              <Dropdown.Item
                key={ind}
                onClick={(e) => {
                  e.preventDefault();
                  setLoanBuilderState({ ...loanState, tier: child });
                }}
              >
                <div>
                  {child.tierType.split("_").join(" ")} - {child?.tierLevel}
                </div>
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </StyledDropDown>
  );
};

const StyledDropDown = styled.div`
  padding: 0;
  margin: 0;
  z-index: 9999;

  .grayed {
    opacity: 0.4;
  }
  
  .dropdown {
    .btn-primary {
      border: 0;
      box-shadow: none;
      border-radius: 0;
      color: ${({ theme }) => theme.colors.text};
      background: transparent;
      padding: 0;

      &:after {
        display: none;
      }
      &:focus {
        background-color: transparent;
        box-shadow: none;
        border: none;
      }

      .tier-level {
        line-height: 1.5;
        text-align: left;
        font-weight: 600;

        .tier-member {
          color: ${({ theme }) => theme.colors.textAccent};
        }

        ${({ theme }) => theme.mediaQueries.xs} {
          font-size: 14px;
        }
        ${({ theme }) => theme.mediaQueries.fold} {
          font-size: 10px !important;
        }
      }
    }

    .dropdown-menu {
      width: auto;
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.04);
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 49.92%, rgba(255, 255, 255, 0.02) 99.96%), linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50.08%, rgba(255, 255, 255, 0.02) 100%), ${({ theme }) => theme.colors.blockBG};
      box-shadow: 0px 22px 60px 0px rgba(0, 0, 0, 0.15);
      margin-top: 0;
      padding-top: 0;
      padding-bottom: 0;

      .dropdown-item {
        padding: 20px;
        font-weight: 500;
        display: flex;
        align-items: center;
        width: 100%;
        color: ${({ theme }) => theme.colors.text};

        img {
          margin-rigth: 10px;
        }

        &:hover,
        .dropdown-item.active {
          background: rgba(140, 235, 231, 0.1);
          color: ${({ theme }) => theme.colors.textAccent}
        }
      }

    }
  }
`;

export default StyledMenu;
