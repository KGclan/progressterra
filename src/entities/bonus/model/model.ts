import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  bonusData: IBonusData;
}

interface IBonusData {
  typeBonusName: string;
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}

const initialState: IInitialState = {
  bonusData: {
    typeBonusName: "",
    currentQuantity: 0,
    forBurningQuantity: 0,
    dateBurning: "",
  },
};

export const bonusModel = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    setBonusData: (state, { payload }: PayloadAction<IBonusData>) => {
      state.bonusData = payload;
    },
  },
});

export const { setBonusData } = bonusModel.actions;