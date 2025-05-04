import React, { useEffect, useState } from "react";
import styled from "styled-components";
import URLS from "config/constants/urls";
import ReactTooltip from "react-tooltip";
import { TierDropdown } from "components/StyledMenu/Menu";
import StyledMenu from "components/StyledMenu";
import { WalletIcon, TelegramIcon, TwitterIcon, EmailIcon, DisconnectIcon } from "components/Svg";
import QualifiedToBorrow from "views/Dashboard/QualifiedToBorrow";

import rectangle from "assets/images/loanbuilder/rectangle.svg";
import rectangle1 from "assets/images/loanbuilder/rectangle2.svg";
import rectangle_purple from "assets/images/loanbuilder/rectangle-purple.svg";
import useAuth from "hooks/useAuth";
import { useWeb3React } from "@web3-react/core";
import useBalance from "hooks/useBalance";
import { useApolloClient } from "@apollo/client";
import { GET_APY_INFO } from "utils/graphQueries/queries";
import { reduceNumber, toCommas } from "utils/conversion";
import { useLoanData } from "state/hooks";
import EmailDialogue from "components/EmailDialog";
import { configGraphQL as config } from "config/constants/config";
import adImage from "assets/images/ads.png";
import { fetchNetworkDetail } from "utils/wallet";
import { isMobile } from "mobile-device-detect";
import { NetWorkChainId } from "config/constants/types";

interface NavbarProps {
  isDrawerOpen?: boolean;
}

const initialData = {
  apy: 0,
  gov: 0,
  totalTvl: 0,
  activeTvl: 0,
};

const chains = [
  {
    id: 0,
    name: "BSC",
    img: "binance.svg",
    active: false,
    isGrayed: false,
  },
  {
    id: 1,
    name: "Ethereum",
    img: "ethlogo.svg",
    active: true,
    isGrayed: true,
  },

  {
    id: 2,
    name: "polygon",
    img: "polygon.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 3,
    name: "cardano",
    img: "cardano.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 4,
    name: "avalanche",
    img: "avalanche.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 5,
    name: "polkadot",
    img: "polkadot.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 6,
    name: "solana",
    img: "solana.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 7,
    name: "fantom",
    img: "fantom.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 8,
    name: "Xdai",
    img: "dai.svg",
    active: false,
    isGrayed: true,
  },
  {
    id: 9,
    name: "heco",
    img: "heco.svg",
    active: false,
    isGrayed: true,
  },
];

const Navbar: React.FC<NavbarProps> = ({ isDrawerOpen }) => {
  const { login, logout } = useAuth();
  const { account, chainId } = useWeb3React();
  const { etherBalance } = useBalance();
  const client = useApolloClient();
  const [loading, setLoaing] = useState(false);
  const { loanState } = useLoanData();
  const [headerData, setHeaderData] = useState(initialData);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);

  useEffect(() => {
    const getApyInfo = () => {
      setLoaing(true);
      client
        .query({
          query: GET_APY_INFO,
          variables: { chainId: chainId ? chainId : NetWorkChainId.BSC },
        })
        .then((res) => {
          setLoaing(false);
          const info_data = res.data.getApyInfo;
          setHeaderData(info_data);
        })
        .catch((err) => {
          setLoaing(false);
        });
    };
    // if (account) {
    getApyInfo();
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, chainId]);


  return (
    <NavbarWrapper>
      <LandingNav isDrawerOpen={isDrawerOpen}>
        <div className="d-flex justify-content-between panes-wrapper">
          <div className="header-left">
            <div className="follow-icons">
              <a href={URLS.telegram} target="_blank" className="icon-svg-wrapper">
                <TelegramIcon />
              </a>
              <a href={URLS.twitter} target="_blank" className="icon-svg-wrapper">
                <TwitterIcon />              
              </a>
            </div>
            <div className="left-pane">
              <TierDropdown />
              {/*<ReactTooltip />*/}
              <QualifiedToBorrow />
              <StyledLink>
                <div className="leftPaneText">Total TVL</div>
                <span className="headerapy" data-tip={headerData?.totalTvl}>
                  $
                  {loading
                    ? "..."
                    : headerData?.totalTvl && toCommas(headerData?.totalTvl, 4)}
                </span>
              </StyledLink>
              <StyledLink>
                <span className="leftPaneText">Active TVL</span>
                <span className="headerapy" data-tip={headerData?.activeTvl}>
                  $
                  {loading
                    ? "..."
                    : headerData?.totalTvl && toCommas(headerData?.activeTvl, 4)}
                </span>
              </StyledLink>
              <StyledLink>
                <div className="leftPaneText">Stablecoin Average APY</div>
                <span className="headerapy" data-tip={headerData?.apy}>
                  {loading
                    ? "..."
                    : headerData?.apy &&
                      reduceNumber(headerData?.apy.toFixed(), 4)}
                  %
                </span>
              </StyledLink>
            </div>
          </div>
          <div className="right-pane">
            <Tab
              onMouseLeave={() => account && setShowDropdown(false)}
              onMouseOver={() => account && setShowDropdown(true)}
              active={account ? true : false}
              onClick={() => {
                if (isMobile) {
                  if (
                    !account &&
                    navigator.userAgent.match(
                      /chrome|chromium|crios|Firefox|fxios|safari|edg|opr/i
                    )
                  ) {
                    window.location.href = `https://metamask.app.link/dapp/${window.location.host}`;
                    login();
                  } else {
                    login();
                  }
                } else {
                  if (!account) {
                    login();
                  }
                }
              }}
            >
              <div className={account ? "wallet-button connected" : "wallet-button"}>
                <WalletIcon />
                {loanState.walletConnectionLoader ? (
                  <span className="connecting">
                    Connecting...
                  </span>
                ) : (
                  <>
                    <div className="wallet-data">
                      <span className="connectContent">
                        {account
                          ? `${account.slice(0, 3)}...${account.slice(
                              account.length - 5,
                              account.length + 1
                            )}`
                          : "Connect Wallet"}
                      </span>
                      <span>
                      {account &&
                        Math.floor(Number(etherBalance) * 1000) / 1000}{" "}
                      {account &&
                        fetchNetworkDetail(chainId)?.nativeCurrency?.name}
                      </span>
                    </div>
                  </>
                )}
              </div>
              {account && !loanState.walletConnectionLoader && showDropdown && (
                <div className="toggleDropdown">
                  <p>
                    <EmailIcon />
                    <span>
                      <EmailText onClick={() => setOpenEmail(true)}>
                        Add Email
                      </EmailText>
                    </span>
                  </p>
                  <hr/>
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      logout();
                    }}
                  >
                    <DisconnectIcon />
                    <span>
                      <EmailText>Disconnect</EmailText>
                    </span>
                  </p>
                </div>
              )}
            </Tab>
          </div>
        </div>
        <EmailDialogue open={openEmail} setOpen={setOpenEmail} />
      </LandingNav>
    </NavbarWrapper>
  );
};

const NavbarWrapper = styled.div`
  position: relative;
  z-index: 1000;

  .img-wrapper {
    display: flex;
    position: sticky;
    gap: 0;
    align-content: flex-start;
    flex-wrap: no-wrap;
    div {
      margin-top: 10px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      img {
        width: 100%;
        object-fit: fill;
      }
    }
    .second {
      padding: 0;
      margin-right: -2px;
      margin-left: -2px;
      @media (max-width: 1281px) {
        margin-left: -2.2px;
        margin-right: -2.2px;
      }
      @media (min-width: 1920px) {
        margin-left: -3px;
        margin-right: -3px;
      }

      img {
        margin-top: -25.6px;
        @media (min-width: 1920px) {
          margin-top: -24.9px;
        }
      }
    }
  }
`;

const LandingNav = styled.div<{ isDrawerOpen }>`
  .header-left{
    display: flex;

    .follow-icons {
      display: flex;

      .icon-svg-wrapper{
        &:last-child{
          margin-right: 0;
        }
      }
    }

    .left-pane {
      display:flex;
      align-items:center;
      font-weight: 600;

      &::before{
        content: '';
        width: 2px;
        height: 26px;
        background: rgba(255, 255, 255, 0.06);
        margin: 0 40px;

        ${({ theme }) => theme.mediaQueries.lg} {
          display:none;
        }
      }

      .leftPaneText{
          font-size: 0.75rem;
      }

      .headerapy{
          display: block;
          font-size: 1rem;

          &.green {
            color: ${({ theme }) => theme.colors.green};
          }
      }
    }

    ${({ theme }) => theme.mediaQueries.md} {
      margin-bottom: 30px;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    .panes-wrapper {
        flex-direction: column;
        
        .right-pane {
          order:1;
          margin:0;
          justify-content: flex-end;
          width: 100%;
          padding:0;
          margin-bottom: 30px;
        }
        
        .left-pane {
          order:3;
          width:100%;
          margin:0;
          padding:0 12px;
          justify-content: space-between;

          .leftPaneText{
            white-space: normal;
          }
          .headerapy {
            text-align:left;
          }
        
          ${({ theme }) => theme.mediaQueries.md} {
            padding: 0;
            align-items: self-start;
            
          }
        }
    }
  }

  .modalIconHover{
      z-index: 99999;
      text-align: center;
      img {
          margin-bottom:0 !important; // for new header design
      }
  }

  .center-pane { 
      margin-left:auto;
      margin-right:auto;
      margin-bottom: 10px;
      margin-top:-29px;
      position:relative;
      z-index: -9999;
      @media(max-width:3840px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-130px" : "-120px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "1050px" : "990px")};
          img {
              width:${(props) => (!props.isDrawerOpen ? "1450px" : "1382px")};
              margin:0 auto;
          }
      }
      @media(max-width:2560px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-88px" : "-78px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "660px" : "600px")};
          img {
              width:${(props) => (!props.isDrawerOpen ? "965px" : "882px")};
              margin:0 auto;
          }
      }

      @media(max-width:1921px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-65px" : "-59px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "470px" : "402px")};
          img {
              width:${(props) => (!props.isDrawerOpen ? "700px" : "642px")};
              margin:0 auto;

          }
      }

      @media(max-width:1681px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-55px" : "-50px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "395px" : "330px")};


          img {
              width:${(props) => (!props.isDrawerOpen ? "610px" : "548px")};
              margin:0 auto;

          }
      }
      @media(max-width:1537px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-35px" : "-40px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "340px" : "290px")};


          img {
              width:${(props) => (!props.isDrawerOpen ? "570px" : "485px")};
              margin:0 auto;

          }
      }
      
      @media(max-width:1441px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-48px" : "-39px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "314px" : "260px")};


          img {
              width:${(props) => (!props.isDrawerOpen ? "525px" : "92%")};
              margin:0 auto;

          }
      }
      
      @media(max-width:1367px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-44px" : "-36px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "295px" : "240px")};


          img {
              width:${(props) => (!props.isDrawerOpen ? "100%" : "86%")};
              margin:0 auto;

          }
      }


      @media(max-width:1281px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-39px" : "-35px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "265px" : "208px")};


          img {
              width:${(props) => (!props.isDrawerOpen ? "460px" : "80%")};
          
              margin:0 auto;

          }
      }

      @media(max-width:1025px) {
          margin-top:${(props) => (!props.isDrawerOpen ? "-30px" : "-25px")};
          padding:0 100px;
          margin-left:${(props) => (!props.isDrawerOpen ? "189px" : "130px")};
          margin-right: 11px;

          img {
              width:${(props) => (!props.isDrawerOpen ? "360px" : "70%")};
              margin:0 auto;

          }
      }
  }

  .right-pane {
      display:flex;
      align-items:center;
      gap:10px;
      justify-content: center;
      align-items: center;

      ${({ theme }) => theme.mediaQueries.fold} {
        flex-wrap:wrap;
        gap:0;
      }

      .dropdown {
        .btn-primary {
          border: 0;
          box-shadow: none;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.03);
          height: 54px;
          width: 54px;
          line-height: 54px;
          padding: 0;
          text-align: center;
          color: ${({ theme }) => theme.colors.text};

          svg {
            fill: ${({ theme }) => theme.colors.purple};
          }

          &:hover,
          &[aria-expanded="true"]{
            background-color: rgba(255, 255, 255, 0.1);

            svg{
              fill: ${({ theme }) => theme.colors.textAccent};
            }
          }
        }
      }

      .level{
          font-weight: 500;
          font-size: 15px;
          text-transform: uppercase;
          text-align: center;
          span {
              text-transform: capitalize;
          }
      }
      .AllStar{
          background: linear-gradient(0deg,#90ffd2,#90ffd2), linear-gradient(90deg,#f1c6ff -3.79%,#e084ff 44.81%,#8da3ff 64.43%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
      .Platinum{
          background: linear-gradient(90deg, rgb(234, 250, 253) 0%, rgb(88, 228, 220) 26.93%, rgb(208, 246, 255) 69.03%, rgb(88, 228, 220) 99.41%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
      .Silver{
          background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(153, 153, 153) 26.93%, rgb(255, 255, 255) 69.03%, rgb(126, 126, 126) 99.41%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
      .Bronze{
          background: linear-gradient(90deg, rgb(255, 236, 215) 0%, rgb(149, 108, 59) 26.93%, rgb(255, 240, 222) 69.03%, rgb(194, 144, 86) 99.41%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
      }
      .Gold{
          color: #FCC536;
      }

      img {
          @media(min-width:1920px) {
            width:30px;
          }
          @media (max-width:1537px) {
              width:24px;
          }
      }

      .wallet-info{
          background-size:100%;
          background: url(${rectangle1}) right bottom no-repeat, url(${rectangle}) left top no-repeat;
          border-radius: 0.222643px;
          width: 134.92px;
          min-height: 14.69px;
          background-clip:padding-box;    
    
          
    
        @media(max-width:1367px) {
          min-height: 12.7px;
          width: 120.92px;
      }
      @media(max-width:1281px) {
          min-height: 12.69px;
          width: 110.92px;
      }
      @media(max-width:1025px) {
          min-height: 12.69px;
          width: 80px;
      }
          p {
            background: rgba(255, 255, 255, 0.25);
            background-clip:content-box;    
            font-style: normal;
            font-weight: 800;
            font-size: 9px;
            line-height: 13px;
            align-items: center;
            justify-content:center;
            display:flex;
            @media(max-width:1367px) {
              font-size: 9px;
              gap:2px;
      
            }
            @media(max-width:1281px) {
              font-size: 9px;
              gap:2px;
            
          }
            @media(max-width:1024px) {
                font-size:6px;
            
      
            }
            text-align: center;
            margin:auto;
            color: #FFFFFF;
            
            span {
            font-family: Jost Regular;
            font-style: normal;
            font-weight: normal;
            font-size: 9px;
            line-height: 13px;
            display: flex;
            align-items: center;
            text-align: center;
            padding:4px;
      
            color: #FFFFFF;
            @media(max-width:1024px) {
              font-size:6px;
              padding:2px;
          
    
          }
            }
        }
  }
`;

const StyledLink = styled.div`
  margin-left: 30px;
`;

const Tab = styled.div<{ active?: Boolean }>`
  position: relative;
  text-align: center;
  cursor: pointer;

  .wallet-button{
    display: flex;
    position: relative;
    padding: 16px 20px;
    border: none;
    outline: none;
    z-index: 1;
    border-radius: 4px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.textAccent});
    cursor: pointer;
    width: 185px;
    height: 54px;
    text-align: left;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    
    &::before {
      content: "";
      position: absolute;
      left: 2px;
      right: 2px;
      top: 2px;
      bottom: 2px;
      border-radius: 4px;
      background: ${(props) => ((props.active) ? "linear-gradient(to right, #6567D1, #12938D)" : ({ theme }) => theme.colors.blockBG )};
      z-index: -1;
      transition: 200ms
    }

    &::after {
      content: attr(data);
      background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.textAccent});
      -webkit-background-clip: text;
      color: transparent;
      transition: 200ms
    }

    svg{
      fill: ${({ theme }) => theme.colors.purple};
      width: 22px;
      height: 22px;
      margin-right: 10px;
    }

    .wallet-data {
      display: flex;
      flex-direction: column;
      margin-left: 2px;

      .connectContent{
        font-size: ${(props) => ((props.active) ? "0.75rem" : "1rem" )};
        height: ${(props) => ((props.active) ? "14px" : "auto" )};
        margin-top: ${(props) => ((props.active) ? "-7px" : "0" )};
        letter-spacing: ${(props) => ((props.active) ? "0" : "-.5px" )};
      }
    }
    
    &:hover {
      color: white;
    
      &::before {
        opacity: 0%;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
      }

      &::after{
        color: white;
      }

      svg{
        fill: white;
      }
    }

    &.connected {
      background: linear-gradient(to right, ${({ theme }) => theme.colors.purple}, ${({ theme }) => theme.colors.darkGreen});
      color: white;

      svg {
        fill: white;
      }
    }
  }

  .toggleDropdown {
    position: absolute;
    width: 100%;
    right: 0;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.blockBG};
    font-size: 1rem;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.04);
    box-shadow: 0px 22px 60px 0px rgba(0, 0, 0, 0.15);

    hr {
      opacity: 0.06;
      background: white;
      width: 100%;
      margin: 0;
    }

    p {
      width: 100%;
      display: flex;
      justify-content: start;
      background: transparent;
      padding: 22px 30px;
      border: none;
      margin: 0;

      svg {
        width: 22px;
        height: 22px;
        margin-right: 10px;
        fill: ${({ theme }) => theme.colors.purple};
      }

      &:hover {
        background: rgba(140, 235, 231, 0.1);
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 184px;
  }
  ${({ theme }) => theme.mediaQueries.fold} {
    width: 248px;
  }

  p.summary {
    width: 118px;
    height: 27px;
  }
  &.button {
    background: none !important;
  }
`;

const EmailText = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  width: 100%;
  height: 22px;
  margin: 0;
  display: flex;
  justify-content: start;
  background: transparent;
`;

export default Navbar;