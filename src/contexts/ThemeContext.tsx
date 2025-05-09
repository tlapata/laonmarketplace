import React, { useState } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { light, dark } from "theme";

const CACHE_KEY = "IS_DARK";

const ThemeContext = React.createContext({
  isDark: null,
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = sessionStorage.getItem(CACHE_KEY);
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true;
  });

  window.onunload = function () {
    sessionStorage.removeItem(CACHE_KEY);
  };

  const toggleTheme = () => {
    setIsDark((prevState: any) => {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
      return !prevState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
