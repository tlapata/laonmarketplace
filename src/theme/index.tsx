import {
  Colors,
  Breakpoints,
  MediaQueries,
  Spacing,
  Shadows,
  Radii,
  ZIndices,
  Fonts,
  Layout,
} from "./types";

export interface ApplicationTheme {
  siteWidth: number;
  isDark: boolean;
  colors: Colors;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
  fonts: Fonts;
  layout: Layout;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
