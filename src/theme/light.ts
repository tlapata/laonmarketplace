import { DefaultTheme } from "styled-components";
import base from "./base";
import { lightColors } from "./colors";
import { lightShadows } from "./shadows";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,
  shadows: lightShadows,
};

export default lightTheme;
