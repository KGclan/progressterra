import { CONFIG } from "shared/config";

import { bonusInstance } from "./base";

interface IGetBonusDataResponce {
  resultOperation: {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  },
  data: {
    typeBonusName: string;
    currentQuantity: number;
    forBurningQuantity: number;
    dateBurning: string;
  }
}

export const getBonusData = (accessToken: string) => (
  bonusInstance.get<IGetBonusDataResponce>(`/api/v3/ibonus/generalinfo/${accessToken}`, {
    headers: {
      "Content-Type": "application/json",
      "AccessKey": CONFIG.ACCESS_KEY,
    },
  },
  )
);