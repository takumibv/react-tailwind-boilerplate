import React, { createContext, Dispatch, SetStateAction } from "react";
import { UserResponse } from "../types/api/userResponse";

type LoginUser = UserResponse & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export const LoginUserProvider = function ({ children }: { children: React.ReactNode }) {
  const [loginUser, setLoginUser] = React.useState<LoginUser | null>(null);

  return <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>{children}</LoginUserContext.Provider>;
};
