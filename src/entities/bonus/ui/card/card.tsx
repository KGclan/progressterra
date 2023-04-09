import React from "react";

import { useBonus } from "../../model";

import styles from "./styles.module.scss";
import { Icon } from "shared/ui";
import { dateFormatter } from "shared/lib";

export const Card = () => {
  const { bonusData } = useBonus();

  return (
    <div className={styles.card}>
      <div>
        <p className={styles.title}>{ bonusData.currentQuantity } бонусов</p>
        <p className={styles.info}>
          { dateFormatter(bonusData.dateBurning) } сгорит <Icon.Fire /> { bonusData.forBurningQuantity } бонусов
        </p>
      </div>
      <button className={styles.button}>
        <Icon.RightArrow />
      </button>
    </div>
  );
};
