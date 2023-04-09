import { CONFIG } from "shared/config";

import { accessTokenInstance } from "./base";

interface IGetAccessTokenResponce {
  result: {
    status: number;
    message: string;
    messageDev: string;
    codeResult: number;
    duration: number;
    idLog: string;
  };
  accessToken: string;
}

export const getAccessToken = () => (
  accessTokenInstance.post<IGetAccessTokenResponce>("/api/v3/clients/accesstoken", {
    "idClient": CONFIG.CLIENT_ID,
    "accessToken": "",
    "paramName": "device",
    "paramValue": CONFIG.DEVICE_ID,
    "latitude": 0,
    "longitude": 0,
    "sourceQuery": 0,
  },
  {
    headers: {
      "AccessKey": CONFIG.ACCESS_KEY,
      "Content-Type": "application/json",
    },
  })
);