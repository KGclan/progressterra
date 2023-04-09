import React from "react";

import { Icon } from "shared/ui";

import styles from "./styles.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <p className={styles.logo}>ЛОГОТИП</p>
      <button className={styles.button}>
        <Icon.Information />
      </button>
    </div>
  </header>
);