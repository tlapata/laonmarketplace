import { DashboardIcon, StatIcon, LeaderboardIcon, ApprovedIcon, ProtectionIcon, SettingsIcon } from "components/Svg";
import { Routes } from "config/constants/routes";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import useViewport from "hooks/useViewport";

const IconRouteSwitcher = () => {
  const history = useHistory();
  const { width } = useViewport();
  return (
    <>
      <IconsWrapper width={width}>
        <div 
          className={`svg-wrapper${history.location.pathname === Routes.DASHBOARD ? " active" : ""}`}
          onClick={() => history.push(Routes.DASHBOARD)}
        >
          <DashboardIcon />
        </div>
        <div 
          className={`svg-wrapper${history.location.pathname === Routes.MYSTATS ? " active" : ""}`}
          onClick={() => history.push(Routes.MYSTATS)}
        >
          <StatIcon />
        </div>
        <div 
          className={`svg-wrapper${history.location.pathname === Routes.LEADERFI ? " active" : ""}`}
          onClick={() => history.push(Routes.LEADERFI)}
        >
          <LeaderboardIcon />
        </div>
        <div 
            className={`svg-wrapper${history.location.pathname === Routes.APPROVED_TOKENS ? " active" : ""}`}
            onClick={() => history.push(Routes.APPROVED_TOKENS)}
        >
          <ApprovedIcon />
        </div>
        <div 
            className={`svg-wrapper${history.location.pathname === Routes.TOKENS_IN_CONTRACT ? " active" : ""}`}
            onClick={() => history.push(Routes.TOKENS_IN_CONTRACT)}
        >
          <ProtectionIcon />
        </div>
        {/*<div 
            className={`svg-wrapper${history.location.pathname === Routes.SETTINGS ? " active" : ""}`}
            onClick={() => history.push(Routes.SETTINGS)}
        >
          <SettingsIcon />
        </div>*/}
      </IconsWrapper>
    </>
  );
};

const IconsWrapper = styled.div<{ width: number }>`
  display: flex;

  .svg-wrapper {
    display: block;
    background: rgba(255, 255, 255, 0.03);
    width: 54px;
    height: 54px;
    line-height: 54px;
    text-align: center;
    border-radius: 4px;
    margin-left: 10px;

      svg {
        fill: ${({ theme }) => theme.colors.purple};
      }

      &:hover,
      &.active {
        background: rgba(255, 255, 255, 0.1);

        svg {
          fill: ${({ theme }) => theme.colors.textAccent};
        }
      }




      &:before {
        position: absolute;
        top: -5px !important;
        width: max-content;
        padding:0 10px;
        height: 34px;
        display: none;
        align-items: center;  
        justify-content: center;
        border: 1px solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to right, #f1c6ff, #bd0af8, #365cfc);
      }
      &.settings-icon {
        &:hover {
          &:before {
        
            content: "Dapp Settings";
            display: flex;
            right: 0px !important;
          }
        }
      }
      &.search-icon {
        &:hover {
          &:before {
            content: "Protection Reward Fund";
            display: flex;
            right: 29px !important;
          }
        }
      }
      &.dashboard-icon {
        &:hover {
          &:before {
            content: "Dashboard";
            display: flex;
            right: 200px !important;
          }
        }
      }
      &.tier-icon {
        &:hover {
          &:before {
            content: "My Stats";
            display: flex;
            right: 104px !important;
          }
        }
      }
      &.token-icon {
      
        &:hover {
          &:before {
            content: "Approved Tokens";
            display: flex;
            right: 51px !important;
          }
        }
      }
      &.leaderboard-icon {
        &:hover {
          &:before {
            content: "Leaderboard";
            display: flex;
            right: 121px !important;
          }
        }
      }
  }

  .svg-icons {
    margin-left: 10px;
    &.dashboard-active {
      filter:none;
    }
    &.dashboard {
      filter:brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(44deg) brightness(114%) contrast(105%);
      &:hover {
          filter:none;
      }
    }
    &.setting-active {
     
      align-self: center;
        filter:none;
    }
    &.settings {
      
      align-self: center;
      filter:brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(44deg) brightness(114%) contrast(105%);
      &:hover {
          filter:none;
      }

    }
  
    &.search {
      align-self: center;
      &:hover {
         path{
          fill: url(#paint0_linear_9462_2421) !important; 
        }
      }
    }
    &.tier-active {
      filter:none;
    }
    &.tier {
      filter:brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(44deg) brightness(114%) contrast(105%);
      &:hover {
          filter:none;
      }
    }
    &.token-active {
      height: 22px;
      width:27px;
      filter:none;
    }
    &.token {
      height: 22px;
      width:27px;
      filter:brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(44deg) brightness(114%) contrast(105%);
      &:hover {
          filter:none;
      }
    }
    &.leaderboard-active {
      filter:none;
    }
    &.leaderboard {
      filter:brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(7500%) hue-rotate(44deg) brightness(114%) contrast(105%);
      &:hover {
          filter:none;
      }
    }
    ${({ theme }) => theme.mediaQueries.sm}{ 
      margin-left: 6px;
      width: 23px !important;
      height: 22px ;
     
    }
    ${({ theme }) => theme.mediaQueries.xs}{ 
      margin-left: 5px;
      width: 21px !important;
      height: 20px ;
    }
    ${({ theme }) => theme.mediaQueries.fold}{
      width: 15px !important;
      height: 15px ;
      margin-left: 10px !important;
    }
  }
`;

export default IconRouteSwitcher;
