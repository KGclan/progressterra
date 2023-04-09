import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isAuth: boolean;
  accessToken: string;
}

const initialState: IInitialState = {
  isAuth: false,
  accessToken: "",
};

export const authModel = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.accessToken = payload;
    },
  },
});

export const { setIsAuth, setAccessToken } = authModel.actions;