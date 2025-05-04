import { MediaQueries, Breakpoints, Spacing, Fonts, Layout } from "./types";

export const breakpointMap: { [key: string]: number } = {
  fold: 280,
  xxs: 375,
  xs: 390,
  sm: 480,
  md: 768,
  tab: 900,
  lg: 1024,
  xl: 1200,
};

const breakpoints: Breakpoints = Object.values(breakpointMap).map(
  (breakpoint) => `${breakpoint}px`
);

const mediaQueries: MediaQueries = {
 fold: `@media screen and (max-width: ${breakpointMap.fold}px)`,
  xxs: `@media screen and (max-width: ${breakpointMap.xxs}px)`,
  xs: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (max-width: ${breakpointMap.md}px)`,
  tab: `@media screen and (max-width: ${breakpointMap.tab}px)`,
  lg: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (max-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (max-width: ${breakpointMap.lg}px)`,
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
  success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};

const fonts: Fonts = {
  xs: 0.75,
  sm: 0.875,
  md: 1,
  lg: 1.25,
  xl: 2,
};

const layout: Layout = {
  background: "red",
  padding: "",
  margin: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  fonts,
  zIndices,
  layout,
};