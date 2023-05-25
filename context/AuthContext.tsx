import { createContext } from "react";

export interface IAuthContext {
  isAuth: boolean;
  setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultState = {
  isAuth: false,
}

export const AuthContext = createContext<IAuthContext>(defaultState);

