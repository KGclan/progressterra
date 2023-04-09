import { configureStore } from "@reduxjs/toolkit";

import { authModel } from "entities/auth";
import { bonusModel } from "entities/bonus";

export const store = configureStore({
  reducer: {
    auth: authModel.reducer,
    bonus: bonusModel.reducer,
  },
});