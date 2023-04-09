import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "app/store/types";
import { aprobonusClients } from "shared/api";

import { setAccessToken, setIsAuth } from "./model";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuth, accessToken } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    aprobonusClients.getAccessToken()
      .then((responce) => {
        dispatch(setAccessToken(responce.data.accessToken));
        dispatch(setIsAuth(true));
      })
      .catch((error) => console.log(error));
  }, []);

  return { isAuth, accessToken };
};
