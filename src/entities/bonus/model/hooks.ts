import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store/types";
import { aprobonusBonus } from "shared/api";
import { setBonusData } from "./model";

export const useBonus = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state: RootState) => state.auth);
  const { bonusData } = useSelector((state: RootState) => state.bonus);

  useEffect(() => {
    if (accessToken) {
      aprobonusBonus.getBonusData(accessToken)
        .then((responce) => {
          dispatch(setBonusData(responce.data.data));
        });
    }
  }, [accessToken]);

  return { bonusData };
};
