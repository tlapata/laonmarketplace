import { lazy } from "react";
import MyStats from "views/MyStats";
import LoanDetails from "views/MyStats/Components/LoanDetails";
const LoanBuilder = lazy(() => import("views/LoanBuilder"));
const Marketplace = lazy(() => import("views/Marketplace"));
const Dashboard = lazy(() => import("views/Dashboard"));
const LeaderFi = lazy(() => import("views/LeaderFi"));
const ApprovedCollateralTokens = lazy(() => import("views/ApprovedCollateralTokens"));
const TokensInContract = lazy(() => import("views/TokensInContract"));
const Settings = lazy(() => import("views/Settings"));
const ComingSoon = lazy(() => import("views/comingsoonview"));

export enum Routes {
  DASHBOARD = "/",
  LOANMARKETPLACE = "/loan-market",
  LOANBUILDER = "/loan-builder",
  LEADERFI = "/leaderboard",
  MYSTATS = "/my-stats",
  DETAILS = "/loan-details",
  APPROVED_TOKENS = "/approved-tokens",
  TOKENS_IN_CONTRACT = "/all-tokens",
  SETTINGS= "/settings",
  GOVPAD = "/loanpad",
  FAIRLAUNCH = "/fairlaunch",
}

export const routes = [
  {
    path: "/",
    component: Dashboard,
    exact: true,
  },
  {
    path: `${Routes.LOANBUILDER}`,
    component: LoanBuilder,
    exact: true,
  },
  {
    path: `${Routes.LOANMARKETPLACE}/`,
    component: Marketplace,
    exact: true,
  },
  {
    path: `${Routes.LOANMARKETPLACE}/:id`,
    component: Marketplace,
    exact: true,
  },
  {
    path: Routes.MYSTATS,
    component: MyStats,
    exact: true,
  },
  {
    path: `${Routes.DETAILS}/:id`,
    component: LoanDetails,
    exact: true,
  },
  {
    path: Routes.LEADERFI,
    component: LeaderFi,
    exact: true,
  },
  {
    path: Routes.APPROVED_TOKENS,
    component: ApprovedCollateralTokens,
    exact: true,
  },
  {
    path: Routes.TOKENS_IN_CONTRACT,
    component: TokensInContract,
    exact: true,
  },
  {
    path: Routes.SETTINGS,
    component: Settings,
    exact: true,
  },
  {
    path: Routes.GOVPAD,
    component: ComingSoon,
    exact: true,
  },
  {
    path: Routes.FAIRLAUNCH,
    component: ComingSoon,
    exact: true,
  },
];
