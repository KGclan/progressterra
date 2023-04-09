import axios from "axios";

import { CONFIG } from "shared/config";

export const accessTokenInstance = axios.create({
  baseURL: CONFIG.FOR_ACCESS_TOKEN,
});

export const bonusInstance = axios.create({
  baseURL: CONFIG.FOR_BONUS,
});