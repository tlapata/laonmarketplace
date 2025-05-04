import { Colors } from "./types";

export const baseColors = {
    bodyBackground: "#070E23",
    blockBG: "#081129",
    text: "#8687BC",
    textAccent: "#8CEBE7",
    purple: "#6567D1",
    red: "#E83232",
    green: "#7FFF00",
    darkGreen: "#12938D",
    statusGreen: "#75C724",
    statusPink: "#E832D5",
    gold: "#C79924",

  failure: "#ED4B9E",
  success: "#31D0AA",
  warning: "#FFB237",
  white: "#FFFFFF",
  black: "#000000",
  apple: "#5BBB43",
  pastelGreen: "#61DE56",
  border: "#E7D2FF",
  grey: "#ACB6CB",
};

export const brandColors = {
  binance: "#F0B90B",
  scrollbarTrackBorder: "#DCE0E8",
  scrollbarThumbBg: "#A8B0C5",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  bodyBackground: "#fefefe",
  text: "#010101",

  background: "#fff",
  backgroundInvert: "#141E40",
  darkGray:"#727272",
  particlesBckground: "transparent",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  primary: "#1F2431",
  primaryBright: "#282828",
  primaryDark: "#4850fb",
  secondary: "1F2431",
  tertiary: "#000",
  drawerBackground: "#F5F6FA",
  gradientBackground:
    "179.87deg, #FFFFFF 37.88%, #E3D7FE 93.6%, #C7B0FD 112.81%, #7137FA 128.18%",
  gradientBackgroundSecondary:
    "linear-gradient(0deg, #F5F6FA, #F5F6FA), #141E40",
  protocolsMarqueeBackground: "#F5F6FA",
  drawerSubMenuBackgroud: "#fff",
  adminDashboadText: "#141F3E",
  modalText: "#141E40",
  colorInvert: "#000000",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6AD050",
  tertiary: "#fff",
  background: "#141E40",
  backgroundInvert: "#fff",
  particlesBckground: "transparent",
  darkGray:"#727272",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  primaryDark: "#4850fb",
  primary: "#ffffff",
  primaryBright: "#fff",
  drawerBackground: "#141E40",
  gradientBackground: "180.06deg, #141E40 11.97%, #7137FA 140.33%",
  gradientBackgroundSecondary: "linear-gradient(0deg, #1C2954, #1C2954), #FFFFFF",
  protocolsMarqueeBackground: "#1C2954",
  drawerSubMenuBackgroud: "#1C2954",
  adminDashboadText: "#fff",
  modalText: "#98AFFF",
  colorInvert: "#fff",
};