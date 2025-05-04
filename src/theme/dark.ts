import { DefaultTheme } from "styled-components";
import base from "./base";
import { darkColors } from "./colors";
import { darkShadows } from "./shadows";

const darkTheme: DefaultTheme = {
  ...base,
  colors: darkColors,
  shadows: darkShadows,
  isDark: true,
};

export default darkTheme;
