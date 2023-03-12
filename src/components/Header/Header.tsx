import { ThemeToggle } from "components/ThemeToggle/ThemeToggle";
import { ThemeContext, themes } from "providers/ThemeProvider";
import React, { useContext } from "react";

export const Header: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <ThemeToggle
          onChange={() => {
            if (theme === themes.light) setTheme(themes.dark);
            if (theme === themes.dark) setTheme(themes.light);
          }}
          value={(theme = themes.dark)}
        />
      )}
    </ThemeContext.Consumer>
  );
};
