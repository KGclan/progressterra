import React from "react";

import styles from "./styles.module.scss";

interface ILayout {
  header: JSX.Element;
  children: JSX.Element;
  footer: JSX.Element;
}

export const Layout = ({ header, footer, children }: ILayout) => (
  <div className={styles.wrapper}>
    { header }
    { children }
    { footer }
  </div>
);