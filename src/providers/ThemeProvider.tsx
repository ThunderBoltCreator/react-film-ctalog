import React, { createContext, PropsWithChildren, useState } from "react";

export const ThemeContext = createContext({});

export const themes = {
  dark: "dark",
  light: "light",
};

const getTheme = () => {
  const theme = `${window.localStorage.getItem("theme")}`;
  if (Object.values(themes).includes(theme)) return theme;

  const userMedia = window.matchMedia("(prefers-color-scheme: light)");
  if (userMedia.matches) return themes.light;

  return themes.dark;
};

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
