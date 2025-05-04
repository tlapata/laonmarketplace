import { useState } from "react";
import { DashboardIcon, StatIcon, LeaderboardIcon, ApprovedIcon, ProtectionIcon, MarketIcon, LendIcon, GovPadIcon, FairlaunchIcon, ClaimboardIcon, StakingIcon, RentIcon, SettingsIcon, WhitepaperIcon, TelegramIcon, TwitterIcon } from "components/Svg";
import URLS from "config/constants/urls";

import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { useHistory, useLocation } from "react-router-dom";
import { Routes } from "config/constants/routes";
import MenuList from "components/Elements/MenuList";
import { useAppDispatch } from "state";
import { resetLB } from "state/app";
import ReactTooltip from "react-tooltip";
import { setCurrentTab } from "views/Marketplace/loansSlice";
import useViewport from "hooks/useViewport";

interface SidebarProps {
  isDrawerOpen?: boolean;
  setDrawer?: any;
}

const FireNav = styled(List)<{ component?: React.ElementType }>({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 20,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});


const Sidebar: React.FC<SidebarProps> = ({ isDrawerOpen, setDrawer }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { width } = useViewport();
  const [open] = useState(false);
  const history = useHistory();
  const items = [
    {
      id: 1,
      text: "Dashboard",
      img: "dashboard.svg",
      route: Routes.DASHBOARD,
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <DashboardIcon />,
      parent: true,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 11,
      text: "My Stats",
      img: "statis.svg",
      route: Routes.MYSTATS,
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <StatIcon />,
      parent: false,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 12,
      text: "Leaderboard",
      img: "statis.svg",
      route: Routes.LEADERFI,
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <LeaderboardIcon />,
      parent: false
    },
    {
      id: 13,
      text: "Approved Tokens",
      img: "statis.svg",
      route: Routes.APPROVED_TOKENS,
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <ApprovedIcon />,
      parent: false,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 14,
      text: "Protection Reward",
      img: "statis.svg",
      route: Routes.TOKENS_IN_CONTRACT,
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <ProtectionIcon />,
      parent: false,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 2,
      text: "Loan Marketplace",
      img: "market.svg",
      route: Routes.LOANMARKETPLACE,
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <MarketIcon />,
      parent: true,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 3,
      text: "Loan Builder",
      img: "lend.svg",
      route: Routes.LOANBUILDER,
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <LendIcon />,
      parent: true,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 7,
      text: "LoanPad",
      img: "govpad.svg",
      /*route: Routes.GOVPAD,*/
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <GovPadIcon />,
      parent: true,
      bottom: false,
      redirectLink: ""
    },
    {
      id: 8,
      text: "MemeFolio",
      img: "fairlaunch.svg",
      /*route: Routes.FAIRLAUNCH,*/
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <FairlaunchIcon />,
      parent: true,
    },
    /*{
      id: 5,
      text: "Claimboard",
      img: "claim.svg",
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <ClaimboardIcon />,
      parent: true,
    },*/
    {
      id: 6,
      text: "Staking",
      img: "staking.svg",
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <StakingIcon />,
      parent: true,
      bottom: false,
      redirectLink: ""
    },
    /*{
      id: 4,
      text: "NFT Rental Income",
      img: "rent.svg",
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <RentIcon />
    },*/
    {
      id: 15,
      text: "Settings",
      img: "govpad.svg",
      route: Routes.SETTINGS,
      isMenu: false,
      openSubMenu: true,
      active: true,
      options: [],
      isGrayedOut: false,
      icon: <SettingsIcon />,
      parent: true,
      bottom: true,
      redirectLink: ""
    },
    {
      id: 17,
      text: "Docs",
      img: "rent.svg",
      isMenu: false,
      openSubMenu: false,
      active: false,
      options: [],
      isGrayedOut: false,
      icon: <WhitepaperIcon />,
      parent: true,
      bottom: true,
      redirectLink: "#",
    },
    /*{
      id: 16,
      text: "Whitepaper Audit",
      img: "rent.svg",
      isMenu: false,
      openSubMenu: true,
      active: false,
      options: [],
      isGrayedOut: true,
      icon: <WhitepaperIcon />
    },*/
];

  const handelClick = (route: string) => {
    if (route === Routes.LOANBUILDER) {
      dispatch(resetLB());
    }
    dispatch(setCurrentTab("offers"));
    history.push(route);
    if (width < 769) {
      setDrawer(!true);
    }

  };

  const topMenu = items.filter((item) => !item.bottom).map((item) => item);
  const bottomMenu = items.filter((item) => item.bottom).map((item) => item);

  return (
    <>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: "dark",
            primary: { main: "#8687BC" },
            background: { paper: "transparent" },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 264, px: "0px", my: "0px" }} className="list-nav">
          <FireNav component="nav" disablePadding sx={{ pb: "100px" }}>
            <Box
              sx={{
                pb: open ? 2 : 0,
                position: "relative",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
              className="nav-box"
            >
              <>
                <div className="top">
                {topMenu.map((item, index) => (
                  <>
                    <MenuList
                      key={item.id}
                      onClick={() => handelClick(item.route)}
                      open={isDrawerOpen}
                      active={location.pathname === item.route}
                      className={item.isGrayedOut ? "grayed" : ""}
                      style={{
                        display: item.parent ? "block" : "none",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                        className="inner-nav-item"
                        data-tip={`${item.isGrayedOut ? "Coming soon" : ""}`}
                      >
                        <div>
                          {item.icon}
                        </div>
                        <ReactTooltip />
                        {isDrawerOpen && (
                          <div
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {item.text}
                          </div>
                        )}
                      </div>
                    </MenuList>
                  </>
                ))}
                </div>
                <div className="bottom">
                  <hr/>
                  {bottomMenu.map((item) => (
                      <MenuList
                        key={item.id}
                        onClick={() => {
                          if( item.redirectLink.length > 0 ){
                            window.location.href = item.redirectLink;
                        } else {
                            handelClick(item.route)
                          }
                        }}
                        open={isDrawerOpen}
                        active={location.pathname === item.route}
                        className={item.isGrayedOut ? "grayed" : ""}
                        style={{
                          display: item.parent ? "block" : "none",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="inner-nav-item"
                          data-tip={`${item.isGrayedOut ? "Coming soon" : ""}`}
                        >
                          <div>
                            {item.icon}
                          </div>
                          <ReactTooltip />
                          {isDrawerOpen && (
                            <div
                              style={{ whiteSpace: "nowrap" }}
                            >
                              {item.text}
                            </div>
                          )}
                        </div>
                      </MenuList>
                  ))}
                  <div className="mobile-only">
                    <hr/>
                    <div className="follow-icons">
                      <a href={URLS.telegram} target="_blank" className="icon-svg-wrapper">
                        <TelegramIcon />
                      </a>
                      <a href={URLS.twitter} target="_blank" className="icon-svg-wrapper">
                        <TwitterIcon />              
                      </a>
                    </div>
                  </div>
                </div>
              </>
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Sidebar;