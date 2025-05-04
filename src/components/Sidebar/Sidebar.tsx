import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import SidebarBG from "assets/images/sidebar/bg.png";
import logo from "assets/images/sidebar/logo.svg";
import govLogo from "assets/images/sidebar/logo-sign.svg";
import menu from "assets/images/sidebar/menu.svg";
import List from "components/List/List";
import FeaturesMarquee from "components/FeaturesMarquee";
import Navbar from "components/Navbar/Navbar";

import Play from "assets/images/loanbuilder/play.svg";
import Pause from "assets/images/loanbuilder/pause.svg";
import URLS from "config/constants/urls";
import { Routes, routes } from "config/constants/routes";
import { Switch, Route } from "react-router-dom";
import useViewport from "hooks/useViewport";
import { useHistory } from "react-router-dom";


const Sidebar: React.FC = () => {
  const history = useHistory()
  const { width } = useViewport()
  const [open, setOpen] = React.useState(true);
  const [pause, setPause] = useState<boolean>(true);
  const playHandler = () => {
    setPause(!pause);
  };

  useEffect(() => {
    if (width < 769) {
      setOpen(false)
    }
  }, [width])


  return (
    <MainWrapper show={open}>
      <Container width={width}>
        <div id="mySidenav" className={`sidenav ${open && "active"}`}>
          <div className="logo-row">
            <div className="logo mainlogo">
              {open ? (
                <h2>Loan Market</h2>
              ) : (
                <div className="govLogo">
                  <h4>LM</h4>
                </div>
              )}
            </div>
            <div className="logo big-screen-only">
              <img
                src={menu}
                alt="menu"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </div>
          </div>
          <List isDrawerOpen={open} setDrawer={setOpen} />
        </div>
        <div id="main" className={`${open && "active"}`}>
          <div className="small-screen-only logo-wrapper">
            <img src={logo} alt="logo" onClick={() => history.push(Routes.DASHBOARD)} />
            <img
              src={menu}
              alt="menu"
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <Wrapper>
            <Navbar isDrawerOpen={open} />
            <MarqueWrapper>
              <img
                style={{ zIndex: 999 }}
                className="playImage"
                onClick={playHandler}
                src={!pause ? Play : Pause}
                alt=""
              />
              <FeaturesMarquee play={pause} />
            </MarqueWrapper>
            <Switch >
              {routes.map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          </Wrapper>
        </div>
      </Container>
    </MainWrapper>
  );
};

// Styled components
const MainWrapper = styled.div<{ show?: boolean }>`
  min-height: 100vh;
  height: 100vh;
  margin: 0;
  transition: background 0.5s ease;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  scrollbar-width: none;
`;

const Container = styled.div<{ width: number }>`
  #mySidenav {
    width: 80px;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url(${SidebarBG});
    background-position: 0 0;
    background-repeat: no-repeat;  
    background-color: ${({ theme }) => theme.colors.blockBG};
    scrollbar-color: ${({ theme }) => theme.colors.purple} ${({ theme }) => theme.colors.blockBG};
    scrollbar-width: none;

    .logo-row {
      margin-bottom: 40px;
      position: relative;

      .logo {
        &.big-screen-only {
          position: absolute;
          right: -10px;
          top: -24px;
          padding: 25px 2px 25px 6px;

          &::after {
            content: ' ';
            display: block;
            position: absolute;
            left: -23px;
            top: 12px;
            transform: rotate(270deg);
            border-bottom: 54px solid ${({ theme }) => theme.colors.bodyBackground};
            border-left: 26px solid transparent;
            border-right: 26px solid transparent;
            height: 0;
            width: 100px;
            z-index: 1;
          }
          
          img {
            cursor: pointer;
            position: relative;
            z-index: 3;
          }
        }
      }
  
      .mainlogo {
        height: 32px;
        width: auto;
        margin-top: -3px;
      }
  
      .govLogo{
        text-align: center;
      }      
    }

    .list-nav {
      height: 100%;

      nav {
        height: 100%;
        padding: 0;

        .nav-box {
          height: 100%;
          justify-content: space-between;

          hr{
            border-top: 1px dashed rgba(255, 255, 255, 0.6);
            background-color: transparent;
            margin: 16px -40px;
          }

          .mobile-only {
            .follow-icons {
              display: flex;
              justify-content: center;

              ${({ theme }) => theme.mediaQueries.xxs} {
                padding-bottom: 40px;
              }
            }
          }
        }
      }
    }

    ${({ theme }) => theme.mediaQueries.md}  {
      width:0px;
      padding:0px;
    }

    &.active {
      width: 332px;
      padding: 30px 40px;
      transition:width 0.1s ease-in-out;

      .logo-row {
        padding-left: 14px;

        .logo{
          &.big-screen-only {
            right: -40px;
          }
        }
      }

      .nav-box{
        button {
          width: 100%;
        }        
      }
    
      ${({ theme }) => theme.mediaQueries.md} { 
        width:100%;
        transition: width 0.1s ease-in-out;
        z-index: 1001;
        padding: 30px;

        .logo-row {
          padding-left: 0;
        }
      
        .mainlogo {
          display:flex;
          justify-content: space-between;
          height:auto;
          padding:0;
          margin-bottom:30px;
        }
    
        .list-nav {
          min-width:286px;
          max-width:100%;
          margin:0 auto;

          nav {
            width:100%;

          }
        }

        .big-screen-only {
          display:none;
        }
      }
    }
  }
  
  .grayed {
    opacity: 0.3;
  }

  #main {
    margin-left: 80px;
    padding: 30px 40px;
    width: ${(props) => ((props.width > 2100) ? "" : "calc(100vw - 80px)")};
 
    &.active {
      margin-left: 332px;
      width: ${(props) => ((props.width > 2100) ? "" : "calc(100vw - 332px)")};
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      .follow-icons {
        display:none;
      }
    }
    
    ${({ theme }) => theme.mediaQueries.md} {
        margin-left: 0px;
        width: 100%;
        padding: 30px;
  
        &.active {
          margin-left: 0px;
        }
  
        .logo-wrapper {
          display:flex;
          justify-content: space-between;
          z-index: 1000;
          position: relative;
          margin-bottom: 30px;
          align-items: center;
  
          img:last-child {
            height: 24px;
          }
        }

        .follow-icons {
          display:none;
        }
    }  
  }

  ${({ theme }) => theme.mediaQueries.fold} {
    .nav-box{
      width:80%;
    }
  }
`;

const FollowUsWrapper = styled("div")`
  width: 100%;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin: auto;
  margin-bottom: 20px;

  .follow-text {
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    margin-top: 12.49px;
    margin-bottom: 5px;
  }
  .secondary-txt {
    font-size: 12px;
    font-weight: normal;
  }
  .icons-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 29px;
    img {
      cursor: pointer;
    }
  }
  .dots-container {
    gap: 5.02px;
    margin-top: 15.97px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    min-width:276px;
    max-width:276px;
    padding:12px;
    margin:0 auto;
    margin-bottom: 20px;
    .follow-text {
      font-size: 17px;
      line-height: 24px;
    }
    .secondary-txt {
      font-size: 15px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
      text-align: left;
      font-family: Jost;
    }
  }
  ${({ theme }) => theme.mediaQueries.fold} {
    min-width:236px !important;
  }
`;

const Wrapper = styled.div``;

const MarqueWrapper = styled.div`
  position: relative;
  margin-top: 30px;

  .playImage {
    position: absolute;
    right: 33px;
    top: 6px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export default Sidebar;