import { IThemeToggle } from "types/types";
import React from "react";

import s from "./ThemeToggle.module.scss";

export const ThemeToggle: React.FC<IThemeToggle> = ({ value, onChange }) => {
  return (
    <label className={s.switch} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        value={value}
        readOnly
      />
      <span className={s.slider} />
      <span className={s.wave} />
    </label>
  );
};
